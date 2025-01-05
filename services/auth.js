/**
 * @description checks for valid username and password on success returns jwt token
 * @param {object} requestBody
 * @returns returns the token on successful login
 */
const login = async (requestBody) => {
  // logic for login
};

/**
 * @description checks for valid username and password on success registers the user in user json file
 * @param {*} param - contains username password
 * @returns registered user
 */
const register = async ({ userId, username, password }) => {
  // logic to registerif (!password || !username) {
};

module.exports = { login, register };
