Testing project
===============

### For integrating:
- `sensiolabs/typescript-bundle`
- `symfonycasts/sass-bundle`
- `symfony/stimulus-bundle`.

### Run the project by executing:
- `tools/.start-server`

### You can then access the project on:
- [https://typescript-sass-stimulus.wip/](https://typescript-sass-stimulus.wip/)

### Check the homepage, it should load display:

```
Homepage

Hello JS Stimulus! Edit me in assets/js/controllers/hello_controller.js
Hello Typescript Stimulus! Edit me in assets/typescript/controllers/hello_typescript_controller.ts
```

### And the console should log:

```
Loaded assets/js/app.js 🎉
Loaded Stimulus bootstrap.ts 🎉
Loaded hello_controller.js 🎉
Loaded hello_typescript_controller.ts 🎉
```

### Problem
⚠️ Currently the `typescript`-controllers aren't loaded and thus the referencing content isn't showing like stated above.
