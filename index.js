import { UsersRepository } from "./repositories/UsersRepository.js";

const userRepository = new UsersRepository(3);

userRepository
  .create({
    firstName: "lucas",
    lastName: "Gonzalez",
  })
  .then(async (response) => {
    await userRepository.create({
      firstName: "Jose",
      lastName: "Gutierrez",
    });
    console.log("👏👏👏👏");
    console.log(await userRepository.read());
    process.exit();
  });
