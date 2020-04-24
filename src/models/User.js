import JwtDecode from 'jwt-decode';

export default class User {
  static from(token) {
    try {
      const obj = JwtDecode(token);
      return new User(obj);
    } catch (_) {
      return null;
    }
  }

  constructor({
    id, firstName, lastName, username, email, token,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.token = token;
  }
}
