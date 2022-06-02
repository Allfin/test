import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";
import Driver from "../components/Driver";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // if (users.length === 0) {
    console.warn("Isi dataShow : ", dataShow);
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((Response) => {
        if (Response.data) {
          setUsers(Response.data.results);
        } else {
          console.log("not found");
        }
      })
      .catch((error) => console.log(error));
    // }
  }, []);

  useEffect(() => {
    console.warn("Isi users : ", users);
  }, [users]);

  useEffect(() => {
    console.warn("Isi pageNumber : ", pageNumber);
    setDataShow(users.slice((pageNumber - 1) * 5, pageNumber * 5));
  }, [users, pageNumber]);

  const isDesktop = useMediaQuery("(min-width: 576px)");
  // Get current posts
  return (
    <div className={styles.container}>
      <main>
        <Card className="mt-4 p-4">
          <Row>
            <Col lg={7} md={12}>
              <h4 style={{ color: "#F24242" }}>DRIVER MANAGEMENT</h4>
              <p style={{ marginBottom: "0" }}>
                Data driver yang bekerja dengan anda
              </p>
            </Col>
            <Col
              lg={5}
              md={12}
              className={isDesktop ? "d-flex" : "d-flex flex-column"}
            >
              <InputGroup>
                <div
                  style={{
                    position: "absolute",
                    left: "4px",
                    top: "12px",
                    zIndex: "9999",
                    color: "#F24242",
                  }}
                >
                  <i className="fas fa-search" />
                </div>
                <FormControl
                  className="ps-4"
                  type="text"
                  placeholder="Search..."
                />
              </InputGroup>
              <Button
                style={{
                  borderRadius: "0",
                  backgroundColor: "#F24242",
                  width: "100%",
                }}
              >
                TAMBAH DRIVER +
              </Button>{" "}
            </Col>
          </Row>
        </Card>
        <Row>
          {dataShow.map((user) => (
            <Col
              style={{
                margin: "0 auto",
                margin: "10px 0",
              }}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              key={user.email}
            >
              <Driver user={user} />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center my-5">
          <Button
            variant="light"
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber <= 1}
            className="mx-3"
          >
            <i className="fa-solid fa-angle-left me-3"></i>Previous Page
          </Button>
          <Button
            variant="light"
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber >= Math.ceil(users.length / 5)}
            className="mx-3"
          >
            Next Page<i className="fa-solid fa-angle-right ms-3"></i>
          </Button>
        </div>
      </main>
    </div>
  );
}
