import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import Header from './Components/Header';
import ImagesSection from './Components/ImagesSection';
import InfoDisplay from './Components/InfoDisplay';
import InfoDisplayReversed from './Components/InfoDisplayReversed';
import BMWPodcast from './Components/BMWPodcast';
import PictureGallery from './Components/PictureGallery';
import PageFooter from './Components/PageFooter';
import './App.css';

// Reusable AuthForm Component
const AuthForm = ({ title, buttonText, onSubmit, redirectPath }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    onSubmit();
    navigate(redirectPath); // Redirect after signup → login, after login → BMW
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '30px', marginTop: '100px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        <TextField 
          label="Email" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleSubmit} 
          style={{ marginTop: '20px' }}
        >
          {buttonText}
        </Button>
      </Paper>
    </Container>
  );
};

// Signup Component → Redirects to Login Page
const Signup = () => <AuthForm title="Signup" buttonText="Signup" onSubmit={() => {}} redirectPath="/login" />;

// Login Component → Redirects to BMW Website
const Login = () => <AuthForm title="Login" buttonText="Login" onSubmit={() => {}} redirectPath="/bmw" />;

// BMW Website Component
const BMWWebsite = () => (
  <div>
    <Header />
    <ImagesSection />
    <InfoDisplay />
    <InfoDisplayReversed />
    <BMWPodcast />
    <PictureGallery />
    <PageFooter />
  </div>
);

// App Component with Routes
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bmw" element={<BMWWebsite />} />
      </Routes>
    </Router>
  );
};

export default App;
