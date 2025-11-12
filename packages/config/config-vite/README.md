# `config-vite`

add the following files to your project:

`tsconfig.src.json`
```json
{
  "extends": "config-vite/tsconfig.src.json",
  "include": ["src"]
}
```

`tsconfig.vite-config.json`
```json
{
  "extends": "config-vite/tsconfig.vite-config.json",
  "include": ["vite.config.ts", "vitest.config.ts"]
}
```

`tsconfig.json`
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.src.json" },
    { "path": "./tsconfig.vite-config.json" }
  ]
}
```