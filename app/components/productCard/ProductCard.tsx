import Link from "next/link";
import styles from "./productcardcss.module.css";
import { formatCLP } from "@/app/utils/formatPrice";

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
      <p className={styles.price}>{formatCLP(price)}</p>

      <Link href={`/pages/tienda/producto/${id}`} className="buttonSecondary">
        Ver más
      </Link>
    </div>
  );
}
