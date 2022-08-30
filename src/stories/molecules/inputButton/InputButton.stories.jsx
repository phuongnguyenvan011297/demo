import React from 'react'
import { InputButton } from './InputButton'

export default {
  title: 'Molecules/InputButton',
  component: InputButton
}

const Template = (args) => <InputButton {...args} />
export const Default = Template.bind({})
Default.args = {
  placeholder: 'placeholder',
  value: ''
}