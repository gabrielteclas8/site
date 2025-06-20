"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-amber-600 mb-4">Oops!</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Algo deu errado</h2>
        <p className="text-gray-300 mb-8">Ocorreu um erro inesperado. Tente novamente.</p>
        <Button onClick={reset} className="bg-amber-600 text-white hover:bg-amber-700 font-black px-6 py-3">
          Tentar Novamente
        </Button>
      </div>
    </div>
  )
}
