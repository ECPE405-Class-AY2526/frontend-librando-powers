import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

const AuthFlow = () => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'login', 'register'
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={styles.loading}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Dashboard />;
  }

  switch (currentView) {
    case 'landing':
      return (
        <Landing 
          onGetStarted={() => setCurrentView('register')}
          onSignIn={() => setCurrentView('login')}
        />
      );
    case 'login':
      return (
        <Login 
          switchToRegister={() => setCurrentView('register')}
          backToLanding={() => setCurrentView('landing')}
        />
      );
    case 'register':
      return (
        <Register 
          switchToLogin={() => setCurrentView('login')}
          backToLanding={() => setCurrentView('landing')}
        />
      );
    default:
      return (
        <Landing 
          onGetStarted={() => setCurrentView('register')}
          onSignIn={() => setCurrentView('login')}
        />
      );
  }
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AuthFlow />
      </div>
    </AuthProvider>
  );
}

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  }
};

export default App;