import React from 'react'
import {Pagination} from './Pagination'

export default {
  title: 'Atoms/Pagination',
  component: Pagination
}

const Template = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  count: 5
}