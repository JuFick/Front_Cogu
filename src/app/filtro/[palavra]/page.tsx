import Pesquisa from "../../components/Pesquisa"
import ItemCogumelo from "../../components/ItemCogumelo"
import { cogumeloProps } from "../../page"

async function getCogumelos(palavra: string) {
  const response = await fetch("http://localhost:3000/cogumelos/pesquisa/" + palavra,
    { cache: 'no-store' })
  const dados = await response.json()
  return dados
}

async function Filtro({ params }: { params: { palavra: string } }) {

  const cogumelos = await getCogumelos(params.palavra)

  const listaCogumelos = cogumelos.map((cogumelo: cogumeloProps) => (
    <ItemCogumelo key={cogumelo.id} cogumelo={cogumelo} />
  ))

  return (
    <div className="max-w-7xl mx-auto">
      <Pesquisa />
      <h1 className="mt-5 mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 lg:text-3xl dark:text-white">
        Pesquisa de Cogumelos:
        <span className="ms-2 underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600">
          [{params.palavra}]</span>
      </h1>

      {cogumelos.length >= 1 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {listaCogumelos}
        </div>
        :
        <h2>Não há cogumelos com esse nome cadastrados</h2>
      }

    </div>
  )
}

export default Filtro