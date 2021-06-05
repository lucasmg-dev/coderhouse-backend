import knex from "knex";

const client = knex({
  client: "mysql",
  connection: {
    host: "0.0.0.0",
    user: "root",
    password: "root",
    database: "test",
  },
});

export class UsersMariadbRepository {
  async create({ firstName, lastName }) {
    await client("users").insert({
      first_name: firstName,
      last_name: lastName,
    });
  }

  async read() {
    const users = await client.select().from("users");
    return users.map((user) => {
      return {
        first_name: user.first_name,
        last_name: user.last_name,
      };
    });
  }
}
