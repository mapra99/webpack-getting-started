import _ from 'lodash';
import './styles.css';
import printMe from './print.js';
import myImage from './my_image.jpg';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const newImage = document.createElement('img');
  newImage.src = myImage;
  element.classList.add('hello');
  element.appendChild(newImage);

  // Output management
  btn.innerHTML = 'Click me!';
  btn.addEventListener('click', printMe);

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
