import { useRecoilState } from "recoil";
import styled from "styled-components";
import DaumPostModal from "../../../../components/atoms/Modal/PopUp";
import DeliveryMore from "../../../../components/atoms/Modal/PopUp/DeliveryMore";
import { OpenDaumPostCode, responseCode } from "../recoil/ServiceStore";

export default function CheckDeliveryInfo() {
  return (
    <TitleWrapper>
      <Title1>
        <div>
          <br />
          <Span>새벽배송 가능지역을</Span>
        </div>
        확인해보세요
      </Title1>
      <SearchButton>
        <DaumPostModal />
      </SearchButton>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 50px;
  line-height: 65px;
  color: rgb(0, 0, 0);
`;
const Title1 = styled.div`
  width: 430px;
  margin-bottom: 3rem;
`;
const Span = styled.div`
  font-weight: 700;
`;

const SearchButton = styled.div`
  display: flex;
  font-size: 30px;
`;
