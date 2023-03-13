import styled from 'styled-components'
import PointContents from './PointContents'
import PointTitle from './PointTitle'

export default function MainPoint() {
  return (
    <SmallImgContainer>
      <div>
        <PointTitle />
      </div>
      <div>
        <PointContents />
      </div>
    </SmallImgContainer>
  )
}

const SmallImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
