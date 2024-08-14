"use client"
import React, { useEffect, useState } from 'react'
import { NavigationLink } from '../fragments'
import { ThemeChangerButton } from '../elements'

type Props = {}

const Navigation = (props: Props) => {

    const [prevScrollpos, setPrevScrollpos] = useState(typeof window !== 'undefined' ? window.pageYOffset : 0);
    const [top, setTop] = useState(0)

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
          const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
          if (prevScrollpos > currentScrollPos) {
            setTop(0); // Show navbar
          } else {
            setTop(-60); // Hide navbar 
          }
          setPrevScrollpos(currentScrollPos);
        };
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        // Clean up by removing the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollpos]);

    return (
        <nav style={{top: `${(top < 0 ? top-10 : top)}px`, transition: "top 0.25s"}} className={`z-[1000] w-full sticky top-0 h-auto flex items-center justify-center py-3 px-0 lg:px-20`}>
            <div className='flex justify-center group w-10/12 md:w-full'>
                <ul className='flex lg:gap-12 gap-4 border-2 border-secondary px-3 py-2 rounded-full group-hover:ring-1'>
                    {link.map((nav: Link, i: number) => (
                        <NavigationLink
                            key={i}
                            url={nav.url}
                            text={nav.text}
                        />
                    ))}
                </ul>
            </div>
            <ThemeChangerButton />
        </nav>
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
