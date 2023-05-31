import React from "react";
import {IQuestion} from "@/types";

const QuesCard: React.FC<IQuestion> = ({question, answer}) => {
    return (
        <div>
            {question}
        </div>
    )
}

export default QuesCard;
