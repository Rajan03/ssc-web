import React from "react";
import {QuesCard, SectionHeader} from "@/components";
import {SanityFAQTeam} from "@/types/sanity";

const FAQSection: React.FC<{ faq: SanityFAQTeam }> = ({faq}) => {

    return (
        <section
            className="container mx-auto px-5 py-24 flex flex-col gap-x-12 justify-center align-stretch">
            <SectionHeader title={faq.subtitle} showLine className="mb-8"/>
            <div className="text-6xl font-bold text-dark leading-sm text-start">
                {faq.title}
            </div>

            <div className={'grid gap-16 grid-cols-1 lg:grid-cols-2'}>
                {faq.questions && faq.questions.map((question) => (
                    <QuesCard {...question} key={question.question}/>
                ))}
            </div>
        </section>
    )
}

export default FAQSection;
