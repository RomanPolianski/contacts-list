import instance from "../axios/Api";

export default class ContactsService {
  static async getContacts() {
    return instance.get('/contacts');
  }
}