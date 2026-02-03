import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/utils/tests/setup-test.ts'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['cobertura', 'lcov', 'json'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['node_modules/', 'vitest.setup.ts', '**/*.stories.{tsx, mdx}', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    },
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'test-report.xml',
    },
  },
});
