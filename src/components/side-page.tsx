'use client'

import Image from "next/image";
import ArrLeft from '../../public/icons/arrow-left.svg';
import ArrRight from '../../public/icons/arrow-right.svg';
import { useState } from "react";

const images = [
    {
        path: '/side-page/img1.jpg', 
        name: 'img-1'
    },
    {
        path: '/side-page/img2.jpg', 
        name: 'img-2'
    }
];

export default function SidePage() {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
    const next = () => setCurrent((current) => (current === images.length - 1 ? 0 : current + 1))

  return (
    <div className="overflow-hidden relative">
        <div className="flex transition-transform ease-out" style={{ transform: `translateX(-${current * 100}%)`, maxWidth: '100%', maxHeight: '100%' }}>
            {images.map(img => (
                <Image key={img.name} src={img.path} alt="slider-img" width={300} height={200} layout="responsive"/>
            ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-3">
            <button onClick={prev} className="bg-slate-50/80 hover:bg-white px-1 py-1 rounded-full">
                <Image src={ArrLeft} alt="flecha izquierda"/>
            </button>
            <button onClick={next} className=" bg-white/75 hover:bg-white/100 px-1 py-1 rounded-full">
                <Image src={ArrRight} alt="flecha derecha"/>
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-4">
                {images.map((_, i) => (
                    <div key={i} className={`
                        transition-all w-3 h-3 bg-white rounded-full
                        ${current === i ? 'p-1': 'opacity-50'}
                    `} />
                ))}
            </div>
        </div>
    </div>
  )
}
