import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoading } from '../context/LoadingContext';
import Loader from '../components/Loader';

const MainLayout = ({ children }) => {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Add loading state when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full relative">
      {isLoading && <Loader />}
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 