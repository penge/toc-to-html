function renderHeading(heading) {
  if (heading === undefined) {
    return '';
  }

  return `<a href="${heading.slug}">${heading.content}</a>`;
}

function renderChildren(children, options) {
  if (children.length === 0) {
    return '';
  }

  let html = ul(options);
  for (const child of children) {
    html += renderPair(child);
  }
  html += '</ul>';
  return html;
}

function renderPair(pair) {
  const [heading, children] = pair;

  let html = '<li>';
  html += renderHeading(heading);
  html += renderChildren(children);
  html += '</li>';
  return html;
}

function ul(options) {
  if (!options) {
    return '<ul>';
  }

  const { id, clazz } = options;

  let str = '';
  if (id) str += ` id="${id}"`;
  if (clazz) str += ` class="${clazz}"`;

  return `<ul${str}>`;
}

/**
 * Renders tree to <ul>...</ul>
 */
function render(tree, options) {
  const [heading, children] = tree;

  let html = '';

  if (heading) {
    html += ul(options);
    html += renderPair(tree);
    html += '</ul>';
  } else {
    html += renderChildren(children, options);
  }

  return html;
}

module.exports = render;
