import coffeeImg from '../images/coffee.png';
import joystickImg from '../images/joystick.png';
import musicImg from '../images/music.png';
import sweetImg from '../images/sweet.png';
import balloonImg from '../images/balloon.png';
import travelImg from '../images/travel.png';
import diamondImg from '../images/diamond.png';

export function getData() {
    return [
        { title: 'Coffee', price: 3.99, Image: coffeeImg },
        { title: 'Joystick', price: 18.99, Image: joystickImg },
        { title: 'Music', price: 7.99, Image: musicImg },
        { title: 'Sweet', price: 2.99, Image: sweetImg },
        { title: 'Balloon', price: 9.99, Image: balloonImg },
        { title: 'Travel', price: 999.99, Image: travelImg },
        { title: 'Diamond', price: 599.99, Image: diamondImg }
    ]
}