import Hero from "./components/Hero/Hero";
import Bienvenida from "./components/Bienvenida";
import Galeria from "./components/Galeria/Galeria";

export default function Home() {
  return (
    <>
      <Hero />
      <Bienvenida />
      <Galeria productId={1} />
    </>
  );
}
