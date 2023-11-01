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

const SideScrollCourseCarousel = ({variant, courses, categoryName}:courseListProps) => {
    const courseVariant  = 'course'
    const text = categoryName
    return (
        <div className={'flex flex-col space-y-1 bg-primary-600 w-64'}>
            <h2 className={'text-headline-medium text-greyscale-500'}>{text}</h2>
            <div className={'overflow-y-scroll h-64 no-scrollbar'}>
                {courses.map(course => (
                    <div key={course.id} className={'mb-4'}>
                        <Course {...course} variant={courseVariant} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideScrollCourseCarousel
