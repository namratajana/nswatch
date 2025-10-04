import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import ProductsSection from "@/components/ProductsSection";
import TestimonialPage from "@/components/TestimonialPage";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Featured />
      <About />
      <ProductsSection />
      <TestimonialPage />
      <NewsletterSubscription />
      <Footer />
    </>
  );
}
