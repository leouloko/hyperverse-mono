// import { createInstance } from '../source/useERC20';
// import { checkInstance } from '../source/useERC20';
// const { ethers } = require('hardhat');
// const { expect } = require('chai');
// import { userEvent } from '@storybook/testing-library';
// import React from 'react';

import React from 'react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'New Instance',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	name: true,
	symbol: 'Button',
	decimal: 2,
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: '',
	symbol: 'Button',
	decimal: 2,

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};

// export default {
// 	title: 'New Instance',
// 	component: createInstance,
// 	props: {
// 		address: '0x212f9F56bd134eA334443Cc208C833fE44E4f3a8',
// 		name: 'TOKENNN',
// 		symbol: 'TKN',
// 		decimal: 2,
// 	},
// };

// const Template = (args) => <createInstance {...args} />;

// export const noInstance = Template.bind({});

// export const newInstance = Template.bind({});
// newInstance.play = async () => {
// 	const nameInput = screen.getByLabelText('Token Name', {
// 		selector: 'input',
// 	});

// 	await userEvent.type(nameInput('TOKENNN'));

// 	const symbolInput = screen.getByLabelText('Token Symbol', {
// 		selector: 'input',
// 	});

// 	await userEvent.type(symbolInput('TKN'));

// 	const decimalInput = screen.getByLabelText('Token Decimal', {
// 		selector: 'input',
// 	});

// 	await userEvent.type(decimalInput(2));
// };

// describe('Tokens', async () => {
// 	let Tokens;
// 	let tokenContract;
// 	let alice;
// 	let bob;
// 	let ken;

// 	beforeEach(async () => {
// 		Tokens = await ethers.getContractFactory('Tokens');
// 		[bob, alice] = await ethers.getSigners();

// 		tokenContract = await Tokens.deploy();
// 		await tokenContract.deployed();
// 	});

//     describe('Initial', async () => {
//         it('Checking owner', async () => {
//           expect(await tokenContract.owner()).to.equal(bob.address);
//         });
//       });

// 	it('Should allow Bob to create an new instance', async () => {
//         await tokenContract.connect(bob);

//     });

// 	it('Adding a new instance without wallet connection should error', async () => {
// 		await expect(tokenContract.connect(ken).createInstance()).to.be.revertedWith(
// 			'User cannot create a new instance'
// 		);
// 	});
// });
