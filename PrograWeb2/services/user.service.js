const faker = require('faker');
class UserService {
  constructor() {
    this.user = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.user.push({
        id: faker.datatype.uuid(),
        username: faker.name.firstName(),
        name: faker.commerce.productName(),
        password: parseInt(faker.commerce.price(), 10),
        telephone: faker.phone.telephone,
        email: faker.internet.email,
        paypal: faker.internet.email
      });
    }
  }
  find(limit) {
    return this.user.slice(0, limit);
  }
  findOne(username) {
    return this.user.find((item) => item.username === username);
  }
  //FAKER
  create(data) {
    const newUser = {
      id: faker.random.uuid(),
      ...data,
    };
    this.user.push(newUser);
    return newUser;
  }
  async update(id, changes) {
    const index = this.user.findIndex((item) => item.id === id);
    var currentUser = this.user[index];
    this.user[index] = {
      ...currentUser,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.user.findIndex((item) => item.id == id);
    this.user.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = UserService;