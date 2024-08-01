import axios from "axios";
import { Contact } from "../type";
const apiUrl = "https://api.randomuser.me";
const apiSpeed = "codewithahsan";
const result = "10";
export const GetContact = async (): Promise<Contact[]> => {
  const url = await axios.get(`${apiUrl}?seed=${apiSpeed}&results=${result}`);
  try {
    console.log(url.data.results);
    return url.data.results as Contact[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getContactbyId = async (uuid: string) => {
  const contacts = await GetContact();
  return contacts.find((contactItem) => {
    return contactItem.login.uuid === uuid;
  });
};
