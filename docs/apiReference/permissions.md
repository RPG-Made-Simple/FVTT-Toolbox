> **All** methods here check if the `user` is **online**, that's why the methods have `can` in their name, a **offline** `user` **can't** do something based on permissions, because they are not currently present.

## Can
```js
Toolbox.can(permissions: Array<String>, userId: String - OPTIONAL) -> Boolean
```
```js
// Example
const userId = game.user.id;
const can = Toolbox.can(['FILES_BROWSE', 'FILES_UPDATE'], userId);
// Checks if 'userId' (local user) has the 'FILES_BROWSE' and 'FILES_UPDATE' permissions
```

Checks if passed `userId` has the passed `permissions`.

> If no `userId` gets passed, the check will be made on the **local user**.

> All the available permissions are defined at `game.permissions`

## Can Edit
```js
Toolbox.canEdit(document: Document, userId: String - OPTIONAL) -> Boolean
```
```js
// Example
const item = await fromUuid('<placehold_uuid>');
const userId = game.user.id;
const canEdit = Toolbox.canEdit(item, userId);
// Checks if 'userId' (local user) can edit the passed 'item'
```

Checks if passed `userId` can edit the passed `document`.

> If no `userId` gets passed, the check will be made using the **local user**.

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

## Someone Who Can Edit
```js
Toolbox.someoneWhoCanEdit(document: Document) -> Object
```
```js
// Example
const item = await fromUuid('<placehold_uuid>');
const user = Toolbox.someoneWhoCanEdit(item);
// Returns the first found user that has enough permission to edit the 'document'
```

Returns the first found `user` that has enough permission to edit the `document`.

> This includes the **local user**, which will be returnd if it has enough permissions.
