import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";
import Edit from "../pages/EditContact/Edit";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default routes;
