import styled from 'styled-components'
import MovieInfo from './MovieInfo'


export default function MovieContents() {
  return (
    <>
      <Container>
        <InfoWrapper>
          <MovieInfo />
        </InfoWrapper>
        <Movie>
          <iframe
            title="team-fresh video"
            width="100vh"
            height="100vh"
            src="//player.vimeo.com/video/700346662?quality=1080p&amp;autopause=0&amp;playsinline=1&amp;autoplay=1&amp;loop=1&amp;background=1"
            allow="autoplay"
          />
        </Movie>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1050px;
  padding: 0;
  overflow: hidden;
  display: flex;
  background-color: black;
`
const InfoWrapper = styled.div`
  position: absolute;
  width: 100%;
`
const Movie = styled.div`
  pointer-events: none;
  width: 100%;
  top: 50%;
  left: 50%;
  width: 2000px;
  height: 1000px;
  z-index: 1;
  opacity: 0.3;
  iframe {
    overflow-clip-margin: content-box
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`
