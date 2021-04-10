import fs from "fs";

const getUsers = async () => {
  try {
    const users = await fs.promises.readFile("./archivos/users.txt");
    return JSON.parse(users);
  } catch (err) {
    return [];
  }
};

const save = async (name) => {
  const users = await getUsers();

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  try {
    await fs.promises.writeFile(
      "./archivos/users.txt",
      JSON.stringify(users, null, 2)
    );
  } catch (err) {
    console.log("Ups! hubo un error", err);
  }
};

save("Lucas");
