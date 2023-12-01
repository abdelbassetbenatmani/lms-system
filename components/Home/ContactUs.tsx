import React from "react";
const ContactUs = () => {
  return (
    <section className="flex overflow-hidden lg:mx-16 py-20">
      <div
        className="flex-1 hidden lg:block h-[80vh]"
        style={{
          backgroundImage: "url(/assets/woman-writing-on-paper.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: "-20",
        }}>
        <div className="mt-6 p-14 z-40">
          <h3 className="text-white font-semibold text-[42px] font-Poppins ">
          Let us know how we can <br /> help you
          </h3>
          <p className="mt-6 text-white text-base font-medium  font-Poppins leading-8">
          We’re here to help and answer any question you might have, <br /> We look forward to hearing from you .


          </p>
        </div>
        <div className="absolute inset-0 bg-primary opacity-60 -z-10"/>
      </div>
      <div className="flex-1 lg:flex lg:justify-center py-10  lg:overflow-auto bg-primary font-Poppins">
        <div className="max-w-lg flex-1 mx-auto px-4 ">
          <div>
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-3 text-white">
              We’d love to hear from you! Please fill out the form bellow.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 mt-12 lg:pb-12 text-white">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="enter your email"
                className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                placeholder="enter your message here"
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
            </div>
            <button
                type="submit"
                className="bg-yellow text-primary w-full my-5 py-3 rounded-lg font-Poppins font-bold text-lg hover:border hover:border-yellow hover:bg-primary hover:text-yellow duration-300">
                Login
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
