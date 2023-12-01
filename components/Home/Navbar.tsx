import { navbarItems } from '@/constant';
import Link from 'next/link';
import {FC} from 'react'
type NavbarProps = {
    activeItem: number;
    isMobile: boolean;
}
const Navbar:FC<NavbarProps> = ({activeItem,isMobile}) => {
  return (
    <>
        <nav className='hidden md:flex md:gap-9'>
            {
                navbarItems && navbarItems.map((item,index) => (
                    <Link href={`${item.path}`} key={index} className='flex items-center gap-4'>
                        <p className={`font-light uppercase text-base  ${activeItem === index ? 'text-primary dark:text-white' : 'text-black dark:text-white'} `}>{item.name}</p>
                    </Link>
                ))
            }
        </nav>
        {
            isMobile && (
                <nav className='md:hidden mt-5'>
                    <div className="w-full text-center">
                       {
                         navbarItems && navbarItems.map((item,index) => (
                            <Link href={`${item.path}`} key={index} className='flex items-center gap-7 justify-center hover:bg-yellow duration-300'>
                                <p className={`font-light uppercase text-lg my-3  ${activeItem === index ? 'text-primary dark:text-white' : 'text-black dark:text-white'} `}>{item.name}</p>
                            </Link>
                        ))
                       } 
                    </div>
                </nav>
            )
        }
    </>
  )
}

export default Navbar