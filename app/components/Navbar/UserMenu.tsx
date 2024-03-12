'use client'
import { AiOutlineMenu } from "react-icons/ai"
import { Avatar } from ".."
const UserMenu = () => {
    return (
        <div className='relative'>
            <div className="
        flex
        items-center
        gap-3
        ">
                <div
                onClick={() => { }}
                className="hidden
                md:block
                tex-sm 
                font-semibold
                py-3 
                px-4
                rounded-full
                hover:bg-neutral-100
                transition-all
                cursor-pointer
                "
                >
                    Airbnb your home
                </div>
                <div
                onClick={()=>{}}
                className="
                p-4
                md:py-1
                md:px-2
                border
                border-neutral-200
                flex
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition-all
                "
                >
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserMenu