import { UsersMongoRepository } from "./UsersMongoRepository.js";
import { UsersMemoryRepository } from "./UsersMemoryRepository.js";
import { UsersMariadbRepository } from "./UsersMariadbRepository.js";

export class UsersRepository {
  repository;

  constructor(option) {
    switch (option) {
      case 1:
        this.repository = new UsersMongoRepository({ conex: "local" });
        break;
      case 2:
        this.repository = new UsersMemoryRepository();
        break;
      case 3:
        this.repository = new UsersMariadbRepository();
        break;
      case 4:
        this.repository = new UsersMongoRepository({ conex: "atlas" });
        break;
    }
  }

  async create({ firstName, lastName }) {
    return this.repository.create({ firstName, lastName });
  }

  async read() {
    return this.repository.read();
  }
}
