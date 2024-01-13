## Ready
`toolbox.ready`
```js
// Example
Hooks.once('toolbox.ready', () => {
    // ...
});
// Will execute something when toolbox is ready
```
Main hook of the module, gets called after `ready` and should be used as entry-point for anything that wants to use 🛠️ Toolbox.

> If your module uses 🛠️ Toolbox you **must** use `toolbox.ready` instead of the `ready` hook.

!> If you don't use `toolbox.ready` your module might try to use methods that are not yet fully loaded.
