'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
function AirLogo() {
    const router = useRouter()

    return (
        <Image
            alt="Logo"
            className="hidden h-auto  md:block cursor-pointer"
            width={100}
            height={100}
            src='/images/air.png'
        />
    )
}

export default AirLogo