import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import CheckImg from '../../../ServiceStore/components/CheckDelivery/CheckImg'
import { clickedTitle } from '../recoil/LocationStore'
import HeadOfficeMap from './HeadOfficeMap'
import DistributionMap from './DistributionMap'
import HubCenterMap from './HubCenterMap'
import KeepingCenterMap from './KeepingCenterMap'

import SelectLocation from './SelectLocation'

export default function Location() {
  const [number, setNumber] = useRecoilState(clickedTitle)
  console.log(number)
  return (
    <Container>
      <SelectLocation />
      {number === 0 && <HeadOfficeMap />}
      {number === 1 && <DistributionMap />}
      {number === 2 && <HubCenterMap />}
      {number === 3 && <KeepingCenterMap />}
    </Container>
  )
}

const Container = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 300px;
`
