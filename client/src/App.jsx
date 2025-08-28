import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SeekerLogin from "./pages/seeker/SeekerLogin";
import SeekerRegister from "./pages/seeker/SeekerRegister";
import DonorRegister from "./pages/donor/DonorRegister";
import AdminRegister from "./pages/admin/AdminRegister";
import AdminLogin from "./pages/admin/AdminLogin";
import DonorLogin from "./pages/donor/DonorLogin";
import LearnMore from "./pages/LearnMore";
import SeekerForm from "./pages/seeker/SeekerForm";
import PilgrimagePlatform from "./pages/PilgrimagePlatform";
import CommunityPage from "./pages/community/CommunityPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DonorDashboard from "./pages/donor/DonorDashboard";

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
