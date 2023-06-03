import React from 'react';
import Image from "next/image";

function NoDataFound({text}: {text: string}): React.JSX.Element {
    return (
        <section className="container mx-auto px-5 py-24 min-h-[20rem] flex flex-col justify-center items-center">
            <Image src={'/no-data.png'} alt={''} height={450} width={450} loading={'lazy'} className={'grayscale'} />
            <h2 className="mt-4 text-4xl font-bold text-center text-neutral-500 capitalize">{text}</h2>
        </section>
    );
}

export default NoDataFound;
