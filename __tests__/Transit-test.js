import React from 'react'
import { shallow } from 'enzyme'
import Transit from '../src/screens/Transit'
import metrobusLine from './fixtures/metrobusLines-fixture'

const metrobusLines = [metrobusLine]

describe('Transit', () => {
  it('it renders correctly while loading', () => {
    const wrapper = shallow(<Transit />)
    expect(wrapper).toMatchSnapshot()
  })

  it('it renders correctly while NOT loading', () => {
    const wrapper = shallow(<Transit />)
    wrapper.setState({ isLoading: false, metrobusLines })
    expect(wrapper).toMatchSnapshot()
  })

  it('it renders correctly with error', () => {
    const wrapper = shallow(<Transit />)
    wrapper.setState({ isLoading: false, error: true })
    expect(wrapper).toMatchSnapshot()
  })
})
