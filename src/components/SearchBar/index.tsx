import {cva, VariantProps} from "class-variance-authority";
import search from "../Icons/Search.svg"

const searchBarVariant = cva([
    'rounded-lg',
    'bg-primary-400',
    'text-body-large', 
    'text-greyscale-500',
    'w-full',
    'py-2',
    'px-4',
    'flex justify-between',
    'items-center',
    'gap-4'
    ],{
    variants:{
        variant:{
            searching:[],
            'not-searching':[]
        }
    },
    defaultVariants:{
        variant:'not-searching'
    }
})

export interface SearchBarProps extends VariantProps<typeof searchBarVariant>{
    searchingText: string
}

const SearchBar = ({variant, searchingText}:SearchBarProps) => {
    return (
    <button className={searchBarVariant({variant})}>
        <h1>{variant === 'not-searching' ? 'Search' : searchingText}</h1>
        {variant === 'not-searching' && (<img src={search} alt="Search icon" />)}
    </button>)
}

export default SearchBar
