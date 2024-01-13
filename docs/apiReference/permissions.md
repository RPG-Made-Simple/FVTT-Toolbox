> **All** methods here check if the `user` is **online**, that's why the methods have `can` in their name, a **offline** `user` **can't** do something based on permissions, because they are not currently present.

## Can
```js
Toolbox.can(permissions: Array<String>, username: string - OPTIONAL) -> Boolean
```
```js
// Example
Toolbox.can(['FILES_BROWSE', 'FILES_UPDATE'], 'Gamemaster');
// Checks if 'Gamemaster' has the 'FILES_BROWSE' and 'FILES_UPDATE' permissions
```

Checks if user `username` have the passed `permissions`.

If no `username` gets passed the ceck will be done on the **local user**.

> All the available permissions are defined at `game.permissions`

## Everyone Who Can
```js
Toolbox.everyoneWhoCan(permissions: Array<String>) -> Array<Object>
```
```js
// Example
const users = Toolbox.everyoneWhoCan(['SHOW_RULER']);
// Returns all users that have the `SHOW_RULER` permission
```

Returns **all** the `users` who have the passed `permissions`.

## Anyone Who Can
```js
Toolbox.anyoneWhoCan(permissions: Array<String>) -> Array<Object>
```
```js
// Example
const user = Toolbox.anyoneWhoCan(['TOKEN_CREATE']);
// Returns the first found user that has the 'TOKEN_CREATE'
```

Returns the first found `user` that has the passed `permissions`.

> This includes the **local user**, which will be passed if it has enough permissions.
