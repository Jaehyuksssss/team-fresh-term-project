import { any } from 'prop-types'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import {
  OpenDaumPostCode,
  responseCode,
  SearchResult,
} from '../../../../Pages/ServiceStore/components/recoil/ServiceStore'

type postProps = {
  zonecode: number
}
export default function DeliveryMore() {
  const [openPostcode, setOpenPostcode] = useRecoilState(OpenDaumPostCode)
  const [responseSuccess, setResponseSucess] = useRecoilState(responseCode)
  const [searchResult, setsearchResult] = useRecoilState(SearchResult)
  console.log(openPostcode)
  console.log(searchResult)
  const handleSubmitBtn = () => {
    setOpenPostcode((current) => !current)
  }
  console.log(openPostcode)

  const handleCloseBtn = () => {
    setOpenPostcode((current) => !current)
    if (searchResult !== null) {
      // return setsearchResult(null)
    }
  }

  return (
    <>
      {responseSuccess === 200 && !openPostcode ? (
        <Wrapper>
          <DeliveryHeader
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <button
              onClick={() => handleCloseBtn()}
              style={{ fontSize: '30px', textAlign: 'center' }}
            >
              x
            </button>
          </DeliveryHeader>
          <DeliveryContainer>
            <DeliveryBody>
              <DeliveryTitle>당일배송 불가,</DeliveryTitle>
              <DeliveryContents>새벽배송 가능 지역입니다. </DeliveryContents>
            </DeliveryBody>
            <InputWrapper1>{searchResult.zonecode}</InputWrapper1>
            <InputWrapper2>{searchResult.address}</InputWrapper2>
            <Button onClick={handleSubmitBtn}>다른 주소 검색하기</Button>
          </DeliveryContainer>
        </Wrapper>
      ) : null}
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  background: white;
  border: 1px solid grey;
  width: 450px;
  height: 100%;
`
const Button = styled.button`
  width: 390px;
  margin: 30px auto;
  height: 45px;
  padding: 0;
  color: #fff;
  /* margin: 0 auto; */
  display: block;
  text-align: center;
  line-height: 40px;
  border-radius: 8px;
  box-shadow: none;
  background-color: #02204a;
  border-color: #02204a;
`
const DeliveryTitle = styled.div`
  vertical-align: bottom;
  margin: 10px 0px 10px 20px;
  font-size: 1.9em;
  color: rgb(255, 95, 133);
`
const DeliveryContents = styled.div`
  vertical-align: bottom;
  margin: 10px 0px 10px 20px;
  font-size: 1.9em;
  color: rgb(2, 32, 74);
`

const DeliveryContainer = styled.div`
  /* position: absolute; */
  height: 100%;
`
const DeliveryHeader = styled.div`
  width: 400px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  line-height: 50px;
`
const DeliveryBody = styled.div`
  width: 450px;
  position: relative;
`
const InputWrapper1 = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid #a3a3a3;
  margin: 30px 20px 0;
  line-height: 35px;
  padding: 0 0 0 10px;
`
const InputWrapper2 = styled.div`
  width: 390px;
  margin: 10px 20px;
  height: 40px;
  border: 1px solid #a3a3a3;
  line-height: 40px;
  padding: 0 0 0 10px;
`
