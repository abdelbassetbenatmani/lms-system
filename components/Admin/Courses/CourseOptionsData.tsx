import { FC } from "react";
import toast from "react-hot-toast";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { MdAddCircle, MdOutlineDelete } from "react-icons/md";
type Props = {
  benifits: { title: string }[];
  setBenifits: (benifits: { title: string }[]) => void;
  requirements: { title: string }[];
  setRequirements: (requirements: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseOptionsData: FC<Props> = ({
  benifits,
  setBenifits,
  requirements,
  setRequirements,
  active,
  setActive,
}) => {
  const handelBenifietsChange = (index: number, value: any) => {
    const newBenifits = [...benifits];
    newBenifits[index].title = value;
    setBenifits(newBenifits);
  };
  const handelRequirementsChange = (index: number, value: any) => {
    const newrequirements = [...requirements];
    newrequirements[index].title = value;
    setRequirements(newrequirements);
  };
  const handelOptionsDataChange = () => {
    if(benifits[benifits.length - 1]?.title !== "" && requirements[requirements.length - 1]?.title !== ""){
      setActive(active + 1);
    }else{
      toast.error("Please fill all the fields");
    }
  }
  return (
    <div className="font-Poppins w-full mt-7 min-h-sidbar">
      <div className="mb-6">
        <label className="text-lg font-semibold font-Poppins block mb-4">
          What are the benifits for the students in this course?
        </label>
        {benifits.map((benifit, index) => (
          <div className="flex items-center mb-2" key={index}>
            <input
              type="text"
              className="ps-8 py-5 text-primary dark:text-white font-Poppins rounded-lg border border-primary dark:border-white border-opacity-10 bg-transparent w-full"
              placeholder="Enter benifit"
              value={benifit.title}
              onChange={(e) => handelBenifietsChange(index, e.target.value)}
            />
            <button
              className="ml-2 px-2 py-2 bg-red-500 text-white rounded-md"
              onClick={() => {
                const newBenifits = [...benifits];
                newBenifits.splice(index, 1);
                setBenifits(newBenifits);
              }}>
              <MdOutlineDelete size={25} className="text-white" />
            </button>
          </div>
        ))}
        <button
          className="text-primary dark:text-white"
          onClick={() => setBenifits([...benifits, { title: "" }])}>
          <MdAddCircle size={30} className="text-primary dark:text-white" />
        </button>
      </div>
      <div className="mb-6">
        <label className="text-lg font-semibold font-Poppins block mb-4">
          What are the requirements for the students befor starting this course?
        </label>
        {requirements.map((requirement, index) => (
          <div className="flex items-center mb-2" key={index}>
            <input
              type="text"
              className="ps-8 py-5 text-primary dark:text-white font-Poppins rounded-lg border border-primary dark:border-white border-opacity-10 bg-transparent w-full"
              placeholder="Enter requirement"
              value={requirement.title}
              onChange={(e) => handelRequirementsChange(index, e.target.value)}
            />
            <button
              className="ml-2 px-2 py-2 bg-red-500 text-white rounded-md"
              onClick={() => {
                const newrequirements = [...requirements];
                newrequirements.splice(index, 1);
                setRequirements(newrequirements);
              }}>
              <MdOutlineDelete size={25} className="text-white" />
            </button>
          </div>
        ))}
        <button
          className="text-primary dark:text-white"
          onClick={() => setRequirements([...requirements, { title: "" }])}>
          <MdAddCircle size={30} className="text-primary dark:text-white" />
        </button>
      </div>
      <div className="flex justify-between">
        <button
          className="flex items-center  justify-center bg-yellow text-primary w-36 my-5 py-3 rounded-lg font-Poppins font-bold text-lg hover:border hover:border-yellow hover:bg-primary hover:text-yellow duration-300"
          onClick={() => setActive(active - 1)}>
          <span><BsArrowLeftShort size={30}/></span>
          <span>Back</span>
        </button>
        <button
          className="flex items-center  justify-center bg-yellow text-primary w-36 my-5 py-3 rounded-lg font-Poppins font-bold text-lg hover:border hover:border-yellow hover:bg-primary hover:text-yellow duration-300"
          onClick={handelOptionsDataChange}>
          <span>Next</span>
          <span><BsArrowRightShort size={30}/></span>
        </button>
      </div>
    </div>
  );
};

export default CourseOptionsData;
