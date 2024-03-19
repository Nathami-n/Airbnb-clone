'use client'
import { User } from "@prisma/client"
import { AirLogo, Container, Search, UserMenu } from ".."
interface NavBarProps {
  currentUser?: User | null
}
const  Navbar: React.FC<NavBarProps> = (
  currentUser
) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm ">
      <div
      className="
     py-4
     border-b-[1px]
     "
      >
        <Container>
          <div
        className="
        flex
        flex-row
        justify-between
        items-center
        gap-3
        md:gap-0
        "
          >
            <AirLogo />
            <Search />
            <UserMenu currentUser={currentUser}/>

          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar