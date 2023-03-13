import React from 'react'
import styled from 'styled-components'
import { LINK_LIST, MainLinkParams } from '../../../../components/constant'

import MainLinkList from './MainLinkList'

export default function MainLink() {
  return (
    <Section>
      <Contents>
        {LINK_LIST.map((link: MainLinkParams) => {
          return <MainLinkList key={link.id} data={link} />
        })}
      </Contents>
    </Section>
  )
}

const Section = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
`

const Contents = styled.div`
  /* -webkit-transition: all 0.2s ease; */
  box-sizing: border-box;
  width: 1210px;
  margin: 0 auto;
  padding: 0 30px;
`
