<a href="https://foundryvtt.com/packages/toolbox">
  <p align="center">
    <img src="https://raw.githubusercontent.com/RPG-Made-Simple/FVTT-Toolbox/main/branding/title.png" alt="Toolbox Title">
  </p>
</a>

<p align="center">
  <a href="https://discord.gg/RAgPXB4zG7">
    <img src="https://discord.com/api/guilds/1071251491375042661/widget.png?style=shield"/>
  </a>
</p>

A FoundryVTT library that provides some common helper utilities, it doesn't have a general focus, the goal is just to provide module authors with common used methods, well developed, to be reused without worries in any module or macro.

It **does not** contain any configurations or interface, this library is **only** a API.

You can safely rely on this module, all the errors and edge cases are (or will be) handled, your code will **never** be crashed by Toolbox by itself (note that errors still could happen, but they will always say why things didn't work correctly)._

Do you like the module? Consider supporting it :)

<a href='https://ko-fi.com/T6T8IFCB5' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

### Note for Developers (modules and macros)
Take a look at the [Documentation](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/)

---
## Supported Versions
- **V11**
- ~~**V12**~~ _as soon as it gets released_

## Main Features
- Eye candy to [showcase](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/utilities?id=showcase-module) your module at the `console`
- [Check](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/utilities?id=check) the existance of `files` and `folders` at `./data`
- [Create](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/filesystem?id=make-sure) `files` and `folders` at `./data`
- [Load](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/filesystem?id=load-file) `files` from `./data`
- [Check](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions) permissions for users
  - [`can()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=can) to see if a user can do something based on permissions
  - [`anyoneWhoCan()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=anyone-who-can) to get the first found user that can do something based on permissions
  - [`everyoneWhoCan()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=everyone-who-can) to get a `Array` containing all the users that have the passed permissions
  - [`canEdit()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=can-edit) to see if a user can edit something
  - [`someoneWhoCanEdit()`](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/permissions?id=someone-who-can-edit) to get the first found user that can edit something
- [Math](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/math) functions
- [Token](https://docs.rpgmadesimple.com/FVTT-Toolbox/#/apiReference/token) methods


<h2 align="center"> <a href="https://github.com/ZotyDev/FoundryVTT-Toolbox/blob/main/CHANGELOG.md"> Changelog</a> </h2>
