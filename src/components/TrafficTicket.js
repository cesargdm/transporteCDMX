import React from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import PropTypes from 'prop-types'
import { Button, Card, Caption, Paragraph } from 'react-native-paper'
import TrafficTicketModel from '../models/TrafficTicket'
import { translate } from '../i18n'
import theme, { sharedStyles } from '../styles'

// TODO: This sucks. We need to find a better solution
const PAYMENT_BASE_URL = 'https://www.tramites.cdmx.gob.mx/infracciones/?placa='

const styles = StyleSheet.create({
  section: {
    color: theme.colors.accent,
  },
})

const TrafficTicket = props => {
  const { ticket } = props

  const handlePaymentPressed = () => {
    Linking.openURL(PAYMENT_BASE_URL + ticket.carPlate)
  }

  return (
    <Card style={[sharedStyles.mx3, sharedStyles.mb3]}>
      <Card.Content>
        <View style={[sharedStyles.flex1, sharedStyles.spaceBetween, sharedStyles.flexDRow]}>
          <Caption>{`${translate('folio')}: ${ticket.folio}`}</Caption>
          <Caption>{ticket.formattedDate}</Caption>
        </View>
        <View style={sharedStyles.mt2}>
          <Paragraph style={styles.section}>{translate('description')}</Paragraph>
          <Paragraph>{ticket.causeDetail}</Paragraph>
        </View>
        <View style={sharedStyles.mt2}>
          <Paragraph style={styles.section}>{translate('fine')}</Paragraph>
          <Paragraph>{`$${ticket.fine} MXN`}</Paragraph>
        </View>
      </Card.Content>
      <Card.Actions style={sharedStyles.flexEnd}>
        <Button color={theme.colors.accent} onPress={handlePaymentPressed}>
          {translate('pay')}
        </Button>
      </Card.Actions>
    </Card>
  )
}

TrafficTicket.propTypes = {
  ticket: PropTypes.instanceOf(TrafficTicketModel),
}

TrafficTicket.defaultProps = {
  ticket: {},
}

export default TrafficTicket
