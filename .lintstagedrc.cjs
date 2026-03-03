module.exports = {
  '*.{js,jsx,ts,tsx,mjs}': ['biome format --write', 'biome lint --write'],
  '*.{ts,tsx}': () => 'tsc --noEmit',
  '*.{css,scss,sass}': ['biome format --write'],
  '*.{json,md,yml,yaml}': ['biome format --write'],
};
