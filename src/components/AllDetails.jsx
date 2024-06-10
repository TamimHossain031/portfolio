import{Suspense} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyLoad } from "../utiles/lazyLoad";
const Layout = lazyLoad("../components/Layout.jsx");
const About = lazyLoad("../components/About.jsx");
const Certificate = lazyLoad("../components/Certificate.jsx");
const Contact = lazyLoad("../components/Contact.jsx");
const Resume = lazyLoad("../components/Resume.jsx");
const Works = lazyLoad("../components/Works.jsx");
export default function AllDetails() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="works" element={<Works />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
