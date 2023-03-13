import { RecoilState, useRecoilState } from 'recoil'
import styled from 'styled-components'
import { KaKaoMapTitle, LocationParams } from '../../../../components/constant'
import { clickedTitle } from '../recoil/LocationStore'
import { MouseEvent } from 'react'

export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>
export default function SelectLocation() {
  const [number, setNumber] = useRecoilState(clickedTitle)
  console.log(number)
  const clickHandler = (e: CustomMouseEvent, numbers: number) => {
    setNumber(numbers)
  }

  return (
    <Container>
      {KaKaoMapTitle.map((v: LocationParams) => {
        return (
          <TitleWrapper
            key={v.subTitle}
            onClick={(e) => clickHandler(e, v.id)}
            style={{
              color: number === v.id ? '#000' : '#999',
            }}
          >
            {v.title}
          </TitleWrapper>
        )
      })}
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 50px;
  line-height: 65px;
  color: rgb(0, 0, 0);
  width: 500px;
`
const TitleWrapper = styled.div`
  position: relative;
  float: left;
  width: 200px;
  font-family: Pretendard;
  text-align: left;
  font-size: 28px;
  font-weight: 700;
  line-height: 25px;

  margin: 15px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
`
