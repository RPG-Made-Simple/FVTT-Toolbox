## Get Token Corners
```js
Toolbox.getTokenCorners(token: Token) -> Array<Object>
```
```js
// Example
const token = await fromUuid('<placehold_uuid>');
const corners = Toolbox.getTokenCorners(token);
// Returns the corners of 'token'
```

Returns the corners of the passed `token`. The returned data is an `Array` of size `4`, each entry is an `Object` defined as `{x: Number, y: Number}`.

Example of what gets returned for a token at `x` = `0` and `y` = `0`:
```js
[
  {
    x: -50,
    y: -50,
  },
  {
    x: 50,
    y: -50,
  },
  {
    x: 50,
    y: 50,
  },
  {
    x: -50,
    y: 50,
  }
]
```

> The order is `top-left`, `top-right`, `bottom-right` and `bottom-left`.
