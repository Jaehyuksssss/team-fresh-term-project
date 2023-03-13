import styled from 'styled-components'
import { MovieImageParams } from '../../../../components/constant'

export default function MovieImage({ src, content }: MovieImageParams) {
  return (
    <>
      <MovieImgWrapper>
        <Img src={src} alt="alt" />
        <span>{content}</span>
      </MovieImgWrapper>
    </>
  )
}
const MovieImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
  display: flex;
  width: 80px;
`
