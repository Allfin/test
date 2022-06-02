import Header from "./Header";
import SideNav from "./SideNav";
import useMediaQuery from "../hooks/useMediaQuery";

const PageContainer = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div className="d-flex">
        {isDesktop ? (
          <>
            <div style={{ width: "20%", alignItems: "stretch" }}>
              <SideNav />
            </div>
            <div style={{ width: "80%", backgroundColor: "#F3EAEA" }}>
              {children}
            </div>
          </>
        ) : (
          <div style={{ backgroundColor: "#F3EAEA", minHeight: "100vh" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageContainer;
