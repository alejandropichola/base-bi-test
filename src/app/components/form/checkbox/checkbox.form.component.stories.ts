// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxFormComponent } from './checkbox.form.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Checkbox',
  component: CheckboxFormComponent,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CheckboxFormComponent> = (args: CheckboxFormComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
