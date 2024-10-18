import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/layouts/Navbar";

export default function RootLayout() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <div className="col mt-3 ms-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
