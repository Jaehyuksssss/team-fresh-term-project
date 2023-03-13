import styled from 'styled-components'

import { useRecoilState } from 'recoil'

import {
  SERVICE_INTRODUCTION,
  IntroductionParams,
} from '../../../../components/constant'
import { clickedSmallImg } from '../recoil/HomeStore'
import { MouseEvent } from 'react'
export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>

export default function DetailSmallImg() {
  const [number, setNumber] = useRecoilState(clickedSmallImg)

  const clickHandler = (e: CustomMouseEvent, numbers: number) => {
    setNumber(numbers)
  }
  return (
    <>
      {SERVICE_INTRODUCTION.map((info: IntroductionParams) => {
        return (
          <SmallImgWrapper
            style={{
              backgroundColor: number === info.id ? '#02204B' : '#EBECEB',
            }}
            key={info.id + Math.random()}
            onClick={(e) => clickHandler(e, info.id)}
          >
            <SmallImgWrapper>
              <Img src={info.smallImg} alt="img" />
              <span
                style={{
                  color: number === info.id ? 'white' : 'black',
                }}
              >
                {info.content}
              </span>
            </SmallImgWrapper>
          </SmallImgWrapper>
        )
      })}
    </>
  )
}

const Img = styled.img`
  display: flex;
  width: 60px;
  height: 60px;
`

const SmallImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  width: 100%;
  height: 130px;
`
