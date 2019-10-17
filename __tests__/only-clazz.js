/* global test,expect */
const tocToHtml = require('../src/toc-to-html');

const toc = [
  { content: 'Heading O', slug: 'heading-o', lvl: 2 },
  { content: 'Heading C', slug: 'heading-c', lvl: 2 },
];

const html = tocToHtml(toc, {
  clazz: 'list'
});

test('html', () => {
	expect(html).toBe(''
    + '<ul class="list">'
      + '<li><a href="#heading-o">Heading O</a></li>'
      + '<li><a href="#heading-c">Heading C</a></li>'
    + '</ul>'
  );
});
