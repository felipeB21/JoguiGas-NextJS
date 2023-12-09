"use client"

import Link from "next/link";
import {signIn, useSession} from 'next-auth/react'
import SubHeader from "./sub-header";
import Image from "next/image";


export default function Header() {

    const {data: session} = useSession()

  return (
    <>
        <header className="bg-zinc-100 backdrop-blur-xl fixed w-full top-0 z-50">
        <div className="w-[1200px] mx-auto flex items-center justify-between h-14 px-4 py-2">
        <div className="flex flex-grow basis-0">
            <Link href="/">
                <p className="uppercase text-xl font-medium text-zinc-800">Sanitários<span className="text-sky-600">JoguiGas</span></p>
            </Link>
        </div>
        <div>
            <form action="">
                <input className="relative px-5 py-1 rounded border-2 border-gray-300" type="text" name="search" id="search"  placeholder="Buscar..."/>
                <Image className="absolute top-[16.5px] ml-[230px]" src="/icons/search.svg" alt="search-icon" width={20} height={20}/>
            </form>
        </div>
        <div className="flex flex-grow basis-0 flex-row-reverse">
            <nav>
            {session?.user ? (
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <p>Bienvenido, <strong>{session.user.name}</strong></p>
                        <Link href="/profile">
                            <img className="rounded-full w-9" src={session.user.image} alt="Profile img" />
                        </Link>
                    </div>
                    <Link href="/profile">
                        <Image src='/icons/shopping-cart.svg' alt="user-profile" width={24} height={24}/>
                    </Link>
                </div>
            ) : (
                <div>
                    <button className="flex items-center gap-4" onClick={() => signIn()}>
                        <Image src='/icons/user.svg' alt="user-profile" width={24} height={24}/>
                        <Image src='/icons/shopping-cart.svg' alt="user-profile" width={24} height={24}/>
                    </button>
                </div>
            )}
            </nav>
        </div>
        </div>
    </header>
    <SubHeader />
    </>
    
  )
}
