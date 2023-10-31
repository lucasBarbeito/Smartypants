import {cva, VariantProps} from "class-variance-authority";
import Course, {CourseProps} from "../Course";

const sideScrollCourseCarouselVariant = cva([
],{
    variants:{
        variant:{
            category:[],
            'in-progress':[]
        }
    },
    defaultVariants:{
        variant:'category'
    }
})

export interface SideScrollCourseCarouselProps extends VariantProps<typeof sideScrollCourseCarouselVariant>{
    courses: CourseProps[],
    categoryName: string
}

const SideScrollCourseCarousel = ({variant, courses, categoryName}:SideScrollCourseCarouselProps) => {
    const courseVariant  = variant === 'in-progress'  ? 'in-progress' : 'course'
    const text = variant === 'in-progress'  ? 'In progress' : categoryName
    return (
        <div className={'flex space-y-1 flex-col'}>
            <h2 className={'text-headline-medium text-greyscale-500'}>{text}</h2>
            <div className={'overflow-x-scroll no-scrollbar'}>
                <div className={'inline-flex gap-4 no-scrollbar'}>
                    {courses.map(course => (
                        <Course {...course} variant={courseVariant}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideScrollCourseCarousel
