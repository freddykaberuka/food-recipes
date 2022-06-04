function g(e) {
  return document.getElementById(e);
}

function t(i) {
  const template = document.createElement('template');
  template.innerHTML = i;
  return template.content.firstChild;
}

export { g, t };