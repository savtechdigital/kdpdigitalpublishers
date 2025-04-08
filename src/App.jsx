import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingProvider } from './context/LoadingContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Testmonials from './pages/Testmonials';
import Blogs from './pages/Blogs';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import BookPublishing from './components/servicespage/BookPublishing';
import BookMarketing from './components/servicespage/BookMarketing';
import EbookPublishing from './components/servicespage/EbookPublishing';
import Ghostwriting from './components/servicespage/Ghostwriting';

function App() {
  return (
    <LoadingProvider>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testmonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services/publishing" element={<BookPublishing />} />
            <Route path="/services/marketing" element={<BookMarketing />} />
            <Route path="/services/ebook-publishing" element={<EbookPublishing />} />
            <Route path="/services/ghost-writing" element={<Ghostwriting />} />
          </Routes>
        </MainLayout>
      </Router>
    </LoadingProvider>
  );
}

export default App;
