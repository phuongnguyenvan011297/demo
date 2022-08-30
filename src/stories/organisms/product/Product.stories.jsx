import React from 'react'
import { Product } from './Product'

export default {
  title: 'Organisms/Product',
  component: Product
}

const Template = (args) => <Product {...args} />

export const Default = Template.bind({})
Default.args = {
  url:'http://placekitten.com/200/200',
  info: 'Meo',
  price: '100000',
  onClick: undefined
}