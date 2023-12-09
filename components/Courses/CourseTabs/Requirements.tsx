interface requirementsProps {
  requirements: any;
}
const Requirements = ({ requirements }: requirementsProps) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold"> What are the requirements for the students befor starting this course</h1>
      <ul className="list-disc list-inside mt-4">
        {requirements?.map((item: any, idx: number) => (
          <li key={idx} className="text-gray-500">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requirements;
