'use client'
interface ContainerProps {
    children: Readonly<React.ReactNode>
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div
        className="
        max-w-[2520px]
        mx-auto 
        xl:px-20
        sm:px-2
        px:-4
        "
        >
            {children}
        </div>
    )
}

export default Container