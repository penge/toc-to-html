const buildTree = require('./build-tree');
const render = require('./render');

function tocToHtml(toc, options) {
  if (Array.isArray(toc) === false || toc.length === 0) {
    return '';
  }

  const tree = buildTree(toc);
  const html = render(tree, options);
  return html;
}

module.exports = tocToHtml;
