"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    url: string,
    text: string
}

const NavigationLink = (props: Props) => {
    const params = usePathname()
    const { url, text } = props
    const isActive = params === url

    return (
        <Link 
            href={url}
            className="relative group"
        >
            <motion.span 
                className={`
                    text-sm lg:text-base font-medium transition-colors duration-300
                    ${isActive 
                        ? 'text-primary' 
                        : 'text-foreground/70 hover:text-foreground'
                    }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {text}
            </motion.span>
            
            {/* Animated Underline */}
            <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: isActive ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
        </Link>
    )
}

export default NavigationLink