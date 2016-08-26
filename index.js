import { flow, keyBy, mapValues } from 'lodash/fp';

const mapPkgs = flow(
  keyBy(pkg => pkg.name),
  mapValues(pkg => pkg.value)
);

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

console.log(mapPkgs(pkgs));
