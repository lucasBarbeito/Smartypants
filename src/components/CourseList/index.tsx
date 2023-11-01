import {cva, VariantProps} from "class-variance-authority";
import {CourseProps} from "../Course";
import media from "../../Media.svg";
import star from "../Icons/Star.svg";

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
            <div className={'overflow-y-scroll h-64 no-scrollbar'}>
                {courses.map(course => (
                    <div key={course.id} className={'mb-4'}>
                        <div className={'text-greyscale-500 truncate'} >
                            <img className={'flex self-stretch rounded-t-lg'} src={media} alt={"Media"}/>
                            <div className={'gap-1 px-2 pb-2 bg-primary-400 rounded-b-lg'}>
                                <p className={"text-body-large"}>{course.courseName}</p>
                                <div className={'flex'}>
                                    <div className={'flex items-center'}>
                                        <img src={star} alt="Star icon" />
                                        <p className={"text-body-small"}>{course.averageRating}({course.totalRatings})</p>
                                    </div>
                                    <div className={'grow'}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideScrollCourseCarousel
