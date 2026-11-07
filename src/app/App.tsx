import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PhotoStrip } from "./components/PhotoStrip";

function HomePage() {
  return (
    <>
      <Hero />
      <PhotoStrip images={["Top.webp", "Top (2).webp"]} label="Featured project photos" />
      <Services />
      <PhotoStrip images={["MID.webp", "Mid (2).webp"]} label="Service project photos" />
      <About />
      <PhotoStrip images={["Bottom.webp", "BOttom (2).webp"]} label="More project photos" fit="cover" />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}