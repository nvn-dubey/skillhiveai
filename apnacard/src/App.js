import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Ensure this import works after running 'npm install bootstrap-icons'
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Page Components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import PostTaskPage from './pages/PostTaskPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import RateCardPage from './pages/RateCardPage'; 

function App() {
  const teamProfile = [
    {
      name: "Avishkar meshram",
      role: "CEO",
      about: "I am Avishkar Meshram, the CEO of SkillHive, driving our vision to be the leading platform for connecting talent with projects.",
      linkedin: "https://www.linkedin.com/in/avishkarmeshram/",
      id: 1,
      image: "/images/team/avishkar.jpg",
      emailid: "avishkar.ceo@skillhive.com" // Added email
    },
    {
      name: "Sadhana Pandey",
      role: "Manager",
      about: "I am Sadhana pandey, the Manager at SkillHive, overseeing project execution and ensuring client satisfaction.",
      linkedin: "https://www.linkedin.com/in/sadhana-pandey-096937a1/",
      id: 2,
      image: "/images/team/sadhana.jpg"
    },
    {
      name: "Navneet Dubey",
      role: "Developer",
      about: "I am Navneet dubey, a Developer at SkillHive, specialized in creating robust and scalable web applications.",
      linkedin: "https://www.linkedin.com/in/navneetdubey/",
      id: 3,
      image: "/images/team/navneet.jpg"
    },
    {
      name: "Vivek Pandey",
      role: "Designer",
      about: "I am Vivek Kumar, a Designer at SkillHive, focusing on intuitive UI/UX design to enhance user experience.",
      linkedin: "https://www.linkedin.com/in/vivek-Pandey-48290531a/",
      emailid: "thevivek712@gmail.com",
      id: 4,
      image: "/images/team/vivek.jpg"
    },
    {
      name: "Atish Kumar",
      role: "Tester",
      about: "I am Atish Kumar, a Tester at SkillHive, dedicated to quality assurance and finding bugs before they reach production.",
      linkedin: "https://www.linkedin.com/in/atish-kumar-a13a592a2/",
      id: 5,
      image: "/images/team/atish.jpg"
    }
  ];

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Home and Team Section Routes */}
          <Route path="/" element={<HomePage teamProfile={teamProfile} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile/:memberId" element={<ProfilePage teamData={teamProfile} />} />

          {/* Service and Task Routes */}
          <Route path="/post-task" element={<PostTaskPage />} />
          <Route path="/services/:serviceName" element={<ServiceDetailPage />} />
          <Route path="/rate-card" element={<RateCardPage />} /> 

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;