import React, { Component } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

class App extends Component {
  state = {
    contacts: contactsJSON.slice(0, 5),
  };

  listContacts = this.state.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>
          <img width="100" src={contact.pictureUrl} alt="profile" />
        </td>
        <td>
          <button onClick={() => this.handleRemove(contact.id)}>🚮</button>
        </td>
      </tr>
    );
  });

  handleAddRandom = () => {
    const indexRandom = Math.floor(Math.random() * contactsJSON.length + 1);
    this.setState({
      contacts: [contactsJSON[indexRandom], ...this.state.contacts],
    });
  };

  handleSortByName = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) =>
        a.name < b.name ? -1 : 1
      ),
    });
  };

  handleSortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) =>
        a.popularity < b.popularity ? -1 : 1
      ),
    });
  };

  handleDelete = (idToDelete) => {
    this.setState({
      contacts: [...this.state.contacts].splice(
        this.state.contacts.id.indexOf(idToDelete),
        1
      ),
    });
  };

  render() {
    return (
      <div>
        <div className="buttons">
          <button onClick={this.handleAddRandom}>Add random contact</button>
          <button onClick={this.handleSortByName}>Sort by name 🔺</button>
          <button onClick={this.handleSortByPopularity}>
            Sort by popularity 🔺
          </button>
        </div>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Popularity</th>
              <th>Picture</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.listContacts}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
