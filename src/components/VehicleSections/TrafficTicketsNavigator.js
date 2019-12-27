import React, { PureComponent, Fragment } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { Snackbar } from 'react-native-paper'
import NavigationRow from '../NavigationRow'
import { translate } from '../../i18n'
import { getTrafficTickets } from '../../api/endpoints'
import TrafficTicket from '../../models/TrafficTicket'
import { HTTP_NO_CONTENT, HTTP_SUCCESS } from '../../api/request'

class TrafficTicketsNavigator extends PureComponent {
  state = {
    trafficTickets: null,
    isLoading: true,
    error: false,
    errorVisibility: false,
  }

  _trafficTicketsResponseSuccess = trafficTicketsResponse => {
    if (trafficTicketsResponse?.data?.response?.length) {
      const trafficTickets = trafficTicketsResponse.data.response.map(ticketResponse => {
        return new TrafficTicket(ticketResponse)
      })
      this.setState({ trafficTickets, error: false })
    } else {
      this.setState({ trafficTickets: null, error: true, errorVisibility: true })
    }
  }

  _trafficTicketsHandler = trafficTicketsResponse => {
    if (trafficTicketsResponse?.data?.code === HTTP_SUCCESS) {
      this._trafficTicketsResponseSuccess(trafficTicketsResponse)
    } else if (trafficTicketsResponse?.data?.code === HTTP_NO_CONTENT) {
      this.setState({ trafficTickets: [], error: false })
    } else {
      this.setState({ trafficTickets: null, error: true, errorVisibility: true })
    }
  }

  _getNavigationDetailLabel = () => {
    if (this.state.isLoading) {
      return translate('loading')
    }

    if (this.state.error) {
      return translate('error')
    }

    if (this.state.trafficTickets?.length) {
      return this.state.trafficTickets.length
    }

    return translate('without_traffic_tickets')
  }

  _unSetErrorVisibility = () => {
    this.setState({ errorVisibility: false })
  }

  getTrafficTicketsInfo = async () => {
    if (this.props.plateText) {
      try {
        this.setState({ isLoading: true, error: false, errorVisibility: false })
        this._trafficTicketsHandler(await getTrafficTickets(this.props.plateText))
        this.setState({ isLoading: false })
      } catch (e) {
        this.setState({ isLoading: false, error: true, errorVisibility: true })
        console.log(e)
      }
    }
  }

  render() {
    return (
      <Fragment>
        <NavigationRow
          onPress={this.state.error ? null : () => null}
          iconName="gavel"
          iconColor="peru"
          navigationDetail={this._getNavigationDetailLabel()}
          text={translate('traffic_tickets')}
          isLoading={this.state.isLoading}
        />
        <Snackbar
          visible={this.state.errorVisibility}
          onDismiss={this._unSetErrorVisibility}
          style={styles.snackbar}>
          {translate('there_was_an_error')}
        </Snackbar>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: -Dimensions.get('window').height / 2.4,
  },
})

export default TrafficTicketsNavigator
