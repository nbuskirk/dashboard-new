/* Third Party Components */
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

/* Internal Components */
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Test from '../Pages/Test/Test';

import { AuthProvider } from '../AuthProvider/AuthProvider';
import { useStore } from '../../hooks/useStore';

const ProtectedRoute = ({ children }) => {
  const user = useStore((state) => state.user);
  if (!user) {
    return <Navigate to='/login' />;
  }
  return children;
};

function App() {
  return (
    <Router basename='/'>
      <AuthProvider>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path='/test' element={<Test />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
