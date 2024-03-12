'use client'
import { AirLogo, Container, Search, UserMenu } from ".."
function Navbar() {
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
            <UserMenu/>

          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar