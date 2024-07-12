"use client";
import SeafoodData from "../../../data/seafood";
import SeafoodWrapper from "./seafood.style";
import nextConfig from "@config";

const Seafood = () => {
  const seafooddata = SeafoodData;
  return (
    <SeafoodWrapper>
      <div>해산물 리스트</div>
      <table className="seafood__table">
        <th>
          <td>번호</td>
          <td>이름</td>
          <td>이미지</td>
          <td>출현 기간</td>
          <td>채집 상태</td>
          <td>기증 상태</td>
        </th>
        {seafooddata.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>
                <img
                  className="seafood__table--img"
                  src={`${nextConfig.basePath}` + data.src}
                  alt={data.name}
                />
              </td>
              <td>{data.name}</td>
              <td>{data.collectionStatus ? "채집완료" : "미채집"}</td>
              <td>{data.donationStatus ? "기증" : "기증전"}</td>
            </tr>
          );
        })}
      </table>
    </SeafoodWrapper>
  );
};

export default Seafood;
