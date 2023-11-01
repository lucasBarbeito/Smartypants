import {cva, VariantProps} from "class-variance-authority";
import Course, {CourseProps} from "../Course";

const coursListlVariant = cva([
],{
    variants:{
        variant:{
            category:[]
        }
    },
    defaultVariants:{
        variant:'category'
    }
})

export interface courseListProps extends VariantProps<typeof coursListlVariant>{
    courses: CourseProps[],
    categoryName: string
}

const SideScrollCourseCarousel = ({courses, categoryName}:courseListProps) => {
    return (
        <div className={'flex flex-col space-y-1 w-full'}>
            <h2 className={'text-headline-medium text-greyscale-500'}>{categoryName}</h2>
            <div className={'flex flex-col gap-2 overflow-y-scroll h-64 no-scrollbar'}>
                {courses.map(course => (
                    <div key={course.id}>
                        <Course {...course} variant={'course'} size={"full"}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideScrollCourseCarousel
