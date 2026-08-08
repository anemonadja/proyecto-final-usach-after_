import Hero from "./components/Hero/Hero";
import Bienvenida from "./components/Bienvenida/Bienvenida";
import Galeria from "./components/Galeria/Galeria";
import Detalles from "./components/Detalles/Detalles";
import Cta from "./components/Cta/Cta";

const leftItems = [
  {
    icon: <img src="/assets/logo_black.png" alt="icono temporal" />,
    title: "Contacto directo",
    text: "Escríbenos y conversemos acerca de tu idea",
  },

  {
    icon: <img src="/assets/logo_black.png" alt="icono temporal" />,
    title: "¿Para regalo?",
    text: "Podemos hacerlo llegar a por envío especial a las manos de quien tú elijas.",
  },
  {
    icon: <img src="/assets/logo_black.png" alt="icono temporal" />,
    title: "carcasa protectora",
    text: "Cada producto viene con su empaque protector personalizado",
  },
];

const rightItems = [
  {
    icon: <img src="/assets/logo_black.png" alt="icono temporal" />,
    title: "Variedad de colores",
    text: "Consulta por las alternativas de colores y terminaciones disponibles",
  },
  {
    icon: <img src="/assets/logo_black.png" alt="icono temporal" />,
    title: "Variedad de materiales",
    text: "Resina, bronce o plata 950, tú eliges",
  },
  {
    icon: <img src="/assets/logo_black.png" alt="icono temporal" />,
    title: "Envíos en Chile",
    text: "En territorio nacional, los envíos se hacen con empresa externa y se entrega n° de orden para seguimiento",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Bienvenida />
      <Galeria productId={1} />
      <Detalles
        heading="¿Quieres una combinación que no está en la web?"
        centerImage="/assets/g6.png"
        centerImageAlt="Imagen destacada"
        leftItems={leftItems}
        rightItems={rightItems}
      />
      <Cta />
    </>
  );
}