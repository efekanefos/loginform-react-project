import React, { Component } from "react";
import { ItemCard } from "./components/ItemCard";
import { AddItem } from "./components/AddItem";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    blog: "",
    items: []
  };

  /**
   * Handle input changes in the AddItem component.
   * @param event
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = event => {
    event.preventDefault();
    const { name, surname, email, blog } = this.state; /* price */
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

  /**
   * Toggle the isEditing property of an item when the Edit button
   * within ItemCard is clicked.
   * @param index
   */
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

  /**
   * Update the Name and/or Price of an item.
   * @param event
   * @param index
   */
  handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
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

  /**
   * Delete an item from state
   * @param index Index of the item to be deleted.
   */
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
        <Container className="pt-4 bg-secondary">
          <h1 className="display-4 my-4 text-center"> Login Form </h1>{" "}
          <AddItem
            name={name}
            surname={surname}
            email={email}
            blog={blog}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
          />{" "}
        </Container>{" "}
        <Container>
          <div>
            <h1 className="display-4 my-0 text-center"> User Profiles </h1>

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
            </Row>

            <hr />
          </div>{" "}
        </Container>{" "}
      </div>
    );
  }
}

export default App;