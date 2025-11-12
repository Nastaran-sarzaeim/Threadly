import Categories from "@/components/home/categories";
import GallerySection from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import InspirationSection from "@/components/home/inspiration-section";
import Products from "@/components/home/products";
import Slider from "@/components/home/slider";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Slider/>
      <Products />
      <InspirationSection />
      <GallerySection />
    </main>
  );
}
