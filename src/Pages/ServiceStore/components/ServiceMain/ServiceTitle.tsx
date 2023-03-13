import styled from 'styled-components'

export default function ServiceTitle() {
  return (
    <TitleWrapper>
      <Title>새벽배송, 약속한 시간에</Title>
      <Title>정확하고 안전하게 배송합니다</Title>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  width: 100%;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 55px;
  line-height: 65px;
  color: rgb(255, 255, 255);
  z-index: 2;
`

const Title = styled.span``
