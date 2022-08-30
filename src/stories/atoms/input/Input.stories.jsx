import React from 'react'
import { Input } from './Input'

export default {
  title: 'Atoms/Input',
  component: Input
}

const Template = (args) => <Input {...args} />

export const DefaultState = Template.bind({});
DefaultState.args = {
  disabled: false,
  placeholder:'',
  value: '',
  onChange:()=>{}
}

export const WithPlaceHolder = Template.bind({})
WithPlaceHolder.args = {
  ...DefaultState,
  placeholder: 'placeholder'
}

export const Disable = Template.bind({})
Disable.args = {
  ...DefaultState,
  disabled: true,
  value: 'disable'
}