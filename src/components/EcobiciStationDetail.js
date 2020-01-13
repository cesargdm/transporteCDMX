import React, { memo } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Button, Title } from 'react-native-paper'
import EcobiciStationModel from '../models/EcobiciStation'
import theme, { sharedStyles } from '../styles'
import { translate } from '../i18n'

const EcobiciStationDetail = ({ station, fetchEcobiciStations, isLoading }) => {
  return (
    <View style={sharedStyles.p3}>
      <Title style={sharedStyles.textAlignCenter}>{station.status}</Title>
      <Title style={[sharedStyles.textAlignCenter, theme.colors.colorSecondary, sharedStyles.mt3]}>
        {station.stationType}
      </Title>
      <View style={[sharedStyles.flexDRow, sharedStyles.mt3]}>
        <View
          style={[sharedStyles.flex1, sharedStyles.flexDRow, sharedStyles.justifyContentCenter]}>
          <Title>{`${translate('bikes')}: ${station.availability?.bikes}`}</Title>
        </View>
        <View
          style={[sharedStyles.flex1, sharedStyles.flexDRow, sharedStyles.justifyContentCenter]}>
          <Title>{`${translate('slots')}: ${station.availability?.slots}`}</Title>
        </View>
      </View>
      <Button
        theme={theme}
        mode="text"
        style={sharedStyles.mt3}
        labelStyle={theme.colors.colorSecondary}
        onPress={fetchEcobiciStations}>
        {isLoading ? translate('loading_stations') : translate('reload_information')}
      </Button>
    </View>
  )
}

EcobiciStationDetail.propTypes = {
  isLoading: PropTypes.bool,
  fetchEcobiciStations: PropTypes.func.isRequired,
  station: PropTypes.instanceOf(EcobiciStationModel),
}

export default memo(EcobiciStationDetail)
