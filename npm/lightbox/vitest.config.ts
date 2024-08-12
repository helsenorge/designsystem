import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../designsystem/src/utils/tests/setup-test.ts'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['cobertura', 'lcov', 'json'],
    },
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'test-report.xml',
    },
    server: {
      deps: {
        inline: ['@helsenorge/designsystem-react'],
      },
    },
  },
});
