import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { SERVICE_INTRODUCTION } from '../../../../components/constant'
import { clickedSmallImg } from '../recoil/HomeStore'

export default function DetailInfo() {
  const [number, setNumber] = useRecoilState(clickedSmallImg)
  return (
    <>
      <Introduce>
        {SERVICE_INTRODUCTION[number].title.split('<br>').map((line) => {
          return (
            <Title key={line + 1 + Math.random()}>
              {line}
              <br />
            </Title>
          )
        })}
        <SubTitleWrapper>
          {SERVICE_INTRODUCTION[number].subtitle.split('<br>').map((line) => {
            return (
              <SubTitle key={line + 2 + Math.random()}>
                <span>{line}</span>
              </SubTitle>
            )
          })}
        </SubTitleWrapper>
      </Introduce>
    </>
  )
}
const Introduce = styled.div`
  float: left;
  width: 460px;
  height: 286px;
  margin-top: 80px;
`
const Title = styled.div`
  font-family: Pretendard;
  text-align: left;
  font-weight: 700;
  font-size: 35px;
  line-height: 45px;
  color: rgb(2, 32, 75);
`
const SubTitle = styled.div`
  span {
    font-family: Pretendard;
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: rgb(102, 102, 102);
  }
`
const SubTitleWrapper = styled.div`
  margin-top: 20px;
`
