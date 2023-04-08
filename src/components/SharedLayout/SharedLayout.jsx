import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = ({ onToggle, isToggle }) => {
  return (
    <>
      <Header onToggle={onToggle} isToggle={isToggle} />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
export default SharedLayout;
