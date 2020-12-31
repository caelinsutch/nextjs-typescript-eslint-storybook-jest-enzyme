import { Story } from '@storybook/react';
import Button, {ButtonProps} from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Button' };
