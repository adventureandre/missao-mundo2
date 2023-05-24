import React from "react";
import Link from "next/link";

export default function Home() {

    return (
        
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
                        <h1 className="text-3xl text-center mb-6">Login DEVTEAM</h1>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="username">Usuário:</label>
                                <input className="w-full p-2 border border-gray-300 rounded" type="text" id="username" placeholder="Digite seu nome de usuário" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="password">Senha:</label>
                                <input className="w-full p-2 border border-gray-300 rounded" type="password" id="password" placeholder="Digite sua senha" required/>
                            </div>
                            <div className="flex justify-center">
                                <Link href="/todo"> <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded" type="submit">Entrar</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
    );
}
