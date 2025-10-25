import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ChocolateHero3D } from "@/components/ChocolateHero3D";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import styles from "./Index.module.css";

const featuredProducts = [
  {
    id: 1,
    name: "Dark Truffle Collection",
    price: 2999,
    image: product1,
    description: "Handcrafted dark chocolate truffles with exotic flavors",
  },
  {
    id: 2,
    name: "Milk Chocolate Elegance",
    price: 2499,
    image: product2,
    description: "Smooth milk chocolate infused with vanilla and caramel",
  },
  {
    id: 3,
    name: "White Chocolate Bliss",
    price: 2799,
    image: product3,
    description: "Premium white chocolate with raspberry and pistachio",
  },
];

const Index = () => {
  return (
    <div className={styles.page}>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience Luxury in Every Bite
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Artisan chocolates crafted with passion, presented with elegance
          </motion.p>
          
          <motion.button
            className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
            <ChevronRight size={20} />
          </motion.button>
        </div>
        
        <ChocolateHero3D />
      </section>

      {/* Featured Products */}
      <section id="shop" className={styles.section}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Collections
        </motion.h2>
        
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Discover our most beloved chocolate creations, handpicked for you
        </motion.p>
        
        <div className={styles.productsGrid}>
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <motion.div 
          className={styles.story}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.storyTitle}>Our Story</h2>
          <p className={styles.storyText}>
            At ChocoVerse, we believe chocolate is more than just a treat—it's an experience, 
            a journey through flavors, textures, and emotions. Our master chocolatiers pour 
            their hearts into every creation, blending traditional techniques with innovative 
            flavors to craft chocolates that tell a story. Each piece is a testament to our 
            commitment to quality, sustainability, and the art of chocolate making.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
