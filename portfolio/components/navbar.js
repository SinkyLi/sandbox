import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex-1 bg-blue-500">
               <div className="container mx-auto flex justify-between items-center">
                        <div className="text-white text-xl">
                        <Link href="/">Home</Link>
                        </div>
                        <div className="text-white text-xl">
                        <Link href="/about">About</Link>
                        </div>
                        <div className="text-white text-xl">
                        <Link href="/portfolio">Portfolio</Link>
                        </div>
                        <div className="text-white text-xl">
                        <Link href="/contact">Contact Me</Link>
                        </div>
                </div>
        </nav>        
  
    )
  };

  
  export default Navbar;
  