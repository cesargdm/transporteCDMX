import theme from '../styles'
import { translate } from '../i18n'

const ELECTRIC_TYPE = 'ELECTRIC_BIKE'
const FOURTH_GENERATION_TYPE = 'TPV'
const OPEN_STATUS = 'OPN'
const CLOSED_STATUS = 'CLS'
const MINIMUM_BIKE_COUNT = 5

export default class EcobiciStation {
  constructor(ecobiciResponse) {
    this._id = ecobiciResponse.id
    this._name = ecobiciResponse.name
    this._address = ecobiciResponse.address
    this._addressNumber = ecobiciResponse.addressNumber
    this._zipCode = ecobiciResponse.zipCode
    this._neighborhood = ecobiciResponse.districtName
    this._coordinates = ecobiciResponse.location
    this._stationType = ecobiciResponse.stationType
    this._availability = ecobiciResponse.availability || {}
    this._nearbyStations = ecobiciResponse.nearbyStations
    this._neighborhoodCode = ecobiciResponse.districtCode
    this._status = ecobiciResponse.status
    this._pinColor = theme.colors.mediumGray
  }

  get id() {
    return this._id
  }

  get name() {
    return this.formatName()
  }

  get address() {
    return this.formatAddress()
  }

  get availability() {
    return this.formatAvailability()
  }

  get stationType() {
    return this.formatStationType()
  }

  get coordinates() {
    return this.formatCoordinates()
  }

  get status() {
    return this.formatStatus()
  }

  get pinColor() {
    return this.formatPinColor()
  }

  formatName() {
    return this._name
  }

  formatAddress() {
    return [this._address, this._addressNumber, this._neighborhood, this._zipCode]
      .filter(el => el)
      .join(',')
  }

  formatAvailability() {
    return {
      bikes: this._availability.bikes,
      slots: this._availability.slots,
    }
  }

  formatStationType() {
    if (this._stationType === ELECTRIC_TYPE) {
      return translate('electric_bike_station')
    }
    if (this._stationType.includes(FOURTH_GENERATION_TYPE)) {
      return translate('fourth_gen_bike_station')
    }
    return translate('normal_bike_station')
  }

  formatCoordinates() {
    return {
      latitude: this._coordinates.lat,
      longitude: this._coordinates.lon,
    }
  }

  formatStatus() {
    return this._status === OPEN_STATUS
      ? `${translate('station_status')}: ${translate('open')}`
      : `${translate('station_status')}: ${translate('closed')}`
  }

  formatPinColor() {
    if (this._status === CLOSED_STATUS) {
      return theme.colors.mediumGray
    }

    if (this._availability.bikes === 0 || this._availability.slots === 0) {
      return theme.colors.danger
    }

    if (
      this._availability.bikes <= MINIMUM_BIKE_COUNT ||
      this._availability.slots <= MINIMUM_BIKE_COUNT
    ) {
      return theme.colors.warning
    }

    if (
      this._availability.bikes > MINIMUM_BIKE_COUNT ||
      this._availability.slots > MINIMUM_BIKE_COUNT
    ) {
      return this._stationType === ELECTRIC_TYPE ? theme.colors.accent : theme.colors.success
    }

    return theme.colors.mediumGray
  }
}
