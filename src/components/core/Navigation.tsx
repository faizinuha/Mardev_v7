"use client"

import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ThemeChangerButton } from '../elements'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/projects", text: "Projects" },
    { url: "/contact", text: "Contact" },
  ]

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-[1001]"
        style={{ scaleX }}
      />

      <motion.nav
        className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
          isScrolled ? 'glass-shoji shadow-soft' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-testid="nav-logo">
            <motion.h1
              className="text-xl font-bold text-sakura-gradient hidden lg:block"
              whileHover={{ scale: 1.02 }}
            >
              Zaki
            </motion.h1>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 mx-auto lg:mx-0">
            <ul className={`flex gap-1 px-2 py-1.5 rounded-lg ${
              isScrolled ? 'bg-muted/50' : 'glass-shoji'
            }`}>
              {navLinks.map((nav, i) => {
                const isActive = pathname === nav.url
                return (
                  <li key={i}>
                    <Link href={nav.url} data-testid={`nav-link-${nav.text.toLowerCase()}`}>
                      <motion.span
                        className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {nav.text}
                      </motion.span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Theme Toggle */}
          <ThemeChangerButton />
        </div>
      </motion.nav>
    </>
  )
}

export default Navigation
