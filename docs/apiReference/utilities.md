## Check
```js
Toolbox.check(value: any, type: String - optional) -> Boolean
```
```js
// Example 1
const validArgument = Toolbox.check("Hey, I'm a string!", 'string');
// Will check if the passed value is a string
```
```js
// Example 2
const data = {
  type: 'person',
  name: 'Bob'
}
const validArument = Toolbox(data);
// Will check if 'data' is not empty
```
Will check the passed `value` agains't the passed `type`, useful for checking if a value is properly defined before doing anything with it.

If **no `type` is passed** the function will only check if `value` is **not empty**.

`type` should be a literal `String`, i.e. `string`, `boolean`, `number`.

`type` also supports some other non-default types as well, currently these are:
- `array` - a `Array` of `any`

## Showcase Module

```js
Toolbox.showcaseModule(moduleId: String) -> undefined
```
```js
// Example
Toolbox.showcaseModule('toolbox');
// Will register 🛠️ Toolbox to be showcased at the console
```

Registers the `moduleId` to showcase it later inside the `console`, it is mainly a eye-candy.

> This method also outputs some information about required and recommended modules, if a required module is missing, a error will be shown to users. Recommended modules that are missing will be a silent warn inside the console.
