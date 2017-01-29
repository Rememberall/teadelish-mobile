const teas = [{
  id: 1,
  brand: 'Lipton',
  name: 'Earl Grey',
}, {
  id: 2,
  brand: 'Lipton',
  name: 'Blueberry Muffin',
}, {
  id: 3,
  brand: 'Black Cat',
  name: '21:00',
}];

module.exports.list = () => teas;

module.exports.findById = id => teas.find(tea => tea.id === id);
