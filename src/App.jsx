import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/aboutus" />
        <Route element={<Blog />} path="/blogs" />
      </Route>
    </Routes>
  );
}

export default App;
