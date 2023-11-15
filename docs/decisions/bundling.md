# Bundling

    Transform multiple files into a single one

Benefits:

- Reduced size
- Faster install time
- Better tree-shaking

Downside:

- Consumers will be forced to include all code in its package, even when it's not used
  - Affects the `tree-shaking algorithm`

Typescript does not emit types by default
We should bundle both `js` and `ts` files

References:

- https://jakeginnivan.medium.com/options-for-publishing-typescript-libraries-9c37bec28fe
- https://medium.com/@martin_hotell/typescript-library-tips-rollup-your-types-995153cc81c7
- https://stackoverflow.com/questions/71275009/bundling-and-publishing-an-npm-library-is-it-common-to-resolve-all-dependencies
