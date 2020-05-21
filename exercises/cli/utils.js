const fs = require("fs");
const path = require("path");

// this path needs to be relative to work with fs
const contactsLocation = path.join("contacts.json");

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  var contacts = fs.readFileSync(contactsLocation, "utf8");

  return JSON.parse(contacts);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  var parsedContacts = JSON.stringify(contacts);

  fs.writeFileSync(contactsLocation, parsedContacts);
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts,
};
