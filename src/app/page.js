import HeroSection from "@/app/_components/HeroSection";
import About from "@/app/_components/About";
import ProductsSection from "@/app/_components/ProductsSection";
import TestimonialPage from "@/app/_components/TestimonialPage";
import NewsletterSubscription from "@/app/_components/NewsletterSubscription";
import Footer from "@/app/_components/Footer";
import CustomSection from "@/app/_components/CustomSection";
import Featured from "@/app/_components/Featured";


export default function Home() {
    return (
        <>
            <CustomSection id="home">
                <HeroSection/>
            </CustomSection>
            <CustomSection id="featured">
                <Featured/>
            </CustomSection>
            <CustomSection id="products">
                <ProductsSection/>
            </CustomSection>
            <CustomSection id="about">
                <About/>
            </CustomSection>
            <CustomSection>
                <TestimonialPage/>
            </CustomSection>
            <CustomSection>
                <NewsletterSubscription/>
            </CustomSection>
            <CustomSection>
                <Footer/>
            </CustomSection>
        </>
    );
}
