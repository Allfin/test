import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import vercel from "../../public/vercel.svg";

const Driver = ({ user }) => {
  return (
    <Card style={{ border: "none", height: "30rem" }}>
      <ListGroup className="list-group-flush">
        <ListGroupItem
          style={{ borderBottom: "1px solid #A0A0A0", marginBottom: "15px" }}
        >
          Driver ID: <strong style={{ color: "#F24242" }}>123123123</strong>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link>
          <i
            className="fa-solid fa-user"
            style={{
              color: "#A0A0A0",
              fontSize: "8rem",
            }}
          ></i>
        </Card.Link>
        <Card.Text style={{ marginBottom: "0" }}>Nama Driver</Card.Text>
        <Card.Text style={{ color: "black" }}>
          {user.name.first}, {user.name.last}
        </Card.Text>
        <Card.Text style={{ marginBottom: "0" }}>Telepone</Card.Text>
        <Card.Text style={{ color: "black" }}>{user.phone}</Card.Text>
        <Card.Text style={{ marginBottom: "0" }}>Email Address</Card.Text>
        <Card.Text style={{ color: "black" }}>{user.email}</Card.Text>
        <Card.Text style={{ marginBottom: "0" }}>Tanggal Lahir</Card.Text>
        <Card.Text style={{ color: "black" }}>DD-MM-YYYY</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Driver;
