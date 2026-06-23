import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Facts from "./pages/Facts";
import Effects from "./pages/Effects";
import Alternatives from "./pages/Alternatives";
import TakeAction from "./pages/TakeAction";
import Join from "./pages/Join";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/alternatives" element={<Alternatives />} />
          <Route path="/take-action" element={<TakeAction />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
