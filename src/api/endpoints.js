import Config from 'react-native-config'
import request from './request'

const POST = 'POST'
const GET = 'GET'
const PUT = 'PUT'
const DELETE = 'DELETE'

const getTrafficTickets = data => {
  return request({
    url: `${Config.INFRACTIONS_API}${data}`,
    method: GET,
  })
}

const getImpoundLots = data => {
  return request({
    url: `${Config.IMPOUND_LOT_API}${data}`,
    method: GET,
  })
}

const getMetroBusLines = () => {
  return request({
    url: `${Config.METROBUS_LINES_API}`,
    method: GET,
  })
}

const getMetrobusStationSchedule = (id, maxBuses = 6) => {
  return request({
    url: `${Config.METROBUS_LINE_SCHEDULE_API}`,
    method: GET,
    params: { id, num_metrobuses: maxBuses },
  })
}

const getEcobiciStations = () => {
  return request({
    url: `${Config.ECOBICI_API}`,
    method: GET,
  })
}

export {
  getTrafficTickets,
  getImpoundLots,
  getMetroBusLines,
  getMetrobusStationSchedule,
  getEcobiciStations,
}
