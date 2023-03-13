import { useRecoilState } from 'recoil'

import { SERVICE_INTRODUCTION } from '../../../../components/constant'
import { clickedSmallImg } from '../recoil/HomeStore'

export default function DetailThumbnail() {
  const [number, setNumber] = useRecoilState(clickedSmallImg)
  return (
    <>
      <div>
        <img src={SERVICE_INTRODUCTION[number].thumbnailImg} alt="thumbnail" />
      </div>
    </>
  )
}
