import React, { RefObject, useRef, useState } from 'react'



const FaqsCard = (props:any) => {
    const answerElRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = (answerElRef.current?.childNodes[0] as HTMLElement)?.offsetHeight;
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden  text-primary dark:text-white"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer py-5 flex items-center justify-between text-lg text-primary dark:text-white font-medium">
                {faqsList.question}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-primary dark:text-white">
                        {faqsList.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FaqsCard