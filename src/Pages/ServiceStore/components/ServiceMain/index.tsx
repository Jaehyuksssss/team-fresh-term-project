import styled from 'styled-components'
import ServiceTitle from './ServiceTitle'

export default function ServiceMain() {
  return (
    <>
      <ServiceWrapper>
        <Img src="/images/service01.png" alt="img" />
        <ServiceTitle />
      </ServiceWrapper>
    </>
  )
}
const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`
