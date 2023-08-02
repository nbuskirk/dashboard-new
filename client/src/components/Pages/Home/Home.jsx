import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  console.log('Home -> Redirecting to /dashboard');
  const navigate = useNavigate();
  useEffect(() => navigate('/dashboard', { replace: true }), []);
};

export default Home;
