import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Button, Caption, Card, Headline, Paragraph } from 'react-native-paper'
import MetrobusModel from '../models/Metrobus'
import theme, { sharedStyles } from '../styles'
import { translate } from '../i18n'

const ONE_KM = 1000

class MetrobusSchedule extends PureComponent {
  componentDidMount() {
    this.props.navigation.setOptions({ headerTintColor: this.props.lineColor })
  }

  _onViewOnMapPressed = () => {
    this.props.navigation.navigate('Metrobus Map', {
      metrobus: this.props.metrobus,
      lineColor: this.props.lineColor,
    })
  }

  render() {
    const { metrobus, lineColor } = this.props
    return (
      <Card style={sharedStyles.mb3}>
        <Card.Content>
          <View style={[sharedStyles.flex1, sharedStyles.spaceBetween, sharedStyles.flexDRow]}>
            <Paragraph style={[styles.section, { color: lineColor }]}>{metrobus.eta}</Paragraph>
            <Caption>{`${translate('number')}: ${metrobus.id}`}</Caption>
          </View>
          <Headline>{metrobus.name}</Headline>
          <Paragraph>{`${translate('distance')}: ${(parseFloat(metrobus.distance) / ONE_KM).toFixed(
            2,
          )} KM`}</Paragraph>
        </Card.Content>
        <Card.Actions style={sharedStyles.flexEnd}>
          <Button color={lineColor} onPress={this._onViewOnMapPressed}>
            {translate('metrobus_location')}
          </Button>
        </Card.Actions>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    color: theme.colors.accent,
  },
})

MetrobusSchedule.propTypes = {
  metrobus: PropTypes.instanceOf(MetrobusModel),
  lineColor: PropTypes.string,
  navigation: PropTypes.object,
}

export default MetrobusSchedule
