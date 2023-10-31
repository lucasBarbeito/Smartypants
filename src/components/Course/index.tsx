import {cva, VariantProps} from "class-variance-authority";
import ProgressBar from "../ProgressBar";
import star from "../Icons/Star.svg"
import starAction from "../Icons/StarAction.svg"
import exit from "../Icons/Exit.svg"
import media from "../../Media.svg"

const courseVariant = cva([
    'text-greyscale-500',
    'w-48',
    'truncate'
],{
    variants:{
        variant:{
            'in-progress':[],
            'description':[],
            'actionable':[],
            'actionable-child':[],
            'course':[],
            'course-description':[],
        }
    },
    defaultVariants:{
        variant:'in-progress'
    }
})

export interface CourseProps extends VariantProps<typeof courseVariant>{
    courseName: string,
    averageRating: number,
    totalRatings: string,
    description: string,
}

const Course = ({variant, courseName, averageRating, totalRatings, description}:CourseProps) => {
    const borderRadius : string = variant === 'course' || variant === 'course-description' ? ' rounded-t-lg' : ''
    return (
        <div className={courseVariant({variant})} >
            {( variant === 'in-progress' || variant === 'description' || variant === 'actionable' || variant === 'actionable-child') &&
                (<ProgressBar variant={'top-rounded'} color={'bg-success'} completed={0}/>)
            }
            {( variant === 'in-progress' || variant === 'description' || variant === 'actionable' || variant === 'course' || variant === 'course-description') &&
                (<img className={'flex self-stretch' + borderRadius} src={media} alt={"Media"}/>)
            }
            <div className={'gap-1 px-2 pb-2 bg-primary-400 rounded-b-lg'}>
                <p className={"text-body-large"}>{courseName}</p>
                {(variant === 'description' || variant === 'actionable' || variant === 'actionable-child' || variant === 'course-description') &&
                    (<p className={"text-body-small"}>{description}</p>)
                }
                <div className={'flex'}>
                    <div className={'flex items-center'}>
                        <img src={star} alt="Star icon" />
                        <p className={"text-body-small"}>{averageRating}({totalRatings})</p>
                    </div>
                    <div className={'grow'}></div>
                    {(variant === 'actionable' || variant === 'actionable-child')  &&
                        (<div className={'flex items-center'}>
                            <img src={starAction} alt="Rate" />
                            <img src={exit} alt="Star icon" />
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Course
