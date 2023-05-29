// import axios from 'axios';

// axios.defaults.baseURL = 'https://64730c62d784bccb4a3c3840.mockapi.io';

// export const getContacts = async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// };

// export const addContact = async data => {
//     const response = await axios.post('/contacts');
//     return response.data;
// };

const baseURL = 'https://64730c62d784bccb4a3c3840.mockapi.io';

export const getContacts = async () => {
  const data = await fetch(`${baseURL}/contacts`);
  return await data.json();
};

export const addContacts = async data => {
  const res = await fetch(`${baseURL}/contacts, {body: JSON.stringify(data)}`);
  return await res.json();
};

export const deleteContacts = async id => {
  const res = await fetch(`${baseURL}/contacts/${id}`);
  return await res.json();
};
