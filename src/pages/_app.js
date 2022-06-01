import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { Col, Row } from "react-bootstrap";
import PageContainer from "../components/PageContainer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
