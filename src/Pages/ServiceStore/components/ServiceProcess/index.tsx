import styled from 'styled-components'
import ProcessTitle from './ProcessTitle'
import ServiceProcessImg from './ServiceProcessImg'

export default function ServiceProcess() {
  return (
    <>
      <ProcessContainer>
        <ProcessWrapper>
          <ProcessBox>
            <ProcessTitle />
            <ServiceProcessImg />
          </ProcessBox>
        </ProcessWrapper>
      </ProcessContainer>
    </>
  )
}
const ProcessContainer = styled.div`
  background-image: url('/images/process_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  // background: rgba(255, 255, 255, 0.9);
  // padding: 150px 0px;
`
const ProcessWrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
`
const ProcessBox = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 0px 30px;
  box-sizing: border-box;
`
