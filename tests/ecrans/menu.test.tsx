import { renderRouter, screen } from 'expo-router/testing-library';

describe('Menu', () => {
  it("affiche le nom de l'application", async () => {
    await renderRouter('./src/app');
    expect(screen.getAllByText('Arabe au quotidien').length).toBeGreaterThan(0);
  });
});
