import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Welding sparks background pattern */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 1%),
            radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 1%),
            radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.4) 0%, transparent 1%),
            radial-gradient(circle at 30% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 0.5%),
            radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 1%),
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.7) 0%, transparent 0.8%),
            radial-gradient(circle at 70% 90%, rgba(255, 255, 255, 0.4) 0%, transparent 1%),
            radial-gradient(circle at 60% 15%, rgba(255, 255, 255, 0.5) 0%, transparent 0.7%)
          `,
          backgroundSize:
            "400px 400px, 350px 350px, 300px 300px, 450px 450px, 320px 320px, 380px 380px, 360px 360px, 340px 340px",
          animation: "sparkle 4s ease-in-out infinite alternate",
        }}
      />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <Advantages />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
