import { Navigate } from 'react-router-dom';

const isAuthenticated = localStorage.getItem('auth') === 'true';

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
