const Progressbar = ({ startVal, endVal }) => {
  return (
    <div className="flex flex-col justify-center text-center w-full progressbar">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{startVal}</span>
        <span className="text-sm font-medium">{endVal}</span>
      </div>
      <div className="w-full bg-tertiary-container rounded-full h-2.5">
        <div
          className="bg-on-tertiary-container h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
