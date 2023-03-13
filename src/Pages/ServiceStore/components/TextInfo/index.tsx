import React from 'react'
import styled from 'styled-components'

export default function TextInfo() {
  return (
    <Introduce>
      <Title1>Early - Morning Deliveries</Title1>
      <br />
      <Title2>새벽 배송</Title2>
      <Title3>
        벽 배송 고객사의 상품을 오전 7시까지 배송하는 서비스로 <br />
        ‘당일입고‘ 및 ‘당일출고’를 원칙으로 합니다.
      </Title3>
      <br />
      <Title3>
        배송매니저들은 팀프레시 배송매니저 APP을 사용하여 <br />
        입고부터 배송까지 체계적으로 진행하고 있습니다.
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
