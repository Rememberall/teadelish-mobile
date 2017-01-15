const users = [{
  username: 'beeccy',
  password: 'ananas',
  role: 'admin',
}, {
  username: 'theneva',
  password: 'hello',
  role: 'admin',
}];

module.exports.list = () => users;

module.exports.findByUsername = username => users.find(user => user.username === username);

module.exports.find = (username, password) => users
  .find(user => user.username === username && user.password === password);
