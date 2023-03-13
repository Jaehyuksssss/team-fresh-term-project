import DetailSmallImg from './DetailSmallImg'
import styled from 'styled-components'

import DetailThumbnail from './DetailThumbnail'
import DetailBtn from './DetailBtn'
import DetailInfo from './DetailInfo'

export default function ServiceIntroduction() {
  return (
    <>
      <SmallImgContainer>
        <TitleContainer>
          <Title>Serivce Introduction</Title>
          <br />
          <TItleName>서비스소개</TItleName>
        </TitleContainer>
        <SmallImgWrapper>
          <ClickImg>
            <SmallImg>
              <DetailSmallImg />
            </SmallImg>
            <SmallImgContainer>
              <DetailInfo />
              <DetailBtn />
            </SmallImgContainer>
          </ClickImg>
          <ThumbnailWrapper>
            <DetailThumbnail />
          </ThumbnailWrapper>
        </SmallImgWrapper>
      </SmallImgContainer>
    </>
  )
}
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 100px 0px;
  word-break: keep-all;
`
const TItleName = styled.div`
  width: 100%;
  font-family: Pretendard;
  text-align: center;
  font-weight: 700;
  font-size: 55px;
  line-height: 45px;
  color: rgb(0, 0, 0);
`
const SmallImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const SmallImg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
`
const Title = styled.span`
  font-weight: 300;
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-family: Pretendard;
  font-weight: 400;
  text-align: center;
`

const SmallImgWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 1150px;
  justify-content: center;
`
const ThumbnailWrapper = styled.div`
  display: flex;
`
const ClickImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
