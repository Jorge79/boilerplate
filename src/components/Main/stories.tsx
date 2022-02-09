import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title example',
    deion: 'deion example'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: '123',
  deion: '456'
}
