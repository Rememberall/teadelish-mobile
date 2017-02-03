const iceteas = [{
 id: 1,
 brand: 'Tine',
 name: 'Zero isTe'
 type: 'Black tea'
 description: 'Sort Te Fersken'
}, {
 id: 2,
 brand: 'Tine',
 name: 'isTe'
 type: 'Green tea'
 description: 'Grønn Te Lime'
}, {
 id: 3,
 brand: 'Tine',
 name: 'isTe'
 description: 'Hvit Te Guava'
}, {
 id: 4,
 brand: 'Tine',
 name: 'Zero isTe'
 type: 'Sparkling'
 description: 'Granateple'
}];

module.exports.list = () => iceteas;

module.exports.findById = id => teas.find(iceteas => tea.id === id);
