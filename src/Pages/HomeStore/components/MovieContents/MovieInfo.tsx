import styled from 'styled-components'
import { MOVIE_IMAGE, MovieImageParams } from '../../../../components/constant'

import MovieImage from './MovieImage'

export default function MovieInfo() {
  return (
    <>
      <MovieTitleWrapper>
        <MovieSmallTitle>콜드체인 원스톱 솔루션으로 한눈에</MovieSmallTitle>
        <MovieTitle>신선상품의 유통과정</MovieTitle>
        <MovieImgWrapper>
          <MovieImgcontent>
            {MOVIE_IMAGE.map((src: MovieImageParams) => {
              return (
                <>
                  {src.id < 4 ? (
                    <MovieImage
                      key={src.src}
                      src={src.src}
                      id={src.id}
                      content={src.content}
                    />
                  ) : null}
                </>
              )
            })}
          </MovieImgcontent>
          <MovieImgcontent>
            {MOVIE_IMAGE.map((src: MovieImageParams) => {
              return (
                <>
                  {src.id >= 4 ? (
                    <MovieImage
                      key={src.src}
                      src={src.src}
                      id={src.id}
                      content={src.content}
                    />
                  ) : null}
                </>
              )
            })}
          </MovieImgcontent>
        </MovieImgWrapper>
      </MovieTitleWrapper>
    </>
  )
}
const MovieImgcontent = styled.div`
  display: flex;
  justify-content: space-between;
`
const MovieImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 560px;
  justify-content: space-around;
`
const MovieTitleWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 300px;
  color: rgb(255, 255, 255);
  z-index: 2;
`
const MovieTitle = styled.div`
  font-weight: 300;
  font-size: 55px;
  font-weight: 700;
  font-family: Pretendard;
`
const MovieSmallTitle = styled.div`
  font-size: 20px;
`
