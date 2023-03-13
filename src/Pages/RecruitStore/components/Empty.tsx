import React from 'react'
import styled from 'styled-components'

export default function Empty() {
  return <Container>Empty</Container>
}
const Container = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 300px;
`
