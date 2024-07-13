"use client";
import { useState } from "react";

import SeafoodData from "../../../data/seafood";
import SeafoodWrapper from "./seafood.style";
import nextConfig from "@config";
import InfoModal from "../../components/InfoModal/page";

const Seafood = () => {
  const seafooddata = SeafoodData;
  const [openPopup, setOpenPopup] = useState(false);

  const showInfo = () => {
    console.log("showInfo");
    const isOpen = !openPopup;
    setOpenPopup(isOpen);
  };

  return (
    <SeafoodWrapper>
      <table className="seafood__table">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이미지</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <thead>
          {seafooddata.map((data, index) => {
            return (
              <tr key={index}>
                <td className="seafood__table--index">{index + 1}</td>
                <td className="seafood__table--name">{data.name}</td>
                <td>
                  <img
                    className="seafood__table--img"
                    src={`${nextConfig.basePath}` + data.src}
                    alt={data.name}
                  />
                </td>
                <td>
                  <button className="seafood__table--button" onClick={showInfo}>
                    상세보기
                  </button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>

      {openPopup && (
        <div className="fursysQuestionaction--popup-wrap">
          <InfoModal />
          {/* <InfoModal clickCancle={clickQuestion} /> */}
        </div>
      )}
    </SeafoodWrapper>
  );
};

export default Seafood;
