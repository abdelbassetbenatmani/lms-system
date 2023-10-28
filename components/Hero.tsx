import Image from "next/image"
import {BsArrowRightShort} from "react-icons/bs"
const Hero = () => {
  return (
    <div
    className="w-full h-[calc(100vh-100px)] bg-primary relative mt-[90px]"
    >
        <div className="container mx-auto w-full flex justify-between items-center h-full">
            <div className="context ps-4 md:ps-0 md:pe-40">
                <h1 className="text-white font-semibold text-[30px] md:text-[42px] font-Poppins">Build and Make Dreams Come True <br /> With ELearning</h1>
                <p className="font-Poppins text-white text-base font-normal leading-7 my-8">The LMS Elearning is a platform that contains many professional courses to develop your skills and direct you to the labor market</p>
                <div className="flex gap-9 items-center">
                    <button className="bg-yellow px-10 py-4 rounded-md text-primary font-medium text-base font-Poppins duration-300 hover:text-yellow hover:border hover:border-yellow hover:bg-primary cursor-pointer">View Courses</button>
                    <button className="flex items-center gap-1 text-white">
                        <span className="font-normal text-base">View Learning Flow</span>
                        <span>
                            <BsArrowRightShort className="text-white" size={35}/>
                        </span>
                    </button>
                </div>
            </div>
            <div className="hero-image relative hidden md:block">
                <Image
                    src={require("../public/assets/Hero.png")}
                    alt="Hero Image"
                    width={650}
                    height={400}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero