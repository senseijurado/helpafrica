# Cosas para que Diego haga:

**Diego** tiene que implementar el Semantic Versioning de la siguiente Forma:

-   [ ] Install this package: `npm i semantic-release`. _Lo hace Diego, a mi no me funciona_.
-   [x] Crear tokens Access en GitHub: `GH_TOKEN=`
-   [x] Copiar esos tokens en GitHub Actions en el repository:
-   [x] Crear carpetas en local y archivo `main.yaml`:
-   [x] Crear configuraciones en archivo `main.yaml`:
-   [x] Copiar plugins en archivo `package.json`:
-   [x] Crear comando script `npx semantic-release` en `package.json`.
-   [x] Una vez hecho todo, crear los commits de la siguiente forma:

```shell
    fix: "patch message commit"  => Patch Fix Release
    feat: "minor message commit" => Minor Feature Release
    perf: "major message commit" => Major Feature Release
```

-   [x] Cuando se haga eso, y se ejecute el push a rama `main` en el repository remote en github se creará automatically un `tag release` con el mensaje del comit que se haya puesto.
