import React from 'react'
import { Notistack } from './Notistack'

export default {
  title:'Atoms/Notistack',
  component: Notistack
}

const Template = (args) => <Notistack {...args} />

export const Default = Template.bind({})
Default.args= {
  content: 'Login thành công'
}