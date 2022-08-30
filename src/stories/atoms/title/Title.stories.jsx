import React from 'react'
import {Title} from './Title'

export default {
  title: 'Atoms/Title',
  component: Title
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small',
  size: 'small'
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large',
  size: 'large'
}