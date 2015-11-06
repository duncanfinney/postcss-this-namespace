# PostCSS This Namespace [![Build Status][ci-img]][ci]

[PostCSS] plugin to add .THIS to all selectors in css.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/duncanfinney/postcss-this-namespace.svg
[ci]:      https://travis-ci.org/duncanfinney/postcss-this-namespace

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-this-namespace') ])
```

See [PostCSS] docs for examples for your environment.
