import IconGenerator from './IconGenerator.js';

(async () => {
  try {
    const generator = new IconGenerator();
    await generator.main();
  } catch (error) {
    console.error('Icon generation failed:', error);
    process.exitCode = 1;
  }
})();
