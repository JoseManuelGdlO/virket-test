import { Meta, Story } from '@storybook/angular';
import { MooviInputComponent } from './moovi-input.component';
export default {
    title: 'Atoms/MooviInput',
    component: MooviInputComponent,
    argTypes: {
        iconResource: 'checkmark-circle-outline',
        typeImage: 'icon',
        whereIcon: 'left',
        titleIs: 'top',
        title: 'Escribe tu correo',
        sizeTitle: '16px',
        colorTitle: 'primary',
        error: 'not found'
    },
    
} as unknown as Meta;

const Template: Story<MooviInputComponent> = (args: MooviInputComponent) => ({
    component: MooviInputComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    iconResource: 'checkmark-circle-outline',
    typeImage: 'icon',
    whereIcon: 'right',
    titleIs: 'top',
    title: 'Escribe tu correo',
    sizeTitle: '16px',
    colorTitle: 'primary',
    error: '',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
    iconResource: 'checkmark-circle-outline',
    typeImage: 'icon',
    whereIcon: 'left',
    titleIs: 'top',
    title: 'Escribe tu correo',
    sizeTitle: '16px',
    colorTitle: 'primary',
    error: '',
};

export const WithoutText = Template.bind({});
WithoutText.args = {
    iconResource: 'checkmark-circle-outline',
    typeImage: 'icon',
    whereIcon: 'left',
    titleIs: 'top',
    title: '',
    sizeTitle: '16px',
    colorTitle: 'primary',
    error: '',
};

export const Error = Template.bind({});
Error.args = {
    iconResource: 'checkmark-circle-outline',
    typeImage: 'icon',
    whereIcon: 'right',
    titleIs: 'top',
    title: 'Escribe tu correo',
    sizeTitle: '16px',
    colorTitle: 'primary',
    error: 'not found',
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
    iconResource: '',
    typeImage: 'icon',
    whereIcon: 'right',
    titleIs: 'top',
    title: '',
    sizeTitle: '16px',
    colorTitle: 'primary',
    error: '',
};

export const TitleTop = Template.bind({});
TitleTop.args = {
    iconResource: '',
    typeImage: 'icon',
    whereIcon: 'right',
    titleIs: 'top',
    title: 'Escribe tu correo',
    sizeTitle: '16px',
    colorTitle: 'primary',
    error: '',
};

export const TitleBottom = Template.bind({});
TitleBottom.args = {
    iconResource: '',
    typeImage: 'icon',
    whereIcon: 'right',
    titleIs: 'bottom',
    title: 'Escribe tu correo',
    sizeTitle: '16px',
    colorTitle: 'primary',
    error: '',
};