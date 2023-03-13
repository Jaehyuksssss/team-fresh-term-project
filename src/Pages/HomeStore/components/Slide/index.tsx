import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DATA_SLIDER } from '../../../../components/constant'

import MainImageText from './MainImageText'

interface Slider {
  id: number
  index: number
  srcImg: string
}

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const len = DATA_SLIDER.length

  const moveDot = (index: React.SetStateAction<number>) => {
    setSlideIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex === len ? 1 : slideIndex + 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <SliderImg>
      {DATA_SLIDER.map(({ id, srcImg }) => {
        return (
          <div
            key={id}
            className={slideIndex === id ? 'slide-active-anim' : 'slide'}
          >
            <img src={srcImg} alt="" />
          </div>
        )
      })}
      <ContextBtn>
        <MainImageText />
        <SlidePagination>
          {Array.from({ length: 3 }).map((item, index) => (
            <button
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot-active' : 'dot'}
            ></button>
          ))}
        </SlidePagination>
      </ContextBtn>
    </SliderImg>
  )
}

const ContextBtn = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
  z-index: 10;
`
const SliderImg = styled.div`
  display: flex;
  position: relative;
  margin:0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;

    & .slide-active-anim{
            opacity: 1;
    }
    & .slide{
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity ease-in-out 0.4s;
        animation: slide-up 1s ease 0.5s;
    }
  }
`
const SlidePagination = styled.div`
  button {
    background-color: white;
    cursor: pointer;
    position: relative;
    margin-right: 5px;
    left: 15%;
    z-index: 1;
    width: 45px;
    height: 7px;
    font-size: 0;
    float: left;
    overflow: hidden;
    border-radius: 100px;

    :hover {
      background: #005cdf;
    }
  }

  & .dot-active {
    background: #005cdf;
  }
`
