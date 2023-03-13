import styled from 'styled-components'
import DeliveryMore from '../../../../components/atoms/Modal/PopUp/DeliveryMore'
import CheckDeliveryInfo from './CheckDeliveryInfo'
import CheckImg from './CheckImg'

export default function CheckDelivery() {
  return (
    <CheckWrapper>
      <DeliveryMore />
      <CheckDeliveryInfo />
      <CheckImg />
    </CheckWrapper>
  )
}
const CheckWrapper = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 300px;
`
