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

### Note for Developers (modules and macros)
Take a look at the [Documentation](https://docs.rpgmadesimple.com/FVTT-Toolbox/)

<a href='https://ko-fi.com/T6T8IFCB5' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

---
## Supported Versions
- **V11**
- ~~**V12**~~ _as soon as it gets released_

## Main Features
- Eye candy to [showcase]() your module at the `console`
- [Check]() the existance of `files` and `folders` at `./data`
- [Create]() `files` and `folders` at `./data`
- [Load]() `files` from `./data`
- [Check]() permissions for users
  - [`can()`]() to see if a user can do something based on permissions
  - [`anyoneWhoCan()`]() to get the first found user that can do something based on permissions
  - [`everyoneWhoCan()`]() to get a `Array` containing all the users that have the passed permissions


<h2 align="center"> <a href="https://github.com/ZotyDev/FoundryVTT-Toolbox/blob/main/CHANGELOG.md"> Changelog</a> </h2>
