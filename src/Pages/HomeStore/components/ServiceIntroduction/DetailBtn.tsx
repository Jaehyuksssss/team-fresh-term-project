import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { SERVICE_INTRODUCTION } from '../../../../components/constant'
import { clickedSmallImg } from '../recoil/HomeStore'

export default function DetailBtn() {
  const [number, setNumber] = useRecoilState(clickedSmallImg)
  return (
    <>
      <Link to={SERVICE_INTRODUCTION[number].path}>
        <ImgBtn src="/images/arrow.png" alt=" asdasd" />
      </Link>
    </>
  )
}

const ImgBtn = styled.img`
  width: 48px;
  height: 12px;
`
