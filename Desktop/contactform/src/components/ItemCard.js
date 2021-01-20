import React from "react";
import PropTypes from "prop-types";
import { Row, Form, Button, Card, ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export const ItemCard = ({
  toggleEditing,
  item,
  onChange,
  index,
  onDelete
}) => (
  <Accordion className="pr-5 pb-5 mx-auto">
    <Card>
      <Accordion.Toggle
        style={{ width: 250 }}
        className="bg-dark"
        as={Button}
        variant="text"
        eventKey="0"
      >
        <ListGroup>
          <ListGroup.Item
            className="bg-dark text-white text-center"
            style={{ border: "none" }}
          >
            {item.name}
          </ListGroup.Item>
        </ListGroup>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="0" style={{ width: 250 }}>
        <Card.Body className="bg-secondary text-white">
          <ListGroup>
            {item.isEditing ? (
              <div className="mb-4">
                <ListGroup.Item>
                  <Form.Control
                    type="text"
                    name="name"
                    className="mb-2 mr-sm-2"
                    placeholder="Name"
                    value={item.name}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <Form.Control
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={item.surname}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>

                <ListGroup.Item className="text-center">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={item.email}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="blog"
                    placeholder="Blog"
                    value={item.blog}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>
              </div>
            ) : (
              <div>
                <Card.Title className="text-center">{item.name}</Card.Title>

                <Row className="justify-content-center mb-2">
                  <Card.Text
                    className="px-4 text-center"
                    style={{ width: 250 }}
                  >
                    <span>{item.surname}</span>
                  </Card.Text>
                </Row>
                <Row className="justify-content-center mb-4">
                  <Card.Text
                    className="px-4 text-center"
                    style={{ width: 250 }}
                  >
                    <span>{item.email}</span>
                  </Card.Text>
                </Row>
                <Row className="justify-content-center mb-4">
                  <Card.Text
                    className="px-4 text-center"
                    style={{ width: 250 }}
                  >
                    <span>{item.blog}</span>
                  </Card.Text>
                </Row>
              </div>
            )}
          </ListGroup>
          <ListGroup>
            <Row className="justify-content-center">
              <div>
                <Button
                  type="button"
                  className="btn btn-success mr-2"
                  onClick={toggleEditing}
                >
                  {item.isEditing ? "Save" : "Edit"}
                </Button>
                <Button
                  type="button"
                  className="btn btn-danger"
                  onClick={onDelete}
                >
                  Delete
                </Button>
              </div>
            </Row>
          </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

/* <Card className="mb-3">
      <Card.Body>
        {item.isEditing ? (
          <div className="mb-4">
            <Form.Control
              type="text"
              name="name"
              className="mb-2 mr-sm-2"
              placeholder="Item"
              value={item.name}
              onChange={event => onChange(event, index)}
              required
            />
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              value={item.price}
              onChange={event => onChange(event, index)}
              required
            />
          </div>
        ) : (
          <div>
            <Card.Title className="text-center">{item.name}</Card.Title>

            <Row className="justify-content-center mb-4">
              <Card.Text>
                <span>{item.price}</span>
              </Card.Text>
            </Row>
          </div>
        )}

        <Row className="justify-content-center">
          <div>
            <Button
              type="button"
              className="btn btn-primary mr-2"
              onClick={toggleEditing}
            >
              {item.isEditing ? "Save" : "Edit"}
            </Button>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={onDelete}
            >
              Delete
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card> */
