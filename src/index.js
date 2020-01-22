import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // Lodash
  element.innerHTML = _.join(['Hello', 'webpack', myName('Miguel')], ' ');

  return element;
}

document.body.appendChild(component());
