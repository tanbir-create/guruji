import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import Topic from "./Pages/Topic";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home card={5} />} />
          <Route path="/blog" element={<BlogPage card={12} />} />
          <Route path="/topic/:id" element={<Topic card={4} />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
