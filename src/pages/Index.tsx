import { Hero } from "@/components/Hero";
import { SocialGrid } from "@/components/SocialGrid";
import { SeoContent } from "@/components/SeoContent";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SocialGrid />
      <SeoContent />
      <Footer />
    </div>
  );
};

export default Index;
