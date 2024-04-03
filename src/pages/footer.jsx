import React, { useState } from "react";
import rightIcon from "../assests/right-arrow-angle.png";
import leftIcon from "../assests/left-arrow-angle.png";

const Pagination = () => {
  const [totalPages, setTotalPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ backgroundColor: "#F1F3F5", width: "100%" }}>
      <img
        className="w-full h-2.8 absolute !m-[0] right-[0px] bottom-[88.2px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/scroll-1@2x.png"
        style={{ width: "100%" }}
      />
      <div
        className="pagination"
        style={{
          padding: "10px",
          margin: "15px 0",
          fontSize: "16px", // Added font size
          display: "flex", // Added display flex
          justifyContent: "center", // Horizontally centering
          alignItems: "center", // Vertically centering
        }}
      >
        <span
          style={{
            padding: "5px 20px",
            //   border: "1px solid gray",
            color: "#A1A1A1",
            cursor: "pointer",
          }}
        >
          <div>
            <img src={leftIcon} alt="" style={{ height: "24px", marginRight: "-18px" }} />
            <img src={leftIcon} alt="" style={{ height: "24px" }} />
            <img src={leftIcon} alt="" style={{ height: "24px", marginTop: "5px" }} />
          </div>
        </span>
        {totalPages.map((_, i) => {
          return (
            <span
              style={{
                padding: "5px 20px",
                //   border: "1px solid gray",
                color: "#A1A1A1",
                cursor: "pointer",
                fontSize: "18px",
                fontFamily: "Pretendard",
              }}
              key={i}
            >
              <div
                style={{
                  backgroundColor: activeIndex == i ? "#2A3958" : "",
                  color: activeIndex == i ? "white" : "",
                  borderRadius: "4px",
                }}
                onClick={() => handleClick(i)}
              >
                <span style={{ padding: "8px" }}>{i + 1}</span>
              </div>
            </span>
          );
        })}
        <span
          style={{
            padding: "5px 20px",
            //   border: "1px solid gray",
            color: "#A1A1A1",
            cursor: "pointer",
            fontSize: "20px",
            fontFamily: "Pretendard",
          }}
        >
          <img src={rightIcon} alt="" style={{ height: "24px", marginTop: "5px" }} />
          <img src={rightIcon} alt="" style={{ height: "24px" }} />
          <img src={rightIcon} alt="" style={{ height: "24px", marginLeft: "-18px" }} /> {/* Adjusted marginLeft */}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
