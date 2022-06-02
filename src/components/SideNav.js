import { Card, Nav } from "react-bootstrap";

const SideNav = () => {
  return (
    <div style={{ minHeight: "91vh", marginTop: "15px" }}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link style={{ color: "black", marginLeft: "5px" }} href="/home">
          <i className="fa-solid fa-user me-2"></i>Beranda
        </Nav.Link>
        <Nav.Link
          style={{ color: "#F24242", borderLeft: "5px solid #F24242" }}
          eventKey="link-1"
        >
          <i className="fa-solid fa-house me-2"></i>
          Driver Management
        </Nav.Link>
        <Nav.Link
          style={{ color: "black", marginLeft: "5px" }}
          eventKey="link-2"
        >
          <i className="fa-solid fa-calendar-days me-2"></i>Pickup
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideNav;
