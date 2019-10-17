/* global test,expect */
const tocToHtml = require('../src/toc-to-html');

const toc = [
  { content: 'A', slug: 'a', lvl: 2 },
  { content: 'B', slug: 'b', lvl: 2 },
  { content: 'C', slug: 'c', lvl: 2 },

    // Expect to be nested under 'C'
    { content: 'D', slug: 'd', lvl: 3 },
    { content: 'E', slug: 'e', lvl: 3 },
    { content: 'F', slug: 'f', lvl: 3 },

      // Expect to be nested under 'F'
      { content: 'G', slug: 'g', lvl: 4 },
      { content: 'H', slug: 'h', lvl: 4 },

    // Expect to be nested under 'C'
    { content: 'I', slug: 'i', lvl: 3 },
    { content: 'J', slug: 'j', lvl: 3 },

  { content: 'K', slug: 'k', lvl: 2 },
  { content: 'L', slug: 'l', lvl: 2 },
    { content: 'M', slug: 'm', lvl: 3 },
    { content: 'N', slug: 'n', lvl: 3 },

  { content: 'O', slug: 'o', lvl: 2 },
  { content: 'P', slug: 'p', lvl: 2 },
    { content: 'Q', slug: 'q', lvl: 3 },
      { content: 'R', slug: 'r', lvl: 4 },
      { content: 'S', slug: 's', lvl: 4 },
      { content: 'T', slug: 't', lvl: 4 },
        { content: 'U', slug: 'u', lvl: 5 },
        { content: 'V', slug: 'v', lvl: 5 },
          { content: 'W', slug: 'w', lvl: 6 },
          { content: 'X', slug: 'x', lvl: 6 },
    { content: 'Y', slug: 'y', lvl: 3 },
    { content: 'Z', slug: 'z', lvl: 3 },

  { content: 'Pavel', slug: 'pavel', lvl: 2 },
  { content: 'Bucka', slug: 'bucka', lvl: 2 },
];

const html = tocToHtml(toc);

test('html', () => {
	expect(html).toBe(''
    + '<ul>'
      // 2
      + '<li><a href="#a">A</a></li>'
      + '<li><a href="#b">B</a></li>'
      + '<li><a href="#c">C</a>'

        + '<ul>'
          // 3
          + '<li><a href="#d">D</a></li>'
          + '<li><a href="#e">E</a></li>'
          + '<li><a href="#f">F</a>'

            + '<ul>'
                // 4
                + '<li><a href="#g">G</a></li>'
                + '<li><a href="#h">H</a></li>'
            + '</ul>'

          + '</li>'
          + '<li><a href="#i">I</a></li>'
          + '<li><a href="#j">J</a></li>'
        + '</ul>'
      + '</li>'

      // 2
      + '<li><a href="#k">K</a></li>'
      + '<li><a href="#l">L</a>'
        + '<ul>'
          // 3
          + '<li><a href="#m">M</a></li>'
          + '<li><a href="#n">N</a></li>'
        + '</ul>'
      + '</li>'

      // 2
      + '<li><a href="#o">O</a></li>'
      + '<li><a href="#p">P</a>'
        + '<ul>'
          // 3
          + '<li><a href="#q">Q</a>'
            + '<ul>'
              // 4
              + '<li><a href="#r">R</a></li>'
              + '<li><a href="#s">S</a></li>'
              + '<li><a href="#t">T</a>'
                + '<ul>'
                  // 5
                  + '<li><a href="#u">U</a></li>'
                  + '<li><a href="#v">V</a>'
                    + '<ul>'
                      // 6
                      + '<li><a href="#w">W</a></li>'
                      + '<li><a href="#x">X</a></li>'
                    + '</ul>'
                  + '</li>'
                + '</ul>'
              + '</li>'
            + '</ul>'
          + '</li>'
          + '<li><a href="#y">Y</a></li>'
          + '<li><a href="#z">Z</a></li>'
        + '</ul>'
      + '</li>'

      + '<li><a href="#pavel">Pavel</a></li>'
      + '<li><a href="#bucka">Bucka</a></li>'
    + '</ul>'
  );
});
