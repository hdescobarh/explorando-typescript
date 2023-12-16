# Configurando el entorno

## Paquetes

1. TypeScript

```shell
npm install --save-dev typescript@latest
```

Para algunas configuraciones por defecto:

```shell
npm install --save-dev @tsconfig/recommended
```

En tsconfig.json agregar:

```json
{
  "extends": "extends": "@tsconfig/recommended/tsconfig"
}
```

2. Como linter ESLint:

```shell
npm init @eslint/config
```

3. Como formatter Prettier:

```shell
npm install --save-dev prettier -D --save-exact
```

Configuración para evitar conflictos entre [Prettier y ESlint](https://github.com/prettier/eslint-config-prettier)

```shell
npm install --save-dev eslint-config-prettier
```

Agregar **Al final** del archivo de configuración .eslintrc.\*:

```json
{
  "extends": ["some-other-config-you-use", "prettier"]
}
```
