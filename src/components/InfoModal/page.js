"use client";
import nextConfig from "@config";
import InfoModalWrapper from "./infoModal.style";

const InfoModal = ({ clickCancle, infoData }) => {
  console.log("infoData22222: ", infoData);
  return (
    <InfoModalWrapper onClick={() => clickCancle(infoData)}>
      <div key={infoData.name} class="dataInfo">
        {infoData.name}

        <img
          className="seafood__table--img"
          src={`${nextConfig.basePath}` + infoData.src}
          alt={infoData.name}
        />
      </div>
    </InfoModalWrapper>
  );
};

export default InfoModal;
