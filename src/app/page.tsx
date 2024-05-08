import ItemCogumelo from "./components/ItemCogumelo";
import Pesquisa from "./components/Pesquisa";

async function getCogumelos() {
  const response = await fetch("http://localhost:3000/cogumelos", {
    cache: "no-store",
  });
  const dados = await response.json();
  return dados;
}

export interface cogumeloProps {
  id: number;
  nome: string;
  beneficios: string;
  preco: number;
  foto: string;
  qnt_disp: number;
  num: number;
  total: number;
}

export default async function Home() {
  const cogumelos = await getCogumelos();

  const listaCogumelos = cogumelos.map((cogumelo: cogumeloProps) => (
    <ItemCogumelo key={cogumelo.id} cogumelo={cogumelo} />
  ));

  return (
    <div className="max-w-7xl mx-auto">
      <Pesquisa />
      <h1 className="mt-5 mb-4 text-2xl font-bold leading-none tracking-tight text-orange-900 lg:text-3xl">
        Produtos:{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-yellow-400">
          Cogumelos Frescos
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {listaCogumelos}
      </div>
    </div>
  );
}
