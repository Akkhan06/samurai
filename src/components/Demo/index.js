import React from "react";

const DemoBtn = ({ title, wFull, color, bgColor, dotColor }) => {
  return (
    <div className={`  w-fit   flex justify-center items-center`}>
      <button className={` w-fit  relative`}>
        <span
          className="w-[96%] h-[7px]   absolute left-[2%] -top-[7px] z-30"
          style={{ background: color }}
        ></span>
        <span
          className="w-[7px] h-[96%]   absolute -left-[7px] top-[2%] z-30"
          style={{ background: color }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[12px] left-[15px]"
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[5px]  md:top-[6px] left-[21px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[5px]  md:top-[6px] left-[28px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[5px]  md:top-[6px] left-[35px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[5px]  md:top-[6px] left-[42px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[5px]  md:top-[6px] left-[49px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[5px]  md:top-[6px] left-[56px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[5px]  md:top-[6px] left-[63px] "
          style={{ background: dotColor }}
        ></span>
        
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[5px] right-[5px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[12px] right-[5px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[19px] right-[5px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[25px] right-[10px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[32px] right-[18px] "
          style={{ background: dotColor }}
        ></span>

        <span
          className="w-[7px] h-[7px] hidden md:block z-30 absolute bottom-[37px] right-[25px] "
          style={{ background: dotColor }}
        ></span>
        <span
          style={{ background: bgColor }}
          className={`
             ${wFull && "px-[100px]"}
           px-[25px] sm:px-[30px] lg:px-[30px] xl:px-[30px] md:px-[47px] py-[10px]   childBtn`}
        >
          {title}
        </span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -bottom-[4px] -left-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -top-[4px] -left-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -top-[4px] -right-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -bottom-[4px] -right-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[7px] h-[96%] absolute -right-[7px] top-[2%] z-30"
          style={{ background: color }}
        ></span>
        <span
          className="w-[97%] h-[7px] absolute left-[2px]  z-30"
          style={{ background: color }}
        ></span>
      </button>
    </div>
  );
};

export default DemoBtn;
