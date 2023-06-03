import React from "react";
import {IQuestion} from "@/types";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import clsx from "clsx";
import {AiFillQuestionCircle} from "react-icons/ai";

const QuesCard: React.FC<IQuestion> = ({question, answer}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const expandBtnClass = clsx('text-neutral-500 h-10 w-10 p-2 rounded-full hover:bg-neutral-200 cursor-pointer');
    const expandClass = clsx('overflow-hidden transition-all duration-500 shadow rounded p-10' + (isExpanded
        ? ' max-h-[150px] h-[150px]' : ' max-h-[75px] h-[75px]'));
    const toggleAnswer = () => {
        setIsExpanded(ps => !ps);
    }

    return (
        <div className={expandClass}>
            <div className={'flex justify-between items-center'}>
                <div className="flex items-center gap-x-4">
                    <AiFillQuestionCircle className={'text-primary-500 text-3xl'}/>
                    <span className={'text-neutral-500 text-2xl font-medium'}>{question}</span>
                </div>

                {isExpanded
                    ? <FaChevronUp className={expandBtnClass} onClick={toggleAnswer}/>
                    : <FaChevronDown className={expandBtnClass} onClick={toggleAnswer}/>}
            </div>

            {isExpanded && <div className={'mt-4 text-xl text-neutral-500'}>{answer}</div>}
        </div>
    )
}

export default QuesCard;
