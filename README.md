Open `dist/index.html` and look at the console.

The expected output after applying:
```javascript
const mapPkgs = flow(
  keyBy(pkg => pkg.name),
  mapValues(pkg => pkg.value)
);
```
to this
```javascript
const pkgs = [
  {
    name: 'pkg1',
    value: 1,
  },
  {
    name: 'pkg2',
    value: 2,
  },
];
```
should be:
```javascript
{
  pkg1: 1,
  pkg2: 2,
}
```
which is true with `LodashModuleReplacementPlugin` turned off.

If you turn it on, the returned object is empty (`{}`).

I've tried both `currying` and `flattening` and I tried using `flow([func1, func2])` as well.

You can use `npm start` to run webpack and generate a new `bundle.js`.
