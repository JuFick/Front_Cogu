'use client'
import { useRouter } from 'next/navigation'
import { navigate } from './actions'

function Pesquisa() {

  const router = useRouter()

  return (
    <div className="flex mt-3 max-w-5xl mx-auto">
      <form className="flex-1" action={navigate}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Pesquisa</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" name="pesq" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Informe o nome do cogumelo desejado" required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Pesquisar</button>
        </div>
      </form>
      <button onClick={() => router.push('/')} type="button" className="mt-1.5 ms-3 focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900">
        Catálogo
      </button>
    </div>
  )
}

export default Pesquisa