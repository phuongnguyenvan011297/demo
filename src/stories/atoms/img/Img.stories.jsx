import React from 'react'
import {Img} from './Img'

export default {
  title: 'Atoms/Img',
  component: Img
}

const Template = (args) => <Img {...args} />

export const Default = Template.bind({})
Default.args = {
  url: 'http://placekitten.com/200/200'
}