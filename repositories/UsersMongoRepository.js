import mongoose from "mongoose";

const ATLAS_URL = "< ingresar url mongo atlas >";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);

export class UsersMongoRepository {
  constructor({ conex }) {
    if (conex === "local") {
      mongoose.connect("mongodb://0.0.0.0:27017/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      mongoose.connect(ATLAS_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  }

  async create({ firstName, lastName }) {
    const newUser = new userModel({
      firstName,
      lastName,
    });
    try {
      await newUser.save();
      return true;
    } catch (err) {
      console.log(err);
      throw new Error("UsersMongoRepository::create");
    }
  }

  async read({ id }) {
    if (!id) {
      const users = await userModel.find();
      console.log(users);
    } else {
      const users = await userModel.findOne({ id });
      console.log(users);
    }
  }
}
