import { features } from "@/constant";

const Features = () => {

  return (
    <section className="py-28 bg-white dark:bg-gray-900 relative">
      <div className="max-w-screen-2xl mx-auto px-4 text-gray-600 md:px-8 font-Poppins">
        <div className="max-w-xl mx-auto space-y-3 sm:text-center">
          <h3 className="text-indigo-600 font-semibold dark:text-white">Features</h3>
          <p className="text-gray-800 dark:text-slate-200 text-3xl font-semibold sm:text-4xl">
          Benefits of Joining E-Learning Platform
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className=" bg-[#F4F6FC] py-12 px-10 shadow-lg cursor-pointer duration-300 hover:translate-y-[-10px] transition-transform">
                <div className="flex-none mb-5 w-12 h-12 bg-[#2405F2] text-white rounded-lg flex items-center justify-center text-lg font-bold relative before:absolute before:content-[''] before:left-0 before:bottom-0 before:bg-yellow before:w-2 before:h-7 before:rounded-tr-lg before:rounded-bl-lg">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-2xl text-primary font-medium">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-primary font-medium">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
    </section>
  );
};

export default Features;
