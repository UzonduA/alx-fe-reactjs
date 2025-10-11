import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Click the button to simulate login.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
