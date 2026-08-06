import Ficha from "@/app/components/Ficha/Ficha";

interface PageProps {
  // En Next.js 15+ params llega como una Promise y hay que esperarlo con await.
  // Si estás en Next 13/14, cambia esto por: params: { id: string }
  // y quita el await de la línea de abajo.
  params: Promise<{ id: string }>;
}

export default async function ProductoPage({ params }: PageProps) {
  const { id } = await params;
  return <Ficha id={id} />;
}
