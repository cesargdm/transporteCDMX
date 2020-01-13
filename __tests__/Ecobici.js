import React from 'react'
import { shallow } from 'enzyme'
import Ecobici from '../src/screens/Ecobici'

describe('Ecobici', () => {
  it('it renders correctly while NOT loading', () => {
    const wrapper = shallow(<Ecobici />)
    wrapper.setState({ isLoading: false, error: false, serverLoaded: true })
    expect(wrapper).toMatchSnapshot()
  })

  it('it renders correctly while loading', () => {
    const wrapper = shallow(<Ecobici />)
    wrapper.setState({ isLoading: true, error: false, serverLoaded: false })
    expect(wrapper).toMatchSnapshot()
  })

  it('it renders correctly whit error', () => {
    const wrapper = shallow(<Ecobici />)
    wrapper.setState({ isLoading: false, error: true, serverLoaded: false })
    expect(wrapper).toMatchSnapshot()
  })
})
