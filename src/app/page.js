import Categories from "@/components/home/categories";
import FooterSection from "@/components/home/footer";
import GallerySection from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import InspirationSection from "@/components/home/inspiration-section";
import Navbar from "@/components/home/navbar";
import Products from "@/components/home/products";
import Slider from "@/components/home/slider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <Slider/>
      <Products />
      <InspirationSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}
