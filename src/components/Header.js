import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="px-3">
        <Navbar.Brand href="/" style={{ color: "#F24242" }}>
          Shipper
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hello,{" "}
            <a href="#login" style={{ color: "#F24242" }}>
              Shipper User
            </a>{" "}
            <i
              className="fa-solid fa-user"
              style={{
                color: "#A0A0A0",
                fontSize: "1rem",
              }}
            ></i>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
