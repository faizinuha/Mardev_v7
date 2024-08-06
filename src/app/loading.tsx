import React from 'react'
import { MdOutlineDownloading } from "react-icons/md"
type Props = {}

const loading = (props: Props) => {
  return (
    <div className='min-h-screen fixed z-[1000000] bg-accent w-full flex items-center justify-center top-0 left-0 right-0 bottom-0'>
        <span className='flex items-center justify-center lg:text-7xl text-4xl text-primary'>
            <MdOutlineDownloading className='animate-bounce'/>
            Loading
        </span>
    </div>
  )
}

export default loading