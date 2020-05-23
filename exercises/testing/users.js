const users = new Array(20).fill(0).map((_, i) => {
  return {
    id: i,
    createdAt: Date.now() + i,
    email: `readycoder${i}@gmail.com`,
  };
});

// simulate async db call with promise
const findUser = (id) =>
  new Promise((resolve, reject) => {
    const userToFind = users.find((user) => {
      return user.id === id;
    });

    if (userToFind) {
      return resolve(userToFind);
    }
    reject(new Error(`No user with id "${id}"`));
  });

// simulate async db call with promise
const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    const i = users.findIndex((user) => user.id == id);
    console.log(
      "the index of thing to be deleted",
      i,
      "and type of id passed in",
      typeof id
    );
    if (i < 0) {
      return reject(new Error(`No user with id "${newId}"`));
    }

    users.splice(i, 1);
    console.log("mutated users array", users);
    resolve({ id });
  });

module.exports = {
  findUser,
  deleteUser,
};
