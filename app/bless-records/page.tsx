"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlessRecordsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { scrollYProgress } = useScroll()

  const heroRef = useRef(null)
  const digitalRef = useRef(null)
  const advocatingRef = useRef(null)
  const labsRef = useRef(null)
  const pioneeringRef = useRef(null)
  const solutionsRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const digitalInView = useInView(digitalRef, { once: true, margin: "-100px" })
  const advocatingInView = useInView(advocatingRef, { once: true, margin: "-100px" })
  const labsInView = useInView(labsRef, { once: true, margin: "-100px" })
  const pioneeringInView = useInView(pioneeringRef, { once: true, margin: "-100px" })
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 300)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const tracks = [
    {
      id: 1,
      title: "VIDA ABUNDANTE (Ao Vivo)",
      artist: "Gabriel Rodrigues",
      duration: "6:40",
      image: "/placeholder.svg?height=300&width=300",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "ALEGRIA DO CÉU (AO VIVO)",
      artist: "Gabriel Rodrigues",
      duration: "6:01",
      image: "/placeholder.svg?height=300&width=300",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "EXTRAORDINÁRIO (AO VIVO)",
      artist: "Gabriel Rodrigues",
      duration: "3:37",
      image: "/placeholder.svg?height=300&width=300",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "ABENÇOADO (AO VIVO)",
      artist: "Gabriel Rodrigues",
      duration: "9:14",
      image: "/placeholder.svg?height=300&width=300",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "JANELAS DO CÉU (Oficial)",
      artist: "Gabriel Rodrigues",
      duration: "6:28",
      image: "/placeholder.svg?height=300&width=300",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "ALL IS WELL (Lyric Video)",
      artist: "Gabriel Rodrigues",
      duration: "7:11",
      image: "/placeholder.svg?height=300&width=300",
      youtubeId: "dQw4w9WgXcQ",
    },
  ]

  const studioImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sala de Gravação Principal",
      title: "Sala de Gravação Principal",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mesa de Mixagem",
      title: "Mesa de Mixagem Profissional",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Cabine Vocal",
      title: "Cabine Vocal Isolada",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Instrumentos",
      title: "Instrumentos Disponíveis",
    },
  ]

  const handlePlayTrack = (trackId: number) => {
    if (currentTrack === trackId && isPlaying) {
      setIsPlaying(false)
    } else {
      setCurrentTrack(trackId)
      setIsPlaying(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 bg-amber-400 z-50 flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/3 relative p-4 lg:p-8">
            <div className="flex justify-between items-start mb-8 lg:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-900 flex items-center justify-center">
                  <div className="w-4 h-1 lg:w-6 lg:h-1 bg-amber-400"></div>
                </div>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-900 flex items-center justify-center">
                  <div className="w-4 h-1 lg:w-6 lg:h-1 bg-amber-400"></div>
                </div>
                <div className="text-lg lg:text-xl font-black text-gray-900 ml-2 lg:ml-4">
                  BLESS
                  <br />
                  RECORDS
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 font-black text-xl lg:text-2xl tracking-wider hover:scale-110 transition-transform touch-manipulation"
              >
                CLOSE
              </button>
            </div>

            <div className="hidden lg:block absolute bottom-1/4 left-8 space-y-4">
              <div className="w-32 h-8 bg-gray-900 transform -rotate-12"></div>
              <div className="w-24 h-6 bg-gray-900 transform rotate-6"></div>
              <div className="w-40 h-4 bg-gray-900 transform -rotate-3"></div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center lg:items-end lg:pr-16 px-4 lg:px-0">
            <nav className="space-y-4 lg:space-y-8 text-center lg:text-right w-full">
              <motion.button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                SOBRE NÓS
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                SERVIÇOS
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                PORTFÓLIO
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                CONTATO
              </motion.button>
              <motion.div
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/">GABRIEL RODRIGUES</Link>
              </motion.div>
            </nav>

            <div className="mt-8 lg:absolute lg:bottom-8 lg:right-8 text-gray-900 text-sm text-center lg:text-right">
              <div className="font-bold mb-2">ABRAÇE ARTISTAS CAMPEÕES.</div>
              <div>Na Era da Revolução Musical</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-40">
        <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-400 flex items-center justify-center">
                <div className="w-4 h-1 lg:w-6 lg:h-1 bg-gray-900"></div>
              </div>
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-400 flex items-center justify-center">
                <div className="w-4 h-1 lg:w-6 lg:h-1 bg-gray-900"></div>
              </div>
              <div className="text-lg lg:text-xl font-black text-amber-400 ml-2 lg:ml-4">
                BLESS
                <br />
                RECORDS
              </div>
            </Link>

            <button
              className="text-amber-400 font-black text-xl lg:text-2xl tracking-wider hover:scale-110 transition-transform touch-manipulation"
              onClick={() => setIsMenuOpen(true)}
            >
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gray-900"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute top-1/2 right-1/4 lg:right-1/3 w-48 lg:w-96 h-1 lg:h-2 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent transform -rotate-12 blur-sm" />
          <div className="absolute top-1/2 right-1/4 lg:right-1/3 w-32 lg:w-64 h-32 lg:h-64 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-1 lg:w-2 h-1 lg:h-2 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/5 w-0.5 lg:w-1 h-0.5 lg:h-1 bg-amber-300 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/6 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-amber-500 rounded-full animate-pulse delay-500" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="space-y-4 lg:space-y-8 text-center lg:text-left"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-black text-amber-400 leading-none tracking-tight">
                BLESS
                <br />
                RECORDS
              </h1>

              <p className="text-base lg:text-lg text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                Na Era da Revolução Musical
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-6 text-xs text-gray-400">
                <div className="bg-amber-400 text-gray-900 px-2 lg:px-3 py-1 font-bold">2024</div>
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-400 flex items-center justify-center">
                    <div className="w-4 h-1 lg:w-6 lg:h-1 bg-gray-900"></div>
                  </div>
                  <span className="text-xs lg:text-sm">BLESS RECORDS INC.</span>
                </div>
                <div className="bg-amber-400 text-gray-900 px-2 lg:px-3 py-1 font-bold rounded-full text-xs">
                  QUALIDADE GARANTIDA
                </div>
                <div className="bg-amber-400 text-gray-900 px-2 lg:px-3 py-1 font-bold text-xs">
                  ESTÚDIO PROFISSIONAL
                </div>
              </div>

              <Button className="bg-amber-400 text-gray-900 hover:bg-amber-300 font-black px-6 lg:px-8 py-3 lg:py-4 text-sm tracking-wider transform hover:scale-105 transition-all duration-300 touch-manipulation">
                ENTRE EM CONTATO
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="hidden sm:flex relative justify-center items-center"
            >
              <div className="relative">
                <div className="w-32 sm:w-48 lg:w-64 h-48 sm:h-72 lg:h-96 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-full relative">
                  <div className="absolute -top-4 lg:-top-8 left-1/2 transform -translate-x-1/2 w-8 lg:w-16 h-8 lg:h-16 bg-gray-700 rounded-full" />
                  <div className="absolute right-2 lg:right-4 top-1/3 w-4 lg:w-8 h-16 lg:h-32 bg-amber-400/30 rounded-lg transform rotate-12" />
                  <div className="absolute right-3 lg:right-6 top-1/3 w-2 lg:w-4 h-12 lg:h-24 bg-amber-400/50 rounded transform rotate-12" />
                </div>
                <div className="absolute top-1/2 -right-16 lg:-right-32 w-32 lg:w-64 h-16 lg:h-32 bg-gradient-to-l from-amber-400/30 to-transparent rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-amber-400 text-gray-900 p-3 lg:p-6 max-w-xs lg:max-w-sm transform hover:scale-105 transition-transform duration-300"
        >
          <div className="text-xs lg:text-sm font-black mb-1 lg:mb-2 leading-tight">
            BLESS RECORDS EXPANDE ESTÚDIO PARA LENDAS
          </div>
          <div className="text-xs opacity-80">1.22.2025 Notícias</div>
        </motion.div>
      </section>

      {/* Rest of the Bless Records content - same as before */}
      {/* ... (continuing with all the other sections) ... */}
    </div>
  )
}
