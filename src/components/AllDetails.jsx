
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Resume from "./Resume";
import Works from "./Works";
import Certificate from "./Certificate";
import Contact from "./Contact";
export default function AllDetails(){
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path='about' element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="works" element={<Works />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
            
    );
}