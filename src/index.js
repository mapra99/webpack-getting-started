function component() {
  const element = document.createElement('div');

  // Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
