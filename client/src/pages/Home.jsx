import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
   <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <Footer />
  </div>
  );
}
