# toc-to-html

`toc-to-html` can change one-level array `toc` (table of contents)
to a nested `html` list.

## Example toc

Let's say we have `toc` that looks like this:

```js
const toc = [
  {
    content: 'Coffee',
    slug: '#coffee',
    lvl: 2
  },
  {
    content: 'Tea',
    slug: '#tea',
    lvl: 2
  },
  {
    content: 'Black tea',
    slug: '#black-tea',
    lvl: 3
  },
  {
    content: 'Green tea',
    slug: '#green-tea',
    lvl: 3
  },
  {
    content: 'Milk',
    slug: '#milk',
    lvl: 2
  }
];
```

`toc` can be created by `markdown-toc`
or other if following same structure.

## Example html

The `html` we get:

```html
<ul>
  <li><a href="#coffee">Coffee</a></li>
  <li><a href="#tea">Tea</a>
    <ul>
      <li><a href="#black-tea">Black tea</a></li>
      <li><a href="#green-tea">Green tea</a></li>
    </ul>
  </li>
  <li><a href="#milk">Milk</a></li>
</ul>
```

## How to use

```js
const tocToHtml = require('toc-to-html');
const toc = [
  /* as above toc */
];

/* change toc to html */
const html = tocToHtml(toc, /* options */);

/* see html */
console.log(html);
```

### `options`

```js
// ...
const options = {
  id: 'toc-list', // is optional
  clazz: 'list' // is optional
};

const html = tocToHtml(toc, options);
```

```html
<ul id="toc-list" class="list">
  <!-- items -->
</ul>
```

## When to use

- when putting `<!-- toc -->` into every
markdown file to inject the HTML at that position
takes too much time and also is nightmare
to change the position later as every file
needs to be updated

- when you need full control over where you put
the HTML by using a template library
(pug, ejs, handlebars, mustache, or other)
and passing the HTML via data

- when the HTML list created by a compiler
(marked, markdown-it, remarkable, showdown, or other)
doesn't have `id` or `class` but you need that control
or more versatility
