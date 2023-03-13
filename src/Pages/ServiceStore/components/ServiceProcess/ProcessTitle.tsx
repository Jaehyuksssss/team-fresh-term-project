import styled from 'styled-components'

export default function ProcessTitle() {
  return (
    <Introduce>
      <Title1>Process</Title1>
      <br />
      <Title2>프로세스</Title2>
      <Title3>
        당일 입고 및 출고를 통해 재고 부담을 감소시켰으며, <br />
        여러 고객사 물량을 크로스 도킹으로 배송하는 효율적인 배송시스템으로
        운영하고 있습니다.
      </Title3>
    </Introduce>
  )
}
const Introduce = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 150px 0px 200px;
`

const Title1 = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 30px;
  line-height: 25px;
  color: rgb(0, 0, 0);
  margin: 0px 0px 30px;
`

const Title2 = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 55px;
  line-height: 65px;
  color: rgb(0, 0, 0);
  margin: 0px 0px 30px;
`

const Title3 = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: rgb(0, 0, 0);
`
