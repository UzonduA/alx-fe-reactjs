import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
         <UserContext.Provider value={userData}>
        <ProfilePage />
        </UserContext.Provider>
        <UserContext.Provider />
          <div>
            <h2>User Profiles</h2>
              <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
              <UserProfile name="Bob" age={30} bio="I am learning React at ALX." />
              <UserProfile name="Charlie" age={22} bio="I enjoy playing football." />

          </div>
        < a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     
    </>
  );
}

export default App
