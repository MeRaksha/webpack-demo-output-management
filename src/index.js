import printMe from './print.js';

function component () {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Webpack';
  return element;
}

printMe();
document.body.appendChild(component());
