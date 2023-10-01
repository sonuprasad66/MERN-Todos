import { Route, Routes } from "react-router";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
