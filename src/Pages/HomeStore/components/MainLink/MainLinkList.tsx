import React from 'react'
import styled from 'styled-components'
import { MainLinkParams } from '../../../../components/constant'

interface Props {
  data: MainLinkParams
}

export default function MainLinkList({ data }: Props) {
  return (
    <>
      <ListContents>
        <Img src={data.src} />
      </ListContents>
    </>
  )
}

const ListContents = styled.div`
  position: relative;
  float: left;
  width: 30.33%;
  height: 500px;
  margin: 0 1.5%;
  border-radius: 15px;
  background: #333;
  overflow: hidden;
  cursor: pointer;
`

const Img = styled.img`
  background-size: cover;
  opacity: 0.4;
  :hover {
    opacity: 100;
  }
`
