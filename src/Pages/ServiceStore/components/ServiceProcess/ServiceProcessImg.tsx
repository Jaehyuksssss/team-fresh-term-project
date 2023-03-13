import styled from 'styled-components'

export default function ServiceProcessImg() {
  return (
    <Container>
      <Img src="/images/process.png" />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
overflow-clip-margin: content-box;
overflow: clip;
}
`
