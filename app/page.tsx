"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Music, Play, Pause, Instagram, Youtube, AirplayIcon as Spotify, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function GabrielRodriguesWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { scrollYProgress } = useScroll()

  const heroRef = useRef(null)
  const bioRef = useRef(null)
  const musicRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const bioInView = useInView(bioRef, { once: true, margin: "-100px" })
  const musicInView = useInView(musicRef, { once: true, margin: "-100px" })
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" })
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

  const albums = [
    {
      id: 1,
      title: "VIDA ABUNDANTE",
      subtitle: "Ao Vivo",
      year: "2024",
      image: "/placeholder.svg?height=300&width=300",
      tracks: ["Vida Abundante", "Milagres", "Grandes Maravilhas"],
    },
    {
      id: 2,
      title: "ALEGRIA DO CÉU",
      subtitle: "Ao Vivo",
      year: "2023",
      image: "/placeholder.svg?height=300&width=300",
      tracks: ["Alegria do Céu", "Novo Amanhecer", "Esperança"],
    },
    {
      id: 3,
      title: "EXTRAORDINÁRIO",
      subtitle: "Ao Vivo",
      year: "2023",
      image: "/placeholder.svg?height=300&width=300",
      tracks: ["Extraordinário", "Poder de Deus", "Vitória"],
    },
    {
      id: 4,
      title: "ABENÇOADO",
      subtitle: "Ao Vivo",
      year: "2022",
      image: "/placeholder.svg?height=300&width=300",
      tracks: ["Abençoado", "Gratidão", "Benção"],
    },
  ]

  const galleryImages = [
    {
      src: "/gabriel-photos/gabriel-profile.jpg",
      alt: "Gabriel Rodrigues - Perfil",
      title: "Momento Reflexivo",
    },
    {
      src: "/gabriel-photos/gabriel-studio.jpg",
      alt: "Gabriel no Estúdio",
      title: "No Estúdio",
    },
    {
      src: "/gabriel-photos/gabriel-golden.jpg",
      alt: "Gabriel com Iluminação Dourada",
      title: "Luz Dourada",
    },
    {
      src: "/gabriel-photos/gabriel-intimate.jpg",
      alt: "Gabriel Momento Íntimo",
      title: "Momento Íntimo",
    },
    {
      src: "/gabriel-photos/gabriel-smile.jpg",
      alt: "Gabriel Sorrindo",
      title: "Alegria",
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
          className="fixed inset-0 bg-amber-600 z-50 flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/3 relative p-4 lg:p-8">
            <div className="flex justify-between items-start mb-8 lg:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-900 flex items-center justify-center p-1">
                  <Image
                    src="/logo/familia-rodrigues.png"
                    alt="Família Rodrigues"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-lg lg:text-xl font-black text-gray-900 ml-2 lg:ml-4">
                  GABRIEL
                  <br />
                  RODRIGUES
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
                onClick={() => scrollToSection("biografia")}
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                BIOGRAFIA
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("musicas")}
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                MÚSICAS
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("galeria")}
                className="block w-full text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 hover:text-gray-700 transition-colors leading-none touch-manipulation py-2"
                whileHover={{ x: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                GALERIA
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
                <Link href="/bless-records">BLESS RECORDS</Link>
              </motion.div>
            </nav>

            <div className="mt-8 lg:absolute lg:bottom-8 lg:right-8 text-gray-900 text-sm text-center lg:text-right">
              <div className="font-bold mb-2">MÚSICO • PRODUTOR • COMPOSITOR</div>
              <div>Transformando vidas através da música</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-40">
        <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-600 flex items-center justify-center p-1">
                <Image
                  src="/logo/familia-rodrigues.png"
                  alt="Família Rodrigues"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain filter invert"
                />
              </div>
              <div className="text-lg lg:text-xl font-black text-amber-600 ml-2 lg:ml-4">
                GABRIEL
                <br />
                RODRIGUES
              </div>
            </div>

            <button
              className="text-amber-600 font-black text-xl lg:text-2xl tracking-wider hover:scale-110 transition-transform touch-manipulation"
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
          <div className="absolute top-1/2 right-1/4 lg:right-1/3 w-48 lg:w-96 h-1 lg:h-2 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent transform -rotate-12 blur-sm" />
          <div className="absolute top-1/2 right-1/4 lg:right-1/3 w-32 lg:w-64 h-32 lg:h-64 bg-amber-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-1 lg:w-2 h-1 lg:h-2 bg-amber-600 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/5 w-0.5 lg:w-1 h-0.5 lg:h-1 bg-amber-500 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/6 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-amber-700 rounded-full animate-pulse delay-500" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="space-y-4 lg:space-y-8 text-center lg:text-left"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-black text-amber-600 leading-none tracking-tight">
                GABRIEL
                <br />
                RODRIGUES
              </h1>

              <p className="text-base lg:text-lg text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                Músico • Produtor Musical • Compositor
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-6 text-xs text-gray-400">
                <div className="bg-amber-600 text-white px-2 lg:px-3 py-1 font-bold">2025</div>
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-600 flex items-center justify-center">
                    <Music className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <span className="text-xs lg:text-sm">ARTISTA OFICIAL</span>
                </div>
                <div className="bg-amber-600 text-white px-2 lg:px-3 py-1 font-bold rounded-full text-xs">
                  MÚSICA GOSPEL
                </div>
                <div className="bg-amber-600 text-white px-2 lg:px-3 py-1 font-bold text-xs">PRODUTOR MUSICAL</div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-amber-600 text-white hover:bg-amber-700 font-black px-6 lg:px-8 py-3 lg:py-4 text-sm tracking-wider transform hover:scale-105 transition-all duration-300 touch-manipulation">
                  OUÇA AGORA
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-black px-6 lg:px-8 py-3 lg:py-4 text-sm tracking-wider touch-manipulation"
                >
                  BIOGRAFIA
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative flex justify-center items-center -z-10"
            >
              <div className="relative group -z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500 -z-20" />
                <Image
                  src="/gabriel-photos/gabriel-golden.jpg"
                  alt="Gabriel Rodrigues"
                  width={600}
                  height={800}
                  className="rounded-lg object-cover w-full h-96 lg:h-[600px] transform group-hover:scale-105 transition-transform duration-500 -z-10"
                  style={{
                    filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-amber-600 text-white p-3 lg:p-6 max-w-xs lg:max-w-sm transform hover:scale-105 transition-transform duration-300 z-20"
        >
          <div className="text-xs lg:text-sm font-black mb-1 lg:mb-2 leading-tight">
            NOVO ÁLBUM "VIDA ABUNDANTE" DISPONÍVEL
          </div>
          <div className="text-xs opacity-80">Janeiro 2025</div>
        </motion.div>
      </section>

      {/* Biography Section */}
      <section id="biografia" ref={bioRef} className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-sm font-bold text-gray-600 mb-4">CONHEÇA A HISTÓRIA</div>
            <div className="text-sm text-gray-600">Gabriel Rodrigues</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="relative order-2 lg:order-1">
              <div className="relative group">
                <Image
                  src="/gabriel-photos/gabriel-profile.jpg"
                  alt="Gabriel Rodrigues - Biografia"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-64 lg:h-96 transform group-hover:scale-105 transition-transform duration-500"
                  style={{
                    filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-none">
                MINHA
                <br />
                <span className="text-amber-600">JORNADA</span>
              </h2>
              <div className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed space-y-4">
                <p>
                  Gabriel Rodrigues é um músico, produtor musical e compositor brasileiro que dedica sua vida a
                  transformar corações através da música gospel. Com mais de uma década de experiência, Gabriel tem
                  tocado vidas em todo o Brasil com suas composições inspiradoras.
                </p>
                <p>
                  Nascido em uma família cristã, Gabriel descobriu sua paixão pela música ainda criança. Aos 12 anos,
                  pegou seu primeiro violão e desde então não parou de criar melodias que conectam as pessoas com o
                  sagrado.
                </p>
                <p>
                  Hoje, além de sua carreira solo, Gabriel é proprietário do estúdio Bless Records, onde produz e grava
                  artistas gospel de todo o país, sempre com o objetivo de levar esperança e fé através da música.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-amber-600 text-white px-4 py-2 text-sm font-bold">10+ ANOS DE CARREIRA</div>
                <div className="bg-gray-900 text-white px-4 py-2 text-sm font-bold">50+ COMPOSIÇÕES</div>
                <div className="bg-amber-600 text-white px-4 py-2 text-sm font-bold">BLESS RECORDS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Album Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-sm font-bold text-white mb-4">NOVO LANÇAMENTO</div>
            <div className="text-sm text-white">Gabriel Rodrigues</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 lg:mb-8 leading-none">
              NO REINO
              <br />
              <span className="text-amber-200">DE DEUS</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={bioInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <Image
                  src="/albums/no-reino-de-deus.jpg"
                  alt="Álbum No Reino de Deus - Gabriel Rodrigues"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white text-amber-600 px-3 py-1 text-xs font-bold rounded-full">
                  EM BREVE
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={bioInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 lg:mb-8 leading-tight">
                O PRÓXIMO CAPÍTULO
              </h3>
              <div className="text-base lg:text-lg text-amber-100 mb-6 lg:mb-8 leading-relaxed space-y-4">
                <p>
                  "No Reino de Deus" representa uma nova fase na jornada musical de Gabriel Rodrigues. Este álbum
                  promete levar os ouvintes a uma experiência profunda de adoração e conexão espiritual.
                </p>
                <p>
                  Com composições inéditas e arranjos cuidadosamente elaborados, cada faixa foi pensada para tocar
                  corações e transformar vidas através da música gospel contemporânea.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                <div className="bg-white text-amber-600 px-4 py-2 text-sm font-bold rounded-full">LANÇAMENTO 2025</div>
                <div className="bg-amber-800 text-white px-4 py-2 text-sm font-bold rounded-full">
                  12 FAIXAS INÉDITAS
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-white text-amber-600 hover:bg-amber-100 font-black px-6 py-3 text-sm tracking-wider touch-manipulation">
                  PRÉ-VENDA
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 font-black px-6 py-3 text-sm tracking-wider touch-manipulation"
                >
                  SAIBA MAIS
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="musicas" ref={musicRef} className="py-12 lg:py-20 bg-amber-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-sm font-bold text-white mb-4">DISCOGRAFIA</div>
            <div className="text-sm text-white">Gabriel Rodrigues</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={musicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-black text-white mb-8 lg:mb-12 leading-none">
              MÚSICAS
              <br />
              QUE TRANSFORMAM
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 50 }}
                animate={musicInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 touch-manipulation"
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
                    src={album.image || "/placeholder.svg"}
                    alt={album.title}
                    width={300}
                    height={300}
                    className="w-full h-40 lg:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => handlePlayTrack(album.id)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white p-3 lg:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 touch-manipulation"
                  >
                    {currentTrack === album.id && isPlaying ? (
                      <Pause className="w-4 lg:w-6 h-4 lg:h-6" />
                    ) : (
                      <Play className="w-4 lg:w-6 h-4 lg:h-6" />
                    )}
                  </button>
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 text-xs font-bold">
                    {album.year}
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-amber-600 font-black text-base lg:text-lg mb-2 line-clamp-2">{album.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 font-bold">{album.subtitle}</p>
                  <div className="space-y-1">
                    {album.tracks.map((track, trackIndex) => (
                      <div key={trackIndex} className="text-gray-500 text-xs flex items-center">
                        <div className="w-1 h-1 bg-amber-600 rounded-full mr-2"></div>
                        {track}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={musicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12 lg:mt-16"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 font-black px-6 py-3 text-sm tracking-wider touch-manipulation">
                <Spotify className="w-5 h-5 mr-2" />
                SPOTIFY
              </Button>
              <Button className="bg-white text-amber-600 hover:bg-gray-100 font-black px-6 py-3 text-sm tracking-wider touch-manipulation">
                <Apple className="w-5 h-5 mr-2" />
                APPLE MUSIC
              </Button>
              <Button className="bg-white text-amber-600 hover:bg-gray-100 font-black px-6 py-3 text-sm tracking-wider touch-manipulation">
                <Youtube className="w-5 h-5 mr-2" />
                YOUTUBE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" ref={galleryRef} className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="text-sm font-bold text-gray-600 mb-4">MOMENTOS ESPECIAIS</div>
            <div className="text-sm text-gray-600">Gabriel Rodrigues</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-none">
              GALERIA
              <br />
              <span className="text-amber-600">FOTOGRÁFICA</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Contact Section */}
      <section id="contato" ref={contactRef} className="py-12 lg:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 right-1/4 w-48 lg:w-96 h-48 lg:h-96 bg-amber-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-black text-white mb-6 lg:mb-8 leading-none">
              VAMOS
              <br />
              <span className="text-amber-600">CONVERSAR</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Entre em contato para shows, parcerias ou apenas para compartilhar como a música tem tocado sua vida.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-3xl lg:text-4xl font-black text-amber-600 mb-6 lg:mb-8 leading-tight">
                REDES SOCIAIS
              </h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/gabrielrodriguesoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center lg:justify-start space-x-3 hover:text-amber-600 transition-colors duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white group-hover:text-amber-600 transition-colors duration-300">
                    @gabrielrodriguesoficial
                  </span>
                </a>
                <a
                  href="https://youtube.com/@gabrielrodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center lg:justify-start space-x-3 hover:text-amber-600 transition-colors duration-300 group"
                >
                  <Youtube className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white group-hover:text-amber-600 transition-colors duration-300">
                    Gabriel Rodrigues
                  </span>
                </a>
                <a
                  href="https://open.spotify.com/artist/gabrielrodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center lg:justify-start space-x-3 hover:text-amber-600 transition-colors duration-300 group"
                >
                  <Spotify className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white group-hover:text-amber-600 transition-colors duration-300">
                    Gabriel Rodrigues
                  </span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-amber-600 p-6 lg:p-8 group hover:scale-105 transition-all duration-300"
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
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-1">
                    <Image
                      src="/logo/familia-rodrigues.png"
                      alt="Família Rodrigues"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-sm font-black">GABRIEL RODRIGUES</div>
                </div>

                <div className="text-sm mb-4">Músico • Produtor • Compositor</div>

                <h4 className="text-xl lg:text-2xl font-black mb-4">ENTRE EM CONTATO!</h4>
                <div className="text-sm mb-6">Vamos criar algo incrível juntos</div>

                <div className="space-y-4">
                  <Input
                    placeholder="SEU NOME"
                    className="bg-white text-gray-900 border-white placeholder:text-gray-500 touch-manipulation"
                  />
                  <Input
                    placeholder="SEU EMAIL"
                    className="bg-white text-gray-900 border-white placeholder:text-gray-500 touch-manipulation"
                  />
                  <Input
                    placeholder="SUA MENSAGEM"
                    className="bg-white text-gray-900 border-white placeholder:text-gray-500 touch-manipulation"
                  />
                  <Button className="w-full bg-white text-amber-600 hover:bg-gray-100 font-black py-3 text-sm tracking-wider touch-manipulation">
                    → ENVIAR MENSAGEM
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-3xl lg:text-4xl font-black text-amber-600 mb-6 lg:mb-8 leading-tight">
                BLESS RECORDS
              </h3>
              <div className="text-white space-y-2 mb-6">
                <div>Estúdio de Gravação</div>
                <div>São Paulo, SP</div>
                <div>contato@blessrecords.com.br</div>
              </div>
              <Link href="/bless-records">
                <Button className="bg-amber-600 text-white hover:bg-amber-700 font-black px-6 py-3 text-sm tracking-wider touch-manipulation">
                  CONHEÇA O ESTÚDIO
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 space-y-4 lg:space-y-0">
            <div>© 2025 Gabriel Rodrigues. Todos os direitos reservados.</div>
            <div>Desenvolvido com ❤️ para transformar vidas</div>
          </div>
        </div>
      </section>
    </div>
  )
}
