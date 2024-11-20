# Starter template para TypeScript + tsx + ESLint + Prettier

## Crear un proyecto

```sh
npm init -y
```

```sh
npm i -D tsx pkgroll typescript @types/node
```

Directorio

```sh
.
├── dist
├── node_modules
├── src
│   └── index.ts
├── package.json
└── tsconfig.json
└── .gitignore
```

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2022",
    "strict": true,
    "outDir": "./dist",
    "moduleDetection": "force",
    "module": "Preserve",
    "resolveJsonModule": true,
    "allowJs": true,
    "esModuleInterop": true,
    "isolatedModules": true
  }
}
```

package.json

```json
"exports": "./dist/index.js",
"type": "module",
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "pkgroll",
  "start": "node dist/index.js"
},
```

```sh
npm run dev
```

## Configurar Prettier y ESLint en un proyecto

CLI de ESLint:

Opción 1:

```sh
npm init @eslint/config@latest
```

Opción 2:

```sh
npx @eslint/create-config
```

Instalar Prettier: --save-exact para fijar la versión exacta.

```sh
npm install --save-dev --save-exact prettier
```

package.json:

```json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "pkgroll",
  "start": "node dist/index.js",
  "format": "prettier --write src/"
},
```

.prettierrc

```json
{
  "semi": true, // Punto y coma al final de cada línea
  "singleQuote": true, // Comillas simples
  "printWidth": 80, // Longitud máxima de línea
  "tabWidth": 2, // Tamaño de tabulación
  "trailingComma": "es5", // Coma al final de objetos y arreglos
  "bracketSpacing": true, // Espacios en objetos
  "arrowParens": "always" // Paréntesis en funciones flecha
}
```

.prettierignore

```txt
node_modules
dist
```

- [https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

```sh
npm install --save-dev eslint-config-prettier
```

```js
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier, // Desactiva reglas de ESLint que entran en conflicto con Prettier
  {
    ignores: ['node_modules', 'dist'],
  },
];
```

Finalmente agregar el script para ejecutar ESLint:

```json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "pkgroll",
  "start": "node dist/index.js",
  "format": "prettier --write src/",
  "lint": "eslint src/"
},
```
