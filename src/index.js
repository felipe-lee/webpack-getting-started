import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    const dataElement = document.createElement('div');
    dataElement.innerText = JSON.stringify(Data);

    element.appendChild(dataElement);

    return element;
}

document.body.appendChild(component());
