import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SeekerLogin from "./pages/SeekerLogin";
import SeekerRegister from "./pages/SeekerRegister";
import DonorRegister from "./pages/DonorRegister";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import DonorLogin from "./pages/DonorLogin";
import LearnMore from "./pages/LearnMore";
import SeekerForm from "./pages/SeekerForm";
import PilgrimagePlatform from "./pages/PilgrimagePlatform";
import CommunityPage from "./pages/CommunityPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/AdminDashboard";
import DonorDashboard from "./pages/DonorDashboard";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage/>} />

        {/* Seeker */}
        <Route path="/seeker/login" element={<SeekerLogin />} />
        <Route path="/seeker/register" element={<SeekerRegister />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        {/* Donor */}
        <Route path="/donor/login" element={<DonorLogin />} />
        <Route path="/donor/register" element={<DonorRegister />} />
        <Route path="/donor/dashboard" element={<DonorDashboard />} />

        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/seeker-form" element={ <SeekerForm/>} />
        <Route path="/details" element={<PilgrimagePlatform/>} />
        <Route path="/community" element={<CommunityPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>

  );
}

export default App;
