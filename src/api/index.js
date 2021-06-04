import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

/**
 * Fetch all the users
 * @returns {array}
 */
export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE_URL}/users`);
    return data;
  } catch (e) {
    console.error(e);
  }
}

/**
 * Fetch a specific user by user id
 * @param {number} userId 
 * @returns {object}
 */
export async function getUser(userId) {
  try {
    const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
}

/**
 * Fetch the list of posts by user id
 * @param {number} userId 
  * @returns {array}
 */
export async function postsByUser(userId) {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
}