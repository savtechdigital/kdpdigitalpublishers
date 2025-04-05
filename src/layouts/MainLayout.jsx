import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full relative">
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout; 