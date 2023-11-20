const KdtCard = ({ kdtData }) => {
  return (
    <div className="bg-yellow-100 w-[290px] h-[416px]">
      <div className="overflow-hidden rounded-lg">
        <img
          className="hover:scale-110 duration-300 rounded-lg"
          src={`./images/${kdtData.image}.webp`}
          alt={kdtData.image}
        />
      </div>
      <div className="pt-4">
        <span
          className={`text-sm font-semibold border py-1 px-2 rounded-[4px] ${
            kdtData.ing === "모집중" && "text-[#1d4ed8] border-[#1d4ed8]"
          } ${
            kdtData.ing === "사전알림신청" && "text-[#059669] border-[#059669]"
          } ${kdtData.ing === "모집마감" && "text-[#3f3f46] border-[#3f3f46]"}`}
        >
          {kdtData.ing}
        </span>
        <h3 className="pt-4 py-2 text-xl font-semibold">{kdtData.title}</h3>
        <h5 className="text-lg">{kdtData.desc}</h5>
        <div className="text-techit-gray-100 mt-4">{kdtData.period}</div>
      </div>
    </div>
  );
};

export default KdtCard;
