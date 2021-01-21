import React from "react";
import PropTypes from "prop-types";
import { Row, Form, Button, InputGroup } from "react-bootstrap";
import "./AddItem.css";

export const AddItem = ({ name, surname, email, blog, onChange, onSubmit }) => (
  <Row className="justify-content-center">
    <Form inline onSubmit={onSubmit}>
      <Form.Control
        type="text"
        className="font1 mb-2 mr-sm-2"
        placeholder="Enter Your Name"
        value={name}
        name="name"
        onChange={onChange}
      />

      <InputGroup className="font1 mb-2 mr-sm-2">
        <Form.Control
          type="text"
          placeholder="Enter Your Surname"
          value={surname}
          name="surname"
          onChange={onChange}
        />
      </InputGroup>
      <InputGroup className="font1 mb-2 mr-sm-2">
        <Form.Control
          type="email"
          placeholder="Enter Your Email"
          value={email}
          name="email"
          onChange={onChange}
        />
      </InputGroup>
      <InputGroup className="font2 mb-2 mr-sm-2">
        <Form.Control
          as="textarea"
          row={3}
          placeholder="Enter Your Ideas"
          value={blog}
          name="blog"
          onChange={onChange}
        />
      </InputGroup>

      <Button type="submit" className="mx-auto btn btn-primary mb-2 pxy-4">
        Login
      </Button>
    </Form>
  </Row>
);

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  blog: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
