import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Department from "./components/departments/Department";
import DepartmentSingle from "./components/departments/DepartmentSingle";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Instructor from "./components/instructor/Instructor";
import Pages from "./components/pages/Pages";


function App() {
  return (
    <BrowserRouter>
    <main>
      <article>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Department />} />
          <Route path="/blog/:id" element={<DepartmentSingle />} />
          <Route path="/teams" element={<Instructor />} />
        </Routes>
      </article>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
