import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { POINT_IMAGE } from '../../../../components/constant'
import { pointImg } from '../recoil/HomeStore'
import { MouseEvent } from 'react'

type CustomMouseEvent = MouseEvent<HTMLElement>
export default function PointContents() {
  const [number, setNumber] = useRecoilState(pointImg)
  const hoverHandler = (e: CustomMouseEvent, numbers: number) => {
    setNumber(numbers)
  }

  return (
    <>
      <ImageContainer>
        {POINT_IMAGE.map((v) => {
          console.log(v)
          return (
            <Introduce key={v.content}>
              <Introduce key={v.content}>
                {v.id === number ? (
                  <Container>
                    <Img
                      onMouseEnter={(e) => hoverHandler(e, v.id)}
                      src={v.src}
                      alt="img"
                      style={{
                        width: '600px',
                        transition: 'all 0.4s ease 0s',
                      }}
                    />
                    <ActiveWrapper
                      style={{
                        width: '500px',
                        transition: 'all 0.4s ease 0s',
                        position: 'absolute',
                        borderBottom: '2px solid white',
                        overflow: 'hidden',
                        marginBottom: '30px',
                        marginLeft: '10px',
                      }}
                    >
                      {v.title}
                    </ActiveWrapper>
                  </Container>
                ) : (
                  <Container>
                    <Img
                      onMouseEnter={(e) => hoverHandler(e, v.id)}
                      src={v.src}
                      alt="img"
                      style={{
                        width: '200px',
                        opacity: '0.2',
                        // background: 'black',
                        transition: 'all 0.4s ease 0s',
                      }}
                    />
                    <TitleWrapper
                      style={{
                        transition: 'all 0.4s ease 0s',
                        position: 'absolute',
                        marginBottom: '30px',
                        marginLeft: '10px',
                      }}
                    >
                      {v.title}
                    </TitleWrapper>
                  </Container>
                )}
              </Introduce>
            </Introduce>
          )
        })}
      </ImageContainer>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`
const ActiveWrapper = styled.div`
  display: flex;
  width: 50%;
  z-index: 5000;
  font-size: 20px;
  color: white;
`
const TitleWrapper = styled.div`
  // position: absolute;
  display: flex;
  z-index: 5000;
  font-size: 20px;
  color: white;
`
const ImageContainer = styled.div`
  width: 1200px;
  display: flex;
  transition: all 0.4s ease 0s;
  box-sizing: border-box;
  background: black;
  cursor: pointer;
  overflow: hidden;
`
const Introduce = styled.div`
  display: flex;
  width: 100%;
`

const Img = styled.img`
  display: flex;
  // width: 629px;
  position: relative;
  float: left;
  width: 14.7%;
  height: 500px;
  border: 2.5px solid white;
  overflow: hidden;
`
