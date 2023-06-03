import {Navbar} from "@/components";
import {Montserrat} from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// Font import
const font = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function Error() {
    return (
        <div className={'h-screen w-full ' + font.className}>
            <Navbar/>
            {/* Error 404 */}
            <div className="relative h-full w-full flex flex-col justify-center items-center p-for-nav">
                <Image src={'/no-data.png'} alt={''} height={400} width={400} priority className={'grayscale'}/>

                <h1 className="text-6xl font-bold text-dark">404</h1>
                <p className="text-xl text-center text-dark/90">
                    The page you are looking for does not exist.
                    <br/>Please try to refresh the page or return to the homepage.
                </p>

                <Link href={'/'} className={"mt-12 text-primary-600 font-semibold block"}>
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}
