/* global test,expect */
const tocToHtml = require('../src/toc-to-html');

const toc = [
  { content: 'M', slug: '#m', lvl: 4 },
  { content: 'M', slug: '#m', lvl: 4 },
  { content: 'M', slug: '#m', lvl: 4 },
    { content: 'E', slug: '#e', lvl: 6 },
    { content: 'E', slug: '#e', lvl: 6 },
    { content: 'E', slug: '#e', lvl: 6 },

  { content: 'S', slug: '#s', lvl: 3 },
  { content: 'S', slug: '#s', lvl: 3 },
  { content: 'S', slug: '#s', lvl: 3 },
    { content: 'Z', slug: '#z', lvl: 5 },
    { content: 'Z', slug: '#z', lvl: 5 },
    { content: 'Z', slug: '#z', lvl: 5 },
];

const html = tocToHtml(toc);

test('html', () => {
	expect(html).toBe(''
    + '<ul>'
      + '<li>'
        + '<ul>'
          + '<li>'
            + '<ul>'

              // 4
              + '<li><a href="#m">M</a></li>'
              + '<li><a href="#m">M</a></li>'
              + '<li><a href="#m">M</a>'
                + '<ul>'
                  + '<li>'
                    + '<ul>'
                        // 6
                        + '<li><a href="#e">E</a></li>'
                        + '<li><a href="#e">E</a></li>'
                        + '<li><a href="#e">E</a></li>'
                    + '</ul>'
                  + '</li>'
                + '</ul>'
              + '</li>'
            + '</ul>'
          + '</li>'

          // 3
          + '<li><a href="#s">S</a></li>'
          + '<li><a href="#s">S</a></li>'
          + '<li><a href="#s">S</a>'
            + '<ul>'
              + '<li>'
                + '<ul>'
                    // 5
                    + '<li><a href="#z">Z</a></li>'
                    + '<li><a href="#z">Z</a></li>'
                    + '<li><a href="#z">Z</a></li>'
                + '</ul>'
              + '</li>'
            + '</ul>'
          + '</li>'
        + '</ul>'

      // 2 END
      + '</li>'
    + '</ul>'
  );
});
