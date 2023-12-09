import React from 'react';

export default function Button({name}: {name: string}  ) {
  return (
    <button className="bg-black hover:bg-zinc-700 text-white duration-100 px-4 py-1 rounded-lg">
      {name}
    </button>
  )
}
