import React from 'react'
import {StoryModal} from './StoryModal'

export default {
  title: 'Molecules/StoryModal',
  component: StoryModal
}

const Template = (args)=> <StoryModal {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  children: ' Lorem Ipsum is simply dummy text'
}