import contactsArray from "./contacts.json";
/* import './App.css'; */
import { useState } from "react";

function App() {
  const [contacts, setContact] = useState(contactsArray.slice(0, 5));

  const addContact = () => {
    const random = Math.floor(Math.random() * contactsArray.length);
    const newContact = contactsArray[random];
    setContact([newContact, ...contacts]);
  };

  const sortName = () => {
    const arrayContact = [...contacts];
    arrayContact.sort((a, b) => a.name.localeCompare(b.name));
    setContact(arrayContact);
  };

  const sortPopularity = () => {
    const arrayPopularity = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContact(arrayPopularity);
  };

  const deleteContact = (id) => {
    console.log('ID', id);
    const deletedContacts = [...contacts].filter((contact) => contact.id !== id);
    setContact(deletedContacts);
  };

  return (
    <div className="App mx-auto">
      <div className="mx-auto">
        <button type="button" className="btn btn-success " onClick={addContact}>
          Add new Contact
        </button>
      </div>
      <div className="mx-auto">
        <button type="button" className="btn btn-success " onClick={sortName}>
          Sort Name
        </button>
      </div>
      <div className="mx-auto">
        <button
          type="button"
          className="btn btn-success "
          onClick={sortPopularity}
        >
          Sort Popularity
        </button>
      </div>

      <table className="table w-50 mx-auto">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won an Oscar</th>
            <th scope="col">Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <th scope="row ">
                  <img className="w-25" alt='pic' src={contact.pictureUrl} />
                </th>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <p> 🏆 </p>} </td>
                <td>{contact.wonEmmy && <p> 🏆</p>}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success "
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
