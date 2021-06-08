import { normalize, schema } from "normalizr";
import utils from "util";

const originalData = {
  id: "123",
  author: {
    id: "1",
    name: "Paul",
  },
  title: "My awesome blog post",
  comments: [
    {
      id: "324",
      commenter: {
        id: "2",
        name: "Nicole",
      },
    },
  ],
};

console.log("/* -------------- ORIGINAL ------------- */");
console.log(utils.inspect(originalData, false, 4, true));
console.log("length", JSON.stringify(originalData).length);

// Define a users schema
const user = new schema.Entity("users");

// Define your comments schema
const comment = new schema.Entity("comments", {
  commenter: user,
});

// Define your article
const article = new schema.Entity("articles", {
  author: user,
  comments: [comment],
});

const normalizedData = normalize(originalData, article);
console.log("/* -------------- NORMALIZED ------------- */");
console.log(utils.inspect(normalizedData, false, 4, true));
console.log("length", JSON.stringify(normalizedData).length);
