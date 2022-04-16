import instance from '../axios/Api';

export default class ContactsService {
  static async getContacts() {
    return instance.get('/contacts');
  }

  static async sendContact(
    id,
    name,
    lastName,
    company,
    phone,
    email,
    adress,
    operator,
    os,
    tasksUser
  ) {
    return instance.post('/create-contact', {
      id,
      name,
      lastName,
      company,
      phone,
      email,
      adress,
      operator,
      os,
      tasksUser,
    });
  }

  static async sendUpdateContact(
    id,
    name,
    lastName,
    company,
    phone,
    email,
    adress,
    operator,
    os,
    tasksUser
  ) {
    return instance.put('/update-contact', {
      id,
      name,
      lastName,
      company,
      phone,
      email,
      adress,
      operator,
      os,
      tasksUser,
    });
  }

  static async sendDeleteContact(contact_id) {
    return instance.delete(`/delete-contact/${contact_id}`)
  }
}
