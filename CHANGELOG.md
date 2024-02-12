# 🛠️ Toolbox Changelog

## Version 1.1.0

- *Internal* - Changed indentation from `4` spaces to `2` spaces
- *API/Internal* - Changed all instances of `username` to `userId`.
- *API* - Added [`randomIntMax()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/math?id=random-int-max)
- *API* - Added [`getTokenCorners()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/token?id=get-token-corners)
- *API* - Added [`canEdit()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=can-edit)
- *API* - Added [`someoneWhoCanEdit()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=someone-who-can-edit)

## Version 1.0.1

- *Fix* - `saveFile()` now properly returns `true` or `false`.
- *Internal* - Improved `check()` with better checks.
- *Internal* - Improved `can()` to use `user.hasPermission()`.

## Version 1.0.0

- *Internal* - All logging and debugging depends on [Debugger](https://foundryvtt.com/packages/debugger).
- *API* - Added [`check()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/utilities?id=check)
- *API* - Added [`showcaseModule()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/utilities?id=showcase-module)
- *API* - Added [`can()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=can)
- *API* - Added [`everyoneWhoCan()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=everyone-who-can)
- *API* - Added [`anyoneWhoCan()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=anyone-who-can)
- *API* - Added [`doesExist()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/filesystem?id=does-exist)
- *API* - Added [`saveFile()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/filesystem?id=save-file)
- *API* - Added [`loadFile()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/filesystem?id=load-file)
- *API* - Added [`makeSure()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/filesystem?id=make-sure)
