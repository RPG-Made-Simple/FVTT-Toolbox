!> All paths are **required** to be in this format: `./<path>`.

## Does Exist
```js
async Toolbox.doesExist(path: String) -> Promise<Boolean>
```
```js
// Example
const doesfolderExist = await Toolbox.doesExist('./toolbox');
// Checks if the passed folder exist
```
```js
const doesFileExist = await Toolbox.doesExist('./toolbox.json');
// Checks if the passed file exist
```
This method checks if the passed `path` (`file` or `folder`) exists.

!> Only `JSON` files are supported.

## Save File
```js
async Toolbox.saveFile(path: String, data: Object) -> Promise<void>
```
```js
// Example
// Data must be simple
const data = {
  name: '🛠️ Toolbox',
  id: 'toolbox',
  type: 'module',
  requires: [
    name: '🕷️ Debugger',
    id: 'debugger',
    type: 'module'
  ],
  randomNumber: 842727,
  alias: [
    'toolbox',
    'Box of Tools',
    'Toolbox',
    'Tool Box',
  ]
}

await Toolbox.saveFile('./toolbox.json', data);
// Will save 'data' as 'toolbox.json' at './data' (Foundry data folder)
```

Saves the passed `data` as the passed `path`.

## Load File
```js
async Toolbox.loadFile(path: String) -> Promise<Object>
```
```js
// Example
const loadedData = await Toolbox.loadFile('./toolbox.json');
// Will load the data inside of 'toolbox.json'
```

Loads the data at the passed `path` and returns a `Object` containing the data.

## Make Sure
```js
async Toolbox.makeSure(path: String, defaultData: Object - optional) -> Promise<Boolean>
```
```js
// Example 1
const didFolderExist = await Toolbox.makeSure('./toolbox');
// Will create the folder if it does not exist
```
```js
// Example 2
const defaultData = {
  name: '🛠️ Toolbox',
  id: 'toolbox',
  type: 'module',
  requires: [
    name: '🕷️ Debugger',
    id: 'debugger',
    type: 'module'
  ],
  randomNumber: 842727,
  alias: [
    'toolbox',
    'Box of Tools',
    'Toolbox',
    'Tool Box',
  ]
}

const didFileExist = await Toolbox.makeSure('./toolbox.js', defaultData);
// Will create the file with the passed 'defaultData' if it does not exist
```
This method will check if the passed `path` exists, if it doesn't it creates what should be there, `file` or `folder`.

> If the target is a `file` you **must** pass the `defaultData`. If the target is a `folder`, `defaultData` gets ignored.
