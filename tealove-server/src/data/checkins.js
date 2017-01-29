const checkins = [{
  username: 'theneva',
  brand: 'Lipton',
  name: 'Blueberry Muffin',
  timestamp: Date.now() - 50000,
}, {
  username: 'theneva',
  brand: 'Lipton',
  name: 'Earl Grey',
  timestamp: Date.now() - 35000,
}, {
  username: 'theneva',
  brand: 'Black Cat',
  name: '21:00',
  timestamp: Date.now() - 30000,
}, {
  username: 'beeccy',
  brand: 'Lipton',
  name: 'Earl Grey',
  timestamp: Date.now() - 10000,
}, {
  username: 'beeccy',
  brand: 'Black Cat',
  name: '21:00',
  timestamp: Date.now() - 5200,
}];

module.exports.findByUsername = username => checkins
  .filter(checkin => checkin.username === username.toLowerCase());


module.exports.create = (checkin) => {
  if (!checkin || !checkin.username || !checkin.brand || !checkin.name) {
    throw new Error(`bad checkin: ${chekcin}`);
  }

  const checkinWithTimestamp = Object.assign({}, checkin, {
    timestamp: Date.now(),
  });

  checkins.push(checkinWithTimestamp);

  return checkinWithTimestamp;
};
