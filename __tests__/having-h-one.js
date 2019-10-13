/* global test,expect */
const tocToHtml = require('../src/toc-to-html');

const toc = [
  { content: 'Heading 1', slug: '#heading-1', lvl: 1 },
  { content: 'Heading A', slug: '#heading-a', lvl: 2 },
  { content: 'Heading B', slug: '#heading-b', lvl: 2 },
  { content: 'Heading C', slug: '#heading-c', lvl: 2 },
];

const html = tocToHtml(toc);

test('html', () => {
	expect(html).toBe(''
    + '<ul>'
      + '<li><a href="#heading-1">Heading 1</a>'
        + '<ul>'
          + '<li><a href="#heading-a">Heading A</a></li>'
          + '<li><a href="#heading-b">Heading B</a></li>'
          + '<li><a href="#heading-c">Heading C</a></li>'
        + '</ul>'
      + '</li>'
    + '</ul>'
  );
});
