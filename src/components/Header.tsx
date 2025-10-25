import { ShoppingCart, Menu } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

export const Header = () => {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={styles.header}
    >
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <motion.h1 
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
          >
            ChocoVerse
          </motion.h1>
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#shop" className={styles.navLink}>Shop</a>
            <a href="#about" className={styles.navLink}>About</a>
          </nav>
        </div>

        <div className={styles.actions}>
          <button className={styles.cartButton}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.cartBadge}
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          <button className={styles.menuButton}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
