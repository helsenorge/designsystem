# Docs Workspace

This workspace is for documentation and testing purposes only. It's not published to npm.

## Using Source vs Built Versions

By default, this workspace uses the **source code** from `npm/designsystem/src/`. However, you can test against the **built version**
(`npm/designsystem/lib/`) to reproduce issues that consumers see. (`npm/designsystem/lib/`) to reproduce issues that consumers see.

### Testing Against Source (Default)

```bash
# Run tests against source code
npm run docs:test

# Or from root
npm run test --workspace=@helsenorge/docs-guide
```

### Testing Against Built Version

```bash
# First, build the design system
npm run build

# Run tests against built lib/ folder
npm run docs:test:built

# Or from root
USE_BUILT=true npm run test --workspace=@helsenorge/docs-guide
```

### Storybook

```bash
# Run Storybook with source code (default)
npm start

# Run Storybook with built version
npm run start:built
```

## Why Use Built Version?

The built version (`lib/`) is what gets published to npm and what consumers install. Testing against it helps you:

1. **Reproduce consumer issues** - Consumers use the built version, not the source
2. **Catch build problems** - Issues that only appear after building (type generation, imports, etc.)
3. **Validate exports** - Ensure all exports in `package.json` work correctly
4. **Test production code** - The built version is minified and optimized

## Quick Commands

```bash
# Test with source
npm run docs:test

# Test with built version
npm run build                # Build first!
npm run docs:test:built

# Storybook with built version
npm run build
npm run start:built

# Install a new dependency (only for docs)
npm install --workspace=@helsenorge/docs-guide <package-name>
```
