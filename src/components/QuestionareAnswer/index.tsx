import {ButtonHTMLAttributes} from 'react'
import {cva, VariantProps} from "class-variance-authority";


const questionareAnswerVariant = cva([
    'rounded-lg', 
    'w-full', 
    'text-title-small', 
    'text-greyscale-500', 
    'py-2',
    'px-4',
    'text-left',
],{
    variants:{
        variant:{
            question:[
                'bg-primary-400',
                'hover:bg-secondary-500'
            ],
            selected:[
                'bg-secondary-500'
            ],
            correct:[
                'bg-success'
            ],
            incorrect:[
                'bg-error'
            ],
        }
    },
    defaultVariants:{
        variant:'question'
    }
})

export interface QuestionareAnswerProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof questionareAnswerVariant>{

}

const QuestionareAnswer = ({variant, ...rest}:QuestionareAnswerProps) => {
    return <button className={questionareAnswerVariant({variant})} {...rest}/>
}

export default QuestionareAnswer
