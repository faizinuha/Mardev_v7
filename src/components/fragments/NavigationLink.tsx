"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    url: string,
    text: string
}

const NavigationLink = (props: Props) => {

    const params = usePathname()

    const {
        url,
        text
    } = props

    const variant = "text-primary delay-100 ease-in-out"

    const isActive = params == url

  return (
    <li className={`list-none`}>
        <Link className={`text-sm font-medium hover:text-primary transition-all delay-75 ${isActive && variant}`} href={url}>{text}</Link>
    </li>
  )
}

export default NavigationLink