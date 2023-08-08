'use client'

import Image from 'next/image'

export default function Home() {

  const runFunc = async () => {
    try {
      const res = await fetch('/api/auto',{
        method: 'POST',
        body: JSON.stringify({
          interval: 30
        })
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }

  const stopFunc = async () => {
    try {
      const res = await fetch('/api/auto');

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <button 
        className = 'text-xl font-bold bg-black rounded-md px-3 py-2 text-white'
        onClick = {() => {runFunc()}}
      >
        Start
      </button>
      <button 
        className = 'text-xl font-bold bg-black rounded-md px-3 py-2 text-white'
        onClick = {() => {stopFunc()}}
      >
        Stop
      </button>
    </main>
  )
}
