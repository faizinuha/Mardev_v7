        import Image from "next/image";
        import {InstagramLogoIcon,GitHubLogoIcon} from "@radix-ui/react-icons"
        import { ReactNode } from "react";
        import { SosmedLink } from "@/components/fragments";

        export default function Home() {
        return (
            <div className="flex justify-evenly flex-col-reverse lg:flex-row">
            <div className="p-0 m-0">
                <h1 className="text-4xl md:text-5xl lg:text-7xl text-center lg:text-start"><span className="hidden lg:inline">I'am</span><br /> <span className="text-primary font-bold">Adi Kurniawan</span></h1>
                <h2 className="text-center lg:text-start lg:w-9/12">A Software engineering student & Fullstack Web Developer based in Jawa Timur, Indonesia</h2>
                <div className="flex gap-2 mt-3 justify-center lg:justify-start">
                {
                    sosMed.map((item: SosMed, i:number)=>(
                    <SosmedLink icon={item.icon} url={item.url}/>
                    ))
                }
                </div>
            </div>
            <Image
                src={"/images/myfoto.jpg"}
                alt="Adi Kurniawan"
                loading="lazy"
                width={1000}
                height={1000}
                objectFit="cover"
                className="w-32 lg:w-60 rounded-full border-secondary border-8 mx-auto lg:mx-0"
                />
            </div>
        );
        }

        type SosMed = {
        icon: any,
        url: string
        }

        const sosMed = [
        {
            icon: InstagramLogoIcon,
            url: "https://www.instagram.com/_this.adi/",
        },
        {
            icon: GitHubLogoIcon,
            url: "https://github.com/KaitoDeCode"
        }
        ]
