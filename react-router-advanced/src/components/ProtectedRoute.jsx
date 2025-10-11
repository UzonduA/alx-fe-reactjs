import { Navigate } from 'react-router-dom';

function useAuth() {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
