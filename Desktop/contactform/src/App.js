import React, { Component } from "react";
import { ItemCard } from "./components/ItemCard";
import { AddItem } from "./components/AddItem";
import { Container, Row } from "react-bootstrap";
import "./components/Main.css";

class App extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    blog: "",
    items: []
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  addItem = event => {
    event.preventDefault();
    const { name, surname, email, blog } = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? itemsInState[itemsArrayLength - 1].id + 1 : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign(
          {},
          {
            id,
            name,
            surname,
            email,
            blog
          }
        )
      ],
      name: "",
      surname: "",
      email: "",
      blog: ""
    });
  };

  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          };
        }
        return item;
      })
    });
  };

  handleItemUpdate = (event, index) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          };
        }
        return item;
      })
    });
  };

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  render() {
    const { name, surname, email, blog } = this.state;
    return (
      <div>
        <Container fluid className="pt-4 bg-secondary">
          <h1 className="display-4 my-3 text-center"> Login Form </h1>{" "}
          <AddItem
            name={name}
            surname={surname}
            email={email}
            blog={blog}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
          />{" "}
        </Container>{" "}
        <Container fluid className="px-0">
          <h1 className="bg-dark text-white display-5 text-center py-2">
            User Profiles
          </h1>
          <Row>
            {" "}
            {this.state.items.map((item, index) => (
              <ItemCard
                key={item.id}
                index={index}
                item={item}
                toggleEditing={() => this.toggleItemEditing(index)}
                onChange={this.handleItemUpdate}
                onDelete={() => this.onDelete(index)}
              />
            ))}{" "}
          </Row>{" "}
        </Container>{" "}
      </div>
    );
  }
}

export default App;

