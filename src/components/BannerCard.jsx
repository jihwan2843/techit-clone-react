const BannerCard = ({ title, desc, image }) => {
  return (
    <li className="h-[400px] relative">
      <div className="container h-full flex flex-col justify-center">
        <h3 className="text-[32px] font-bold">{title}</h3>
        <h5 className="text-[18px] mt-2">{desc}</h5>
      </div>
      <img
        className="absolute top-0 h-full w-full object-cover -z-10"
        src={`./images/${image}.webp`}
        alt="banner_1"
      />
    </li>
  );
};

export default BannerCard;
