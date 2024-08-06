import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
    url: string,
    icon: any
}

const SosmedLink = (props: Props) => {
  return (
    <Link target='_blank' href={props.url}>
        <span className='hover:text-primary delay-75 ease-in-out'>
            <props.icon width={30} height={30} />
        </span>
    </Link>
  )
}

export default SosmedLink