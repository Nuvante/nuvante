import React from "react";

const filled_star = "./filled_star.svg";
const unfilled_star = "./unfilled_star.svg";

export default function Stars({ count }: { count: number }) {
  let dummy = new Array(5);
  for (let i = 0; i < 5; ++i) {
    dummy[i] = count - i - 1 >= 0 ? true : false;
  }
  return (
    <>
      <div key={Math.random()} className="flex">
        {dummy.map((element, index) => {
          if (element) {
            return (
              <>
                <img key={index} src={filled_star} alt="" />
              </>
            );
          } else {
            return (
              <>
                <img key={index} src={unfilled_star} alt="" />
              </>
            );
          }
        })}
      </div>
    </>
  );
}
