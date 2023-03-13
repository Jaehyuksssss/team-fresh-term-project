import useMoveScroll from '../../components/hooks/useMoveScroll'
import Layout from '../../components/organism/Layout'
import TextInfo from '../HomeStore/components/TextInfo'
import CheckDelivery from './components/CheckDelivery'
import ServiceMain from './components/ServiceMain'
import ServiceProcess from './components/ServiceProcess'

export default function ServiceStore() {
  return (
    <Layout>
      <ServiceMain />
      <TextInfo />
      <ServiceProcess />
      <CheckDelivery />
    </Layout>
  )
}
