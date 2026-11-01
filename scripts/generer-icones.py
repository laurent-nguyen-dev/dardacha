"""Génère les icônes de l'application à partir du logo source (T21).

Usage : python3 scripts/generer-icones.py
Dépendances : Pillow et NumPy (pip install pillow numpy).

Le logo source (assets/logo-source.png) est une tuile aux coins arrondis
posée sur un fond blanc, avec une ombre. Le script :
1. découpe la tuile en carré et remplace les coins blancs par les couleurs
   du bord de la tuile (diffusion), pour obtenir une image pleine ;
2. en tire l'icône iOS / par défaut (iOS arrondit lui-même les coins) ;
3. en tire l'icône adaptative Android : le logo occupe les 72 dp visibles
   sur 108 dp, la marge (masquée par le lanceur) prolonge les bords ;
4. en tire l'icône monochrome Android (icônes à thème) : le mot
   « Dardacha » en silhouette ;
5. en tire le logo à fond transparent pour le README.
"""

import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(RACINE, "assets")

# Géométrie de la tuile dans le logo source (pixels, mesurée une fois).
X0, Y0, X1, Y1 = 42, 47, 1212, 1168
RAYON = 242
RETRAIT = 4  # écarte le liseré blanc anticrénelé du bord de la tuile
COTE = 1024
PART_VISIBLE = 72 / 108  # zone visible de l'icône adaptative Android


def masque_tuile(taille, decalage):
    """Masque (bool) de la tuile arrondie dans un carré `taille`."""
    masque = Image.new("L", (taille, taille), 0)
    dx, dy = decalage
    ImageDraw.Draw(masque).rounded_rectangle(
        (X0 - dx + RETRAIT, Y0 - dy + RETRAIT, X1 - dx - RETRAIT, Y1 - dy - RETRAIT),
        radius=RAYON - RETRAIT,
        fill=255,
    )
    return np.asarray(masque) > 127


def diffuser(pixels, connu):
    """Remplit les pixels inconnus avec la moyenne de leurs voisins connus."""
    pixels = pixels.astype(float)
    connu = connu.copy()
    while not connu.all():
        somme = np.zeros_like(pixels)
        nombre = np.zeros(connu.shape)
        for axe, pas in ((0, 1), (0, -1), (1, 1), (1, -1)):
            voisin = np.roll(connu, pas, axis=axe)
            somme += np.roll(pixels * connu[..., None], pas, axis=axe)
            nombre += voisin
        nouveaux = ~connu & (nombre > 0)
        pixels[nouveaux] = somme[nouveaux] / nombre[nouveaux][:, None]
        connu |= nouveaux
    return pixels.clip(0, 255).astype(np.uint8)


def main():
    source = Image.open(os.path.join(ASSETS, "logo-source.png")).convert("RGB")

    # 1. Carré centré sur la tuile, coins remplis.
    taille = X1 - X0
    gauche = X0
    haut = (Y0 + Y1) // 2 - taille // 2
    carre = np.asarray(source.crop((gauche, haut, gauche + taille, haut + taille)))
    interieur = masque_tuile(taille, (gauche, haut))
    plein = Image.fromarray(diffuser(carre, interieur))

    # 2. Icône iOS / par défaut.
    plein.resize((COTE, COTE), Image.LANCZOS).save(os.path.join(ASSETS, "icon.png"))

    # 3. Premier plan de l'icône adaptative Android.
    visible = round(COTE * PART_VISIBLE)
    marge_avant = (COTE - visible) // 2
    marge_apres = COTE - visible - marge_avant
    reduit = np.asarray(plein.resize((visible, visible), Image.LANCZOS))
    avant_plan = np.pad(
        reduit, ((marge_avant, marge_apres), (marge_avant, marge_apres), (0, 0)), mode="edge"
    )
    Image.fromarray(avant_plan).save(os.path.join(ASSETS, "android-icon-foreground.png"))

    # 4. Monochrome : le texte bleu nuit (« Dardacha » et les points).
    rvb = carre.astype(int)
    luminance = 0.299 * rvb[..., 0] + 0.587 * rvb[..., 1] + 0.114 * rvb[..., 2]
    texte = (luminance < 80) & (rvb[..., 2] > rvb[..., 0] + 25) & interieur
    zone = np.zeros_like(texte)
    # Le mot puis les points (coordonnées du source), hors contour des bulles.
    zone[495 - haut : 735 - haut, 190 - gauche : 1140 - gauche] = True
    zone[780 - haut : 850 - haut, 500 - gauche : 760 - gauche] = True
    texte &= zone
    alpha = Image.fromarray((texte * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1))
    alpha = alpha.resize((visible, visible), Image.LANCZOS)
    mono = Image.new("RGBA", (COTE, COTE), (0, 0, 0, 0))
    blanc = Image.new("RGBA", (visible, visible), (255, 255, 255, 255))
    mono.paste(blanc, (marge_avant, marge_avant), alpha)
    mono.save(os.path.join(ASSETS, "android-icon-monochrome.png"))

    # 5. Logo du README : la tuile, fond transparent.
    logo = Image.fromarray(carre).convert("RGBA")
    logo.putalpha(Image.fromarray((interieur * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1)))
    logo.resize((512, 512), Image.LANCZOS).save(os.path.join(ASSETS, "logo.png"))


if __name__ == "__main__":
    main()
