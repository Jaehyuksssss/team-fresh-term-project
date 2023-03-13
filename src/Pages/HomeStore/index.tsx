import Layout from '../../components/organism/Layout'
import MainLink from './components/MainLink'
import MainPoint from './components/MainPoint'
import MovieContents from './components/MovieContents'
import ServiceIntroduction from './components/ServiceIntroduction'
import Slide from './components/Slide'
import TextInfo from './components/TextInfo'

export default function HomeStore() {
  return (
    <Layout>
      <Slide />
      <TextInfo />
      <MovieContents />
      <ServiceIntroduction />
      <MainPoint />
      <MainLink />
    </Layout>
  )
}
