"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Mic, Play, Pause, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function BlessRecordsWebsite() {
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
      const offsetTop = element.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    // Close menu with delay for smooth experience
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
          {/* Mobile: Full screen layout */}
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

            {/* Decorative elements - Hidden on mobile for cleaner look */}
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
            <div className="flex items-center space-x-2">
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
            </div>

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
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

          {/* Light beam effect - Responsive */}
          <div className="absolute top-1/2 right-1/4 lg:right-1/3 w-48 lg:w-96 h-1 lg:h-2 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent transform -rotate-12 blur-sm" />
          <div className="absolute top-1/2 right-1/4 lg:right-1/3 w-32 lg:w-64 h-32 lg:h-64 bg-amber-400/10 rounded-full blur-3xl" />

          {/* Floating particles */}
          <div className="absolute top-1/4 right-1/4 w-1 lg:w-2 h-1 lg:h-2 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/5 w-0.5 lg:w-1 h-0.5 lg:h-1 bg-amber-300 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/6 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-amber-500 rounded-full animate-pulse delay-500" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
            {/* Left Content */}
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

              {/* Decorative Elements - Responsive */}
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

            {/* Right Content - Silhouette - Hidden on small mobile */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="hidden sm:flex relative justify-center items-center"
            >
              {/* Main silhouette - Responsive sizing */}
              <div className="relative">
                <div className="w-32 sm:w-48 lg:w-64 h-48 sm:h-72 lg:h-96 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-full relative">
                  {/* Head */}
                  <div className="absolute -top-4 lg:-top-8 left-1/2 transform -translate-x-1/2 w-8 lg:w-16 h-8 lg:h-16 bg-gray-700 rounded-full" />

                  {/* Guitar/Instrument */}
                  <div className="absolute right-2 lg:right-4 top-1/3 w-4 lg:w-8 h-16 lg:h-32 bg-amber-400/30 rounded-lg transform rotate-12" />
                  <div className="absolute right-3 lg:right-6 top-1/3 w-2 lg:w-4 h-12 lg:h-24 bg-amber-400/50 rounded transform rotate-12" />
                </div>

                {/* Light beam hitting the figure */}
                <div className="absolute top-1/2 -right-16 lg:-right-32 w-32 lg:w-64 h-16 lg:h-32 bg-gradient-to-l from-amber-400/30 to-transparent rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* News Card - Responsive */}
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

      {/* Digital Gold Rush Section */}
      <section id="sobre" ref={digitalRef} className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-sm font-bold text-gray-600 mb-4">ABRAÇE ARTISTAS CAMPEÕES.</div>
            <div className="text-sm text-gray-600">Bless Records</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={digitalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="relative order-2 lg:order-1">
              <div className="w-64 lg:w-96 h-64 lg:h-96 mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full transform group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-4 lg:inset-8 bg-gray-900 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-20 lg:w-32 h-20 lg:h-32 bg-orange-600 rounded-full flex items-center justify-center">
                    <Mic className="w-10 lg:w-16 h-10 lg:h-16 text-white" />
                  </div>
                </div>
                <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-8 lg:w-16 h-8 lg:h-16 bg-amber-400 transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 w-6 lg:w-12 h-6 lg:h-12 bg-orange-500 transform rotate-12 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-none">
                REVOLUÇÃO
                <br />
                SONORA DIGITAL
              </h2>
              <div className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                <p className="mb-4">
                  O que estamos vendo na indústria musical é uma revolução digital sem precedentes. Nossa paixão é
                  transformar ideias em obras-primas sonoras, respeitando a essência artística de cada projeto.
                </p>
                <p>
                  Nosso estúdio combina tecnologia de ponta com expertise humana, criando um ambiente onde a
                  criatividade floresce. Cada gravação é tratada como uma obra única, merecendo toda nossa dedicação e
                  cuidado técnico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advocating Section */}
      <section
        id="servicos"
        ref={advocatingRef}
        className="py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={advocatingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent rounded-lg transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500" />
              <Image
                src="/hero-bg.png"
                alt="Artista no estúdio"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 lg:h-96 transform group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
                }}
              />
              <div className="absolute top-4 right-4 bg-amber-400 text-gray-900 p-2 text-xs font-bold transform group-hover:scale-110 transition-transform duration-300">
                MÚSICA
              </div>
            </div>

            <div className="text-white order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-none">
                DEFENDENDO
                <br />
                <span className="text-amber-400">EXCELÊNCIA MUSICAL</span>
              </h2>
              <div className="text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed opacity-90">
                <p className="mb-4">
                  O Bless Records defende a qualidade e autenticidade musical a cada projeto. Nossa missão é garantir
                  que cada artista tenha acesso à melhor tecnologia e expertise para expressar sua arte.
                </p>
                <p>
                  Através de parcerias com músicos profissionais, produtores experientes e técnicos especializados,
                  estabelecemos novos padrões de qualidade na produção musical gospel e contemporânea.
                </p>
              </div>
              <Button className="bg-amber-400 text-gray-900 hover:bg-amber-300 font-black px-6 py-3 text-sm tracking-wider touch-manipulation">
                → NOSSA MISSÃO
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio/Music Section */}
      <section id="portfolio" ref={labsRef} className="py-12 lg:py-20 bg-amber-400">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-sm font-bold text-gray-900 mb-4">PORTFÓLIO MUSICAL</div>
            <div className="text-sm text-gray-900">Bless Records</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={labsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-black text-gray-900 mb-8 lg:mb-12 leading-none">
              DOS LABS
              <br />
              ÀS LENDAS
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 50 }}
                animate={labsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 touch-manipulation"
                style={{
                  transform: "perspective(1000px)",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
                  }
                }}
              >
                <div className="relative">
                  <Image
                    src={track.image || "/placeholder.svg"}
                    alt={track.title}
                    width={300}
                    height={300}
                    className="w-full h-40 lg:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => handlePlayTrack(track.id)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-gray-900 p-3 lg:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 touch-manipulation"
                  >
                    {currentTrack === track.id && isPlaying ? (
                      <Pause className="w-4 lg:w-6 h-4 lg:h-6" />
                    ) : (
                      <Play className="w-4 lg:w-6 h-4 lg:h-6" />
                    )}
                  </button>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-amber-400 font-bold text-base lg:text-lg mb-2 line-clamp-2">{track.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{track.artist}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs">{track.duration}</span>
                    <Volume2 className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Gallery Section */}
      <section ref={pioneeringRef} className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-sm font-bold text-gray-600 mb-4">NOSSO ESTÚDIO</div>
            <div className="text-sm text-gray-600">Bless Records</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={pioneeringInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-none">
              PIONEIRISMO
              <br />
              EM <span className="text-orange-600">TECNOLOGIA</span>
              <br />
              MUSICAL
            </h2>
            <div className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-4xl mx-auto">
              Com equipamentos de última geração, nosso estúdio oferece a mais alta qualidade em gravação, mixagem e
              masterização. Cada sala foi projetada acusticamente para proporcionar o melhor ambiente sonoro possível.
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {studioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={pioneeringInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer touch-manipulation"
                style={{
                  transform: "perspective(1000px)",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(-10deg) rotateY(10deg) scale(1.05)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
                  }
                }}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-base lg:text-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        ref={solutionsRef}
        className="py-12 lg:py-20 bg-gradient-to-b from-purple-900 via-orange-900 to-purple-900"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="text-sm text-white/70 mb-4">O que fazemos</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-black text-white mb-6 lg:mb-8 leading-none">
              SERVIÇOS
            </h2>
            <div className="text-base lg:text-lg text-white/90 mb-6 lg:mb-8">
              COMO PODEMOS AJUDAR ARTISTAS NA REVOLUÇÃO MUSICAL
            </div>
            <Button className="bg-amber-400 text-gray-900 hover:bg-amber-300 font-black px-6 py-3 text-sm tracking-wider touch-manipulation">
              VER TUDO
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                number: "(01)",
                title: "GRAVAÇÃO PROFISSIONAL",
                subtitle: "Qualidade Excepcional",
                description:
                  "Utilizamos equipamentos de última geração e técnicas avançadas para capturar cada nuance da sua performance musical com a mais alta fidelidade.",
              },
              {
                number: "(02)",
                title: "MIXAGEM & MASTERIZAÇÃO",
                subtitle: "Acabamento Profissional",
                description:
                  "Nossa equipe especializada em mixagem e masterização garante que sua música tenha o som profissional necessário para competir no mercado atual.",
              },
              {
                number: "(03)",
                title: "PRODUÇÃO MUSICAL",
                subtitle: "Criação Completa",
                description:
                  "Oferecemos produção musical completa, desde arranjos até a finalização, trabalhando em parceria com artistas para criar obras únicas e impactantes.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-amber-400 p-6 lg:p-8 text-gray-900 group hover:scale-105 transition-all duration-300 touch-manipulation"
                style={{
                  transform: "perspective(1000px)",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(-5deg) rotateY(5deg) scale(1.05)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
                  }
                }}
              >
                <div className="text-xs font-bold mb-4">{service.number}</div>
                <h3 className="text-2xl lg:text-3xl font-black mb-4">{service.title}</h3>
                <div className="text-sm font-bold mb-4">{service.subtitle}</div>
                <p className="text-sm mb-6 lg:mb-8 leading-relaxed">{service.description}</p>
                <Button className="bg-gray-900 text-amber-400 hover:bg-gray-800 font-black px-4 py-2 text-xs tracking-wider touch-manipulation">
                  → SAIBA MAIS
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" ref={contactRef} className="py-12 lg:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 right-1/4 w-48 lg:w-96 h-48 lg:h-96 bg-amber-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="text-sm text-amber-400 mb-4">Dúvidas?</div>
              <h3 className="text-3xl lg:text-4xl font-black text-amber-400 mb-6 lg:mb-8 leading-tight">
                FALE CONOSCO
              </h3>
              <div className="space-y-4 text-white">
                <div>CONTATO@BLESSRECORDS.COM.BR</div>
                <div>LINKEDIN / CARREIRAS</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-amber-400 p-6 lg:p-8 group hover:scale-105 transition-all duration-300"
              style={{
                transform: "perspective(1000px)",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth >= 1024) {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(-5deg) rotateY(5deg) scale(1.05)"
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth >= 1024) {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
                }
              }}
            >
              <div className="text-gray-900">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-gray-900 flex items-center justify-center">
                    <div className="w-4 h-1 bg-amber-400"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-900 flex items-center justify-center">
                    <div className="w-4 h-1 bg-amber-400"></div>
                  </div>
                  <div className="text-sm font-black">BLESS RECORDS</div>
                </div>

                <div className="text-sm mb-4">Transforme Sua Música. Realize Seus Sonhos.</div>

                <h4 className="text-xl lg:text-2xl font-black mb-4">SUA MÚSICA IMPORTA!</h4>
                <div className="text-sm mb-6">Vamos Criar Algo Incrível Juntos</div>
                <div className="text-xs mb-6">Entre em contato e vamos discutir seu próximo projeto musical</div>

                <div className="space-y-4">
                  <Input
                    placeholder="PRIMEIRO NOME"
                    className="bg-gray-900 text-amber-400 border-gray-900 placeholder:text-amber-400/70 touch-manipulation"
                  />
                  <Input
                    placeholder="ÚLTIMO NOME"
                    className="bg-gray-900 text-amber-400 border-gray-900 placeholder:text-amber-400/70 touch-manipulation"
                  />
                  <Input
                    placeholder="ENDEREÇO DE EMAIL"
                    className="bg-gray-900 text-amber-400 border-gray-900 placeholder:text-amber-400/70 touch-manipulation"
                  />
                  <Button className="w-full bg-gray-900 text-amber-400 hover:bg-gray-800 font-black py-3 text-sm tracking-wider touch-manipulation">
                    → ENVIAR
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="text-sm text-amber-400 mb-4">Visitando?</div>
              <h3 className="text-3xl lg:text-4xl font-black text-amber-400 mb-6 lg:mb-8 leading-tight">
                NOS ENCONTRE
              </h3>
              <div className="text-white space-y-2">
                <div>1300 RUA DAS FLORES</div>
                <div>SÃO PAULO, SP 01234, BRASIL</div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 space-y-4 lg:space-y-0">
            <div>© 2024 Bless Records Inc</div>
            <div>Feito por SECO</div>
          </div>
        </div>
      </section>
    </div>
  )
}
