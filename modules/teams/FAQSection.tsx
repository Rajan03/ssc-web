import React from "react";
import {QuesCard, SectionHeader} from "@/components";
import {SanityFAQTeam} from "@/types/sanity";

interface Props {
    faq: SanityFAQTeam
    className?: string
}

const FAQSection: React.FC<Props> = ({faq, className}) => {

    return (
        <section
            className={"container mx-auto px-5 py-24 flex flex-col gap-x-12 justify-center items-center " + className}>
            <SectionHeader title={faq.subtitle} showLine className="mb-8"/>
            <div className="text-6xl font-bold text-dark leading-sm text-start">
                {faq.title}
            </div>

            <div className={'grid gap-x-12 gap-y-8 grid-cols-1 lg:grid-cols-2 mt-20 self-stretch'}>
                {faq.faq && faq.faq.map((question) => (
                    <QuesCard key={question.question} {...question} />
                ))}
            </div>
        </section>
    )
}

export default FAQSection;
