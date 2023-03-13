import { ReactNode, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { flex } from '../../../styles'
import { HandleScroll, Visible } from '../../recoil/HandleScroll'
import Footer from '../Footer'
import Header from '../Header'

interface ILayoutProps {
  children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  const [position, setPosition] = useRecoilState(HandleScroll)
  const [visible, setVisible] = useRecoilState(Visible)

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset
      setVisible(position > moving)
      setPosition(moving)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position, setPosition, setVisible])

  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

const Body = styled.main`
  width: 100%;
`
