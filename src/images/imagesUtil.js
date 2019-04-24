let images = [require('./c0.jpg'),
require('./c1.jpg'),
require('./c2.jpg'),
require('./c3.jpg'),
require('./c4.jpg'),
require('./c5.jpg'),
require('./c6.jpg'),
require('./c7.jpg'),
require('./c8.jpg'),
require('./c9.jpg'),
require('./c10.jpg'),
require('./c11.jpg'),
require('./c12.jpg'),
require('./c13.jpg'),
require('./c14.jpg'),
require('./c15.jpg'),
require('./c16.jpg'),
require('./c17.jpg'),
require('./c18.jpg'),
require('./c19.jpg'),
require('./c20.jpg'),
require('./c20.jpg')]

// let images = [{source: require('./c0.jpg'),}];

export function getImages() {

    const selectedIndex = Math.floor((Math.random() * 20) + 0);

    return images[selectedIndex];
}
