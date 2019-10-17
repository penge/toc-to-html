/* global test,expect */
const tocToHtml = require('../src/toc-to-html');

const toc = [
  { content: 'Heading I', slug: 'heading-i', lvl: 2 },
  { content: 'Heading A', slug: 'heading-a', lvl: 2 },
  { content: 'Heading C', slug: 'heading-c', lvl: 2 },
];

const html = tocToHtml(toc, {
  id: 'toc-list',
  clazz: 'list'
});

test('html', () => {
	expect(html).toBe(''
    + '<ul id="toc-list" class="list">'
      + '<li><a href="#heading-i">Heading I</a></li>'
      + '<li><a href="#heading-a">Heading A</a></li>'
      + '<li><a href="#heading-c">Heading C</a></li>'
    + '</ul>'
  );
});
