'use client'
import { AiOutlineMenu } from "react-icons/ai"
import { Avatar, MenuItem } from ".."
import { useCallback, useState } from "react"
const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => (!prev));

    }, [])
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
                    onClick={toggleOpen}
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
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
            <div 
            className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            ">
                <div className="flex flex-col cursor-pointer">
                <>
                <MenuItem
                onClick={()=>{}}
                label="login"
                />
                <MenuItem
                onClick={()=>{}}
                label="Sign up"
                />
                </>
                </div>
            </div>)}
        </div>
    )
}

export default UserMenu