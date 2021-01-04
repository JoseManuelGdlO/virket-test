import { Meta, Story } from '@storybook/angular';
import { MooviBlockButtonComponent } from './moovi-block-button.component';
export default {
  title: 'Atoms/MooviButton',
  component: MooviBlockButtonComponent,
  argTypes: {
    subtitle: 'Default',
    title: 'Click!',
    sizeText: 'medium',
    isDisabled: false,
    backgorundColor: 'primary',
    isFull: true,
  },
} as unknown as Meta;

const Template: Story<MooviBlockButtonComponent> = (args: MooviBlockButtonComponent) => ({
  component: MooviBlockButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  subtitle: 'Prueba Storybook Button Moovi',
  title: 'Prueba StoryBook',
  sizeText: 'medium',
  isDisabled: false,
  backgorundColor: 'primary',
  isFull: true,
};

export const Round = Template.bind({});
Round.args = {
  subtitle: '',
  title: 'Click!',
  sizeText: 'medium',
  isDisabled: false,
  backgorundColor: 'primary',
  isFull: false,
};

export const Large = Template.bind({});
Large.args = {
  subtitle: '',
  title: 'Click!',
  sizeText: 'large',
  isDisabled: false,
  backgorundColor: 'primary',
  isFull: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  subtitle: '',
  title: 'Click!',
  sizeText: 'large',
  isDisabled: true,
  backgorundColor: 'primary',
  isFull: false,
};


