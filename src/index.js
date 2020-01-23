import _ from 'lodash';
import './styles.css';
import myImage from './my_image.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const newImage = document.createElement('img');
  newImage.src = myImage;
  element.classList.add('hello');
  element.appendChild(newImage);

  return element;
}

document.body.appendChild(component());
