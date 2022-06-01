import Header from "./Header";
import SideNav from "./SideNav";

const PageContainer = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", border: "20px solid black" }}>
      <Header />
      <div className="d-flex">
        <div style={{ width: "15%", alignItems: "stretch" }}>
          <SideNav />
        </div>
        <div style={{ width: "85%" }}>{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
