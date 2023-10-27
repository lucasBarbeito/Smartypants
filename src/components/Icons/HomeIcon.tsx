import {ClickableIconInterface} from "./ClickableIconInterface";

const HomeIcon = ({size=24, checked}:ClickableIconInterface) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill={ checked ? '#81A1C1': "#EEEEE"}/>
        </svg>
    )
}

export default HomeIcon;