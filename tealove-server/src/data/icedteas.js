const icedteas = [{
  id: 1,
  brand: 'Tine',
  subbrand: 'Zero isTe',
  name: 'Sort Te Fersken',
  type: 'Black tea',
}, {
  id: 2,
  brand: 'Tine',
  subbrand: 'isTe',
  name: 'Grønn Te Lime',
  type: 'Green tea',
}, {
  id: 3,
  brand: 'Tine',
  subbrand: 'isTe',
  name: 'Hvit Te Guava',
}, {
  id: 4,
  brand: 'Tine',
  subbrand: 'Zero isTe',
  name: 'Granateple',
  description: 'Sparkling',
}, {
  id: 5,
  brand: 'Nestea',
  name: 'Lemon Iced Tea',
  description: 'Lemon flavor with other natural flavors',
}];

module.exports.list = () => icedteas;

module.exports.findById = id => icedteas.find(icedtea => icedtea.id === id);
