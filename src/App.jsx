import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testmonials from "./pages/Testmonials";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import BookPublishing from "./components/servicespage/BookPublishing";
import BookMarketing from "./components/servicespage/BookMarketing";
import EbookPublishing from "./components/servicespage/EbookPublishing";
import Ghostwriting from "./components/servicespage/Ghostwriting";
import NotFound from "./pages/NotFound";
import Proofreading from "./components/servicespage/Proofreading";
import Formating from "./components/servicespage/Formating";
import BookCoverDesign from "./components/servicespage/BookCoverDesign";
import AudioBook from "./components/servicespage/AudioBook";
import Illustrations from "./components/servicespage/Illustrations";
import AuthorWebsite from "./components/servicespage/AuthorWebsite";
import VideoTrailer from "./components/servicespage/VideoTrailer";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import TermsAndCondition from "./components/terms&condition/TermsAndCondition";
import FormModal from "./components/form/FormModL.JSX";
import { LiveChatProvider } from "./components/Chat/LiveChat";

function App() {
  return (
    <LoadingProvider>
      <LiveChatProvider>
        <Router>
          <FormModal />
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
              <Route
                path="/services/ebook-publishing"
                element={<EbookPublishing />}
              />
              <Route
                path="/services/ghost-writing"
                element={<Ghostwriting />}
              />
              <Route path="/services/editing" element={<Proofreading />} />
              <Route path="/services/formatting" element={<Formating />} />
              <Route
                path="/services/cover-design"
                element={<BookCoverDesign />}
              />
              <Route path="/services/audio-book" element={<AudioBook />} />
              <Route
                path="/services/illustrations"
                element={<Illustrations />}
              />
              <Route
                path="/services/author-website"
                element={<AuthorWebsite />}
              />
              <Route
                path="/services/video-trailer"
                element={<VideoTrailer />}
              />
              <Route
                path="/terms-and-condition"
                element={<TermsAndCondition />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </Router>
      </LiveChatProvider>
    </LoadingProvider>
  );
}

export default App;
