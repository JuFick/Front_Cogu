'use client'
import { useContext } from "react"
import { cogumeloProps } from "../page"
import { ClienteContext } from "../context/ClienteContext"
import Estrelas from "./Estrelas"
import { FaRegComments } from "react-icons/fa6"
import { RiChatNewFill } from "react-icons/ri"

import Link from "next/link"

function ItemCogumelo({ cogumelo }: { cogumelo: cogumeloProps }) {
  const { idClienteLogado } = useContext(ClienteContext)

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={cogumelo.foto} alt="Imagem do Cogumelo" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{cogumelo.nome}</h5>
        </a>
        <p className="mb-3 font-bold  text-green-700">
          Preço por 100g R$: {Number(cogumelo.preco).toLocaleString("pt-br", {minimumFractionDigits: 2})}
        </p>
        <p className="text-sm text-gray-500 dark:text-white mb-2">
          {cogumelo.beneficios}
        </p>

        {idClienteLogado &&
          <div>
            <Estrelas soma={cogumelo.total} num={cogumelo.num} />
            <div className="float-end">
              <Link href={"/avaliacoes/" + cogumelo.id}>
                <FaRegComments className="text-xl text-blue-600 me-2 inline" style={{ cursor: 'pointer' }} />
              </Link>
              <Link href={"/avaliar/" + cogumelo.id}>
                <RiChatNewFill className="text-xl text-red-600 inline" style={{ cursor: 'pointer' }} />
              </Link>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default ItemCogumelo