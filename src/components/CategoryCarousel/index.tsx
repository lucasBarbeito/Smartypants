import Category from "../Category";

export interface CategoryCarouselProps {
    categories: string[],
    selected: number
}

const CategoryCarousel = ({categories, selected}:CategoryCarouselProps) => {
    return (
        <div className={'flex space-y-1 flex-col'}>
            <h2 className={'text-headline-medium text-greyscale-500'}>Categories</h2>
            <div className={'overflow-x-scroll no-scrollbar'}>
                <div className={'inline-flex gap-4 no-scrollbar'}>
                    {categories.map((category, index) => (
                        <Category textName={category} variant={index+1 === selected ? 'selected' : 'unselected'}></Category>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryCarousel
