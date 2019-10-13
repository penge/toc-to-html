/* global test,expect */
const tocToHtml = require('../src/toc-to-html');

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

const html = tocToHtml(toc);

test('html', () => {
	expect(html).toBe(''
    + '<ul>'
      + '<li><a href="#coffee">Coffee</a></li>'
      + '<li><a href="#tea">Tea</a>'
        + '<ul>'
          + '<li><a href="#black-tea">Black tea</a></li>'
          + '<li><a href="#green-tea">Green tea</a></li>'
        + '</ul>'
      + '</li>'
      + '<li><a href="#milk">Milk</a></li>'
    + '</ul>'
  );
});
