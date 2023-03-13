import React from 'react'
import styled from 'styled-components'
import { FooterContentsParams } from '../../constant'

interface Props {
  data: FooterContentsParams
}

const FooterList = ({ data }: Props) => {
  return (
    <>
      <List>{data.content}</List>
    </>
  )
}

export default FooterList

const List = styled.li`
  display: inline-block;
  margin: 0 30px 0 0;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  color: #ccc;
`
