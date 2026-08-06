import Link from "next/link";
import styles from "./productcardcss.module.css";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <button
        className={styles.favoriteButton}
        onClick={() => onToggleFavorite(id)}
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className={styles.image} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>

      <Link href={`/pages/tienda/producto/${id}`} className={styles.buyButton}>
        Comprar
      </Link>
    </div>
  );
}
