"use client"
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ThemeChangerButton } from '../elements'
import { NavigationLink } from '../fragments'

type Props = {}

const Navigation = (props: Props) => {
    const [prevScrollpos, setPrevScrollpos] = useState(typeof window !== 'undefined' ? window.pageYOffset : 0);
    const [top, setTop] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)

    // Scroll Progress Bar
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
          
          // Show/Hide navbar based on scroll direction
          if (prevScrollpos > currentScrollPos) {
            setTop(0);
          } else {
            setTop(-80);
          }
          
          // Add background blur when scrolled
          setIsScrolled(currentScrollPos > 50)
          
          setPrevScrollpos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollpos]);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-[1001]"
                style={{ scaleX }}
            />

            <motion.nav 
                style={{
                    top: `${(top < 0 ? top-10 : top)}px`,
                }} 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`
                    z-[1000] w-full fixed top-0 h-auto flex items-center justify-between py-4 px-5 lg:px-20
                    transition-all duration-300
                    ${isScrolled 
                        ? 'glass-dark shadow-lg' 
                        : 'bg-transparent'
                    }
                `}
            >
                {/* Logo/Brand */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden lg:block"
                >
                    <h1 className="text-2xl font-display font-bold gradient-text">
                        Portfolio
                    </h1>
                </motion.div>

                {/* Navigation Links */}
                <div className='flex justify-center group w-full lg:w-auto'>
                    <motion.ul 
                        className={`
                            flex lg:gap-8 gap-4 px-6 py-3 rounded-full
                            transition-all duration-300
                            ${isScrolled 
                                ? 'glass border border-border/50' 
                                : 'glass-dark border border-white/10'
                            }
                            hover:border-primary/50
                        `}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {link.map((nav: Link, i: number) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                            >
                                <NavigationLink
                                    url={nav.url}
                                    text={nav.text}
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                {/* Theme Toggle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <ThemeChangerButton />
                </motion.div>
            </motion.nav>
        </>
    )
}

type Link = {
    url: string,
    text: string
}

const link = [
    {
        url: "/",
        text: "Home"
    },
    {
        url: "/about",
        text: "About"
    },
    {
        url: "/projects",
        text: "Projects"
    },
    {
        url: "/contact",
        text: "Contact"
    },
]

export default Navigation
