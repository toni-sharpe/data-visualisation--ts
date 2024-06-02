import { API_DOMAIN } from 'util/Constant/SiteConstantList'

const USE_API = false

interface BaseApiCallType {
  endPoint: string;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

function baseApiCall ({
  endPoint,
  setData,
}: BaseApiCallType) {
  return () => {
    const cdnUrl = 'https://data-visualisation--cdn.pages.dev'

    async function getData() {
      if (USE_API) {
        const data = await fetch(`${API_DOMAIN}${endPoint}`)
        const dataJson = await data.json()
        setData(dataJson)
      } else if (endPoint === 'WorldMap') {
        const worldMapDataFetch = await fetch(`${cdnUrl}/WorldMapData.min.json`)
        const worldBorderListFetch = await fetch(`${cdnUrl}/WorldBorderList.min.json`)
        const worldMapData = await worldMapDataFetch.json()
        const worldBorderList = await worldBorderListFetch.json()
        const data = {
          ...worldMapData,
          worldBorderList,
        }
        if (setData) {
          setData(data)
        } else {
          return data
        }
      } else if (endPoint !== '' && endPoint !== 'Home') {
        const realFullDataFetch = await fetch(`${cdnUrl}/RealFullData.min.json`)
        const realFullData = await realFullDataFetch.json()
        setData(realFullData.data)
      }
    }
    getData()
  }
}

export default baseApiCall
