import Link from 'next/link'
import React from 'react'
import { MdEmail } from "react-icons/md"
import {
    InstagramLogoIcon,
    GitHubLogoIcon
} from "@radix-ui/react-icons"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <h1 className='text-primary text-4xl font-bold'>Contact Me</h1>
        <p>You can reach me out via email at:</p>
        <a className='flex items-center text-lg gap-2' href={"mailto:kaitodecode@gmail.com"}>
            <MdEmail/>
            kaitodecode@gmail.com
        </a>
        <p className='mt-1'>or via socials below:</p>
        <Link className='flex gap-2 items-center mt-3' href={"https://instagram.com/_this.adi"}>
            <InstagramLogoIcon/>
            <b>Instagram - </b>
            _this.adi
        </Link>
        <Link className='flex gap-2 items-center' href={"https://github.com/KaitoDeCode"}>
            <GitHubLogoIcon/>
            <b>Gitub - </b>
            KaitoDeCode
        </Link>
    </div>
  )
}

export default page