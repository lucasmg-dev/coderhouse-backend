let USERS_DB = [
  {
    age: 33,
    name: "Pepe",
    id: 1,
  },
  {
    age: 33,
    name: "Lucas",
    id: 2,
  },
  {
    age: 33,
    name: "Jose",
    id: 3,
  },
];

class UserController {
  contructor() {}

  add(data) {
    if (data.name === "" || typeof data.name === "undefined") return false;
    if (data.age === "" || typeof data.age === "undefined") return false;
    data.id = USERS_DB.length + 1;
    USERS_DB.push({
      id: data.id,
      name: data.name,
      age: data.age,
    });
    return true;
  }

  get() {
    if (USERS_DB.length < 1) return false;
    return USERS_DB;
  }

  getById(id) {
    return USERS_DB.filter((user) => user.id === parseInt(id))[0];
  }

  update(id, data) {
    USERS_DB = USERS_DB.map((user) => {
      if (user.id === parseInt(id)) {
        user.name = data.name;
        user.age = data.age;
      }
      return user;
    });
  }

  remove(id) {
    USERS_DB = USERS_DB.filter((user) => user.id !== parseInt(id));
  }
}

module.exports = new UserController();
