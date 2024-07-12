"use client";
import SeafoodData from "../../../data/seafood";
import SeafoodWrapper from "./seafood.style";
import nextConfig from "@config";

const Seafood = () => {
  const seafooddata = SeafoodData;
  return (
    <SeafoodWrapper>
      <table className="seafood__table">
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>이미지</th>
          <th>상세보기</th>
        </tr>
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
                <button className="seafood__table--button">상세보기</button>
              </td>
            </tr>
          );
        })}
      </table>
    </SeafoodWrapper>
  );
};

export default Seafood;
