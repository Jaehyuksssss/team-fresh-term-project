import styled from 'styled-components'

const MainImageText = () => {
  return (
    <MainTextWrap>
      <MainImageTitle>
        대한민국 no.1
        <br />
        Cold-chain platform
      </MainImageTitle>
      <MainImageComment>
        팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.
      </MainImageComment>
    </MainTextWrap>
  )
}

export default MainImageText

const MainTextWrap = styled.div`
  position: relative;
  left: 15%;
  bottom: 100%;
  z-index: 1;
  margin-bottom: 10%;
`
const MainImageTitle = styled.div`
  clear: both;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 55px;
  line-height: 65px;
  color: #fff;
  margin: 20px 0 30px;
`
const MainImageComment = styled.div`
  clear: both;
  font-family: 'Pretendard';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
`
