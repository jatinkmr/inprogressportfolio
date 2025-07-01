import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="font-sans text-secondary bg-neutral">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
