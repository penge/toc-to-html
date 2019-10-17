/* global test,expect */
const tocToHtml = require('../src/toc-to-html');

const toc = [
  { content: 'Heading O', slug: 'heading-o', lvl: 2 },
  { content: 'Heading I', slug: 'heading-i', lvl: 2 },
];

const html = tocToHtml(toc, {
  id: 'toc-list'
});

test('html', () => {
	expect(html).toBe(''
    + '<ul id="toc-list">'
      + '<li><a href="#heading-o">Heading O</a></li>'
      + '<li><a href="#heading-i">Heading I</a></li>'
    + '</ul>'
  );
});
