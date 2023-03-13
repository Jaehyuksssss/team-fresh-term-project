import styled from 'styled-components'
export default function PointTitle() {
  return (
    <Introduce>
      <TitleContainer>
        <Title>팀프레시를 이끄는 힘</Title>
        <br />
        <TItleName>핵심역량</TItleName>
      </TitleContainer>
    </Introduce>
  )
}
const Introduce = styled.div`
  float: left;
  width: 460px;
  height: 286px;
  margin-top: 80px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 100px 0px;
  word-break: keep-all;
`
const Title = styled.span`
  font-weight: 300;
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-family: Pretendard;
  font-weight: 400;
  text-align: center;
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
