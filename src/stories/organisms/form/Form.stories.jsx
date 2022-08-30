import React from 'react'
import {StoryForm} from './StoryForm'

export default {
  title: 'Organisms/Form',
  component: StoryForm
}

const Template = (args)=> <StoryForm {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Submit'
}