import Logo from "@/components/Logo";
import {footerItems} from "@/utils/constant";
import Link from "next/link";

export default function Footer() {

    return (
        <footer className=" relative bg-dark w-full py-12 px-8 mt-24 min-h-[20rem]">
            <div className="container flex flex-col items-center gap-8">
                {/* Logo nd description */}
                <Logo light/>

                {/* Nav items */}
                <ul className="flex flex-wrap justify-center items-center gap-8 mt-4">
                    {footerItems.map((item) => (
                        <li key={item.text} className={`text-white font-light text-center text-lg`}>
                            <Link href={item.url} className={`border-b border-primary-400`}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Description */}
                <p className="text-gray-100 text-lg font-light text-center mt-4">
                    Soka Strengths Consulting is a leading consultancy specializing in helping organizations unleash
                    their full potential and achieve sustainable success. Our team of experienced consultants offers a
                    range of strategic services tailored to each client&apos;s needs.
                </p>

                {/* Divider and copyright text */}
                <div className="flex flex-col items-center gap-4 my-8">
                    <div className="w-1/2 h-0.5 bg-white"></div>
                    <p className="text-white font-light text-center">
                        <span className={'text-primary-400'}>© 2023 </span>
                        Soka Strengths Consulting. All rights reserved.
                    </p>
                </div>


                {/* Developer */}
                <p className="absolute bottom-2 right-4 text-white font-light text-center text-lg">
                    Developed by&nbsp;<a href="https://dev-rajanverma.me/" target={'_blank'}
                                         className="text-blue-500"> Rajan Verma</a>
                </p>
            </div>
        </footer>
    )
}
