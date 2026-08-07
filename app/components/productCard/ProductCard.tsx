import Link from "next/link";
import styles from "./productcardcss.module.css";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className={styles.image} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>

      <Link href={`/pages/tienda/producto/${id}`} className="buttonSecondary">
        Ver más
      </Link>
    </div>
  );
}