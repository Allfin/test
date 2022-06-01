import { Card, Nav } from "react-bootstrap";

const SideNav = () => {
  return (
    <Card style={{ minHeight: "85vh" }}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </Card>
  );
};

export default SideNav;
