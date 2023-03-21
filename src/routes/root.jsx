import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>

  );
}