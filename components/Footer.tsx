import Logo from "@/components/Logo";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useFooterData} from "@/hooks/footerData";

export default function Footer() {
    const {getFooterData, data} = useFooterData();
    const [loading, setLoading] = useState(true);

    // GET NAV DATA ON MOUNT
    useEffect(() => {
        getFooterData().then(() => setLoading(false));
    }, []);

    if (loading || !data) return null;

    return (
        <footer className=" relative bg-dark w-full py-12 px-8 mt-24 min-h-[20rem]">
            <div className="container flex flex-col items-center gap-8">
                {/* Logo nd description */}
                <Logo url={data.logo}/>

                {/* Nav items */}
                <ul className="flex flex-wrap justify-center items-center gap-8 mt-4">
                    {data.links.map((item) => (
                        <li key={item.title} className={`text-white font-light text-center text-lg`}>
                            <Link href={item.url} className={`border-b border-primary-400`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Description */}
                <p className="text-gray-100 text-lg font-light text-center mt-4">{data.description}</p>

                {/* Divider and copyright text */}
                <div className="flex flex-col items-center gap-4 my-8">
                    <div className="w-1/2 h-0.5 bg-white"></div>
                    <p className="text-white font-light text-center">
                        <span className={'text-primary-400'}>{data.copyRight.split('-')[0]} </span>
                        {data.copyRight.split('-')[1]}
                    </p>
                </div>


                {/* Developer */}
                <p className="absolute bottom-2 right-4 text-white font-light text-center text-lg">
                    Developed by&nbsp;<a href={data.developer.url} target={'_blank'}
                                         className="text-primary-300"> {data.developer.title}</a>
                </p>
            </div>
        </footer>
    )
}
