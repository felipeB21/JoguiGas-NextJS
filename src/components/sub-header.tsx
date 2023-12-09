'use client'

import Image from "next/image"
import Link from "next/link"

const NAV_LINKS = [
    {name: 'Categorías', path: 'categorys'},
    {name: 'Sanitários', path: 'sanitorys'},
    {name: 'Ofertas', path: 'oferts'}
]

export default function SubHeader() {
    return (
        <header className="mt-14 bg-zinc-100 border-t border-gray-200">
            <div className="w-[1200px] mx-auto flex justify-between items-center px-4 py-4">
                <nav>
                    <ul className="flex gap-6 items-center">
                        {NAV_LINKS.map(link => (
                            <li key={link.name}>
                                <Link href={link.path}>
                                    <p className="text-zinc-600 hover:text-black font-medium duration-150">{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="#">
                        <div className="flex items-center gap-1">
                            <p>Llámanos</p>
                            <Image src="/icons/phone.svg" alt="celular" width={20} height={20}/>
                        </div>
                    </Link>
                    <Link href="https://www.google.com/maps?rlz=1C1CHZN_enAR1064AR1064&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg80gEIMTg5N2owajSoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&geocode=KeEppsWCuryVMfTgPxQiZF3b&daddr=Av.+Avelino+Rol%C3%B3n+780,+B1609+Boulogne,+Provincia+de+Buenos+Aires" target="_blank">
                        <div className="flex items-center">
                            <p>Encontranos</p>
                            <Image src="/icons/location.png" alt="location" width={24} height={24} />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}