import Hero from "./Hero"
import Navbar from "./Navbar"

function Header() {
    return (
        <div class='w-full bg-purple-deep'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header
