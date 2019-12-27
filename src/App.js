import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import React, { PureComponent } from 'react'
import { PixelRatio } from 'react-native'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DEVICE_HAS_NOTCH } from './utils/device'
import Transit from './screens/Transit'
import Ecobici from './screens/Ecobici'
import Vehicles from './screens/Vehicles'
import Acknowledgments from './screens/Acknowledgments'
import { RNLocalize, translate, setI18nConfig } from './i18n'
import theme from './styles'

const iconSize = 18

enableScreens()
const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const commonStackOptions = {
  headerLargeTitle: PixelRatio.get() >= 3 || DEVICE_HAS_NOTCH,
  headerTintColor: theme.colors.accent,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
}

const stackOptions = title => ({
  ...commonStackOptions,
  title: title,
})

const tabOptions = (tabName, iconName) => {
  return {
    tabBarLabel: tabName,
    tabBarIcon: ({ color }) => <Icon name={iconName} size={iconSize} color={color} solid />,
  }
}

const TransitStack = () => {
  return (
    <Stack.Navigator initialRouteName="Transit">
      <Stack.Screen
        name="Transit"
        component={Transit}
        options={stackOptions(translate('transit_cdmx'))}
      />
    </Stack.Navigator>
  )
}

const EcobiciStack = () => {
  return (
    <Stack.Navigator initialRouteName="Ecobici">
      <Stack.Screen
        name="Ecobici"
        component={Ecobici}
        options={stackOptions(translate('ecobici'))}
      />
    </Stack.Navigator>
  )
}

const VehiclesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Vehicles">
      <Stack.Screen
        name="Vehicles"
        component={Vehicles}
        options={stackOptions(translate('vehicles'))}
      />
    </Stack.Navigator>
  )
}

const SupportUsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Acknowledgments">
      <Stack.Screen
        name="Acknowledgments"
        component={Acknowledgments}
        options={stackOptions(translate('acknowledgments'))}
      />
    </Stack.Navigator>
  )
}

class App extends PureComponent {
  constructor(props) {
    super(props)
    setI18nConfig() // set initial config
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange)
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange)
  }

  handleLocalizationChange = () => {
    setI18nConfig()
    this.forceUpdate()
  }

  render() {
    return (
      <NavigationNativeContainer theme={theme}>
        <Tab.Navigator activeColor={theme.colors.accent}>
          <Tab.Screen
            name="Transit"
            component={TransitStack}
            options={tabOptions(translate('transit'), 'subway')}
          />
          {/* // TODO: It's not implemented
          <Tab.Screen
            name="Ecobici"
            component={EcobiciStack}
            options={tabOptions(translate('ecobici'), 'bicycle')}
          /> */}
          <Tab.Screen
            name="Vehicles"
            component={VehiclesStack}
            options={tabOptions(translate('vehicles'), 'car')}
          />
          <Tab.Screen
            name="Acknowledgments"
            component={SupportUsStack}
            options={tabOptions(translate('acknowledgments'), 'heart')}
          />
        </Tab.Navigator>
      </NavigationNativeContainer>
    )
  }
}

export default App
