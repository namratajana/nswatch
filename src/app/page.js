import Navbar from "@/app/_components/Navbar";
import HeroSection from "@/app/_components/HeroSection";
import About from "@/app/_components/About";
import ProductsSection from "@/app/_components/ProductsSection";
import TestimonialPage from "@/app/_components/TestimonialPage";
import NewsletterSubscription from "@/app/_components/NewsletterSubscription";
import Footer from "@/app/_components/Footer";


export default function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <About/>
            <ProductsSection/>
            <TestimonialPage/>
            <NewsletterSubscription/>
            <Footer/>
        </>
    );
}
