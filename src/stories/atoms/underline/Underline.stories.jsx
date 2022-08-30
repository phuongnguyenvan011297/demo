import React from 'react'
import {Underline} from './Underline'

export default {
  title: 'Atoms/Underline',
  component: Underline
}

const Template = (args) => <Underline {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#ccc'
}