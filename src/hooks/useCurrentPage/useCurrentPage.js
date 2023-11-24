import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return currentPage;
};
