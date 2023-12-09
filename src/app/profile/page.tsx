"use client"

import {useSession, signOut} from 'next-auth/react'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Page() {

    const {data: session} = useSession()

  return (
    <div className='mt-4'>
        {session?.user ? (
            <div className='flex flex-col gap-32'> 
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <img className='rounded-full w-20' src={session.user.image} alt={`User img ${session.user.name}`} />
                        <div className='py-1 mt-1'>
                        <h2 className='text-2xl font-medium mb-4'>{session.user.name}</h2>
                        <div>
                            <p>Compras: <span className='text-gray-500'>0</span></p>
                            <p>Historial de compras</p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <button className="bg-black text-white hover:bg-neutral-700 duration-100 px-4 py-1 rounded-lg" onClick={() => signOut()}>
                                <p>Cerrar sesion</p>
                            </button>
                    </div>
                </div>
            </div>
        ) : (
            <p>Not logged</p>
        )}
    </div>
  )
}
