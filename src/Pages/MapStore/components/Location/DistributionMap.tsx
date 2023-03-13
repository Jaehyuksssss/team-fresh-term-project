import { useEffect } from 'react'
import styled from 'styled-components'

export default function DistributionMap() {
  useEffect(() => {
    let container = document.getElementById('map')

    let options = {
      center: new window.kakao.maps.LatLng(37.523174, 127.191053),
      level: 3,
    }

    let map = new window.kakao.maps.Map(container, options)
    map.setDraggable(false)
    console.log(map)
    let zoomControl = new window.kakao.maps.ZoomControl()
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)
    let markerPosition = new window.kakao.maps.LatLng(37.523174, 127.191057)
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
  }, [])
  return (
    <Container>
      <div id="map" style={{ width: '800px', height: '500px' }}></div>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
