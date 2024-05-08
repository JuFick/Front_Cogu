'use client'
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Toaster, toast } from 'sonner'
import { ClienteContext } from "../context/ClienteContext"
import { useRouter } from "next/navigation"

interface Inputs {
  email: string
  senha: string
}

function Login() {

  const { register, handleSubmit } = useForm<Inputs>()
  const { mudaLogin } = useContext(ClienteContext)
  const router = useRouter()

  async function enviaDados(data: Inputs) {
//    console.log(data) mostra os dados do form
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({...data})
    })
    const dados = await response.json()
    if (Number(dados.id) > 0) {
//      alert("Ok! Senha Correta")
//      toast.success("Ok! Senha Correta")
      mudaLogin({id: Number(dados.id), nome: dados.nome})
      router.push("/")
    } else {
//      alert("Erro! Login/Senha Incorreta")
      toast.error("Erro! Login/Senha Incorreta")
    }
  }

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <form className="max-w-sm mx-auto" 
        onSubmit={handleSubmit(enviaDados)}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail do Cliente:</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="email" required 
            {...register("email")} />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha de Acesso:</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" required 
            {...register("senha")} />
        </div>
        <button type="submit" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Entrar</button>
      </form>
      <Toaster position="top-right" richColors />
    </div>
  )
}

export default Login