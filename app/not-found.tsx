import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-amber-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Página não encontrada</h2>
        <p className="text-gray-300 mb-8">A página que você está procurando não existe ou foi movida.</p>
        <Link href="/">
          <Button className="bg-amber-600 text-white hover:bg-amber-700 font-black px-6 py-3">Voltar ao Início</Button>
        </Link>
      </div>
    </div>
  )
}
