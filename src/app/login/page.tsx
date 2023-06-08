import React from 'react'
import Link from 'next/link'
import BtSingInGoogle from '@/components/BtSingInGoogle'
import BtSingInGitHub from '@/components/BtSingInGitHub'

export default function Login() {
  return (
    <div className="min-h-[90vh] flex items-center">
      <div className="max-w-md w-full mx-auto p-6 bg-[#23262c] rounded-[20px] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.60)]">
        <h1 className="text-3xl text-center mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">Usuário:</label>
            <input className="w-full p-2 border border-gray-300 rounded text-black" type="text" id="username" placeholder="Digite seu nome de usuário" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Senha:</label>
            <input className="w-full p-2 border border-gray-300 rounded text-black" type="password" id="password" placeholder="Digite sua senha" required />
          </div>
          <div className="flex justify-center">
            <Link href="/todo">
              <button className="bg-[#000] hover:bg-[#05a374] focus:ring-4 focus:outline-none focus:ring-[#05a374] font-medium rounded-lg text-sm px-20 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#05a374] mr-2 mb-2 mt-2" type="submit">Entrar
              </button></Link>
          </div>
          <fieldset className='border-t border-slate-50 mt-[10px]'>
            <legend className='nx-auto px-4 text-center'>ou</legend>
            <div className='flex justify-center mt-[20px]'>
              <BtSingInGoogle />
              <BtSingInGitHub />
            </div>

          </fieldset>
        </form>
      </div>
    </div>

  )
}
