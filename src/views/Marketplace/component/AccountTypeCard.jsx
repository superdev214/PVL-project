import React from "react";
const AccountTypeCard = (props) => {
  const { type, life_price, six_months_price, color1, color2 } = props;

  return (
    <>
      <div className="rounded-[20px] bg-[#3B3B3B] overflow-hidden">
        <div style={{background: `linear-gradient(180deg, ${color1} 0%, rgba(0, 0, 0, 0.00)`}}>
        
          <img
            src={`/assets/account/${type}.png`}
            alt="no Img"
             className="w-full max-h-[438px] xl:max-h-[293px] md:max-h-[256px] 2xl:max-h-[356px]"
          />
        </div>
        <div className="container mx-auto p-5 space-y-6">
          <div>
            <h1
              className="font-work text-[22px] font-semibold
             leading-[30px] text-white mb-1 capitalize"
            >
              {type}
            </h1>
            <div className="flex gap-x-3">
              <img alt="noIMG" src="/assets/pvl.png" className="w-6 h-6" />
              <span className="font-mono text-base font-normal leading-[22px] text-[#FFF]">
                PVL Shop
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <h4 className="text-[#858584] font-mono text-sm">
                {six_months_price !== 0 ? "Price lifetime" : "Lifetime only"}
              </h4>
              <p className="text-white font-mono text-sm font-normal leading-[13px]">
                ${life_price}
              </p>
            </div>
            {six_months_price !== 0 && (
              <div className="space-y-2">
                <h4 className="text-[#858584] font-mono text-sm">
                  Price 6 months
                </h4>
                <p className="text-white font-mono text-sm font-normal leading-[13px]">
                  {six_months_price} $
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountTypeCard;
