const USERS = [];

export class UsersMemoryRepository {
  async create({ firstName, lastName }) {
    const newUser = {
      firstName,
      lastName,
    };
    USERS.push(newUser);
  }

  async read() {
    return USERS;
  }
}
