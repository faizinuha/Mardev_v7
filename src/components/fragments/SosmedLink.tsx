"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
    url: string;
    icon: ReactNode;
};

const SosmedLink = ({ url, icon }: Props) => {
    return (
        <Link href={url} target='_blank' rel="noopener noreferrer">
            <motion.div
                className="relative group p-3 rounded-full bg-card border border-border hover:border-primary transition-colors duration-300"
                whileHover={{
                    scale: 1.1,
                    rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
            >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />

                <span className="relative z-10 text-foreground group-hover:text-primary transition-colors duration-300">
                    {icon}
                </span>
            </motion.div>
        </Link>
    );
};

export default SosmedLink;
