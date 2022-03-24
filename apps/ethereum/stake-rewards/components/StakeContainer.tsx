import { styled } from '../stitches.config';
import { useStakeRewards } from '@decentology/hyperverse-ethereum-stake-rewards';
import ReadComponent from './ReadComponent';
import * as Accordion from '@radix-ui/react-accordion';
import CreateStakeInstance from './StakeRewards/WriteFunctions/CreateStakeInstance';
import Approve from './Token/WriteFunctions/Approve';
import Stake from './StakeRewards/WriteFunctions/Stake';
import BalanceOf from './StakeRewards/ReadFunctions/BalanceOf';
import Earned from './StakeRewards/ReadFunctions/Earned';
import Withdraw from './StakeRewards/WriteFunctions/Withdraw';
import GetReward from './StakeRewards/WriteFunctions/GetReward';
import { IoIosArrowDown } from 'react-icons/io';
import CreateTokenInstance from './Token/WriteFunctions/CreateTokenInstance';
import GetProxyToken from './Token/ReadFunctions/GetProxyToken';
import Transfer from './Token/WriteFunctions/Transfer';

const StakeContainer = () => {
	const {
		CheckInstance,
		Proxy,
		TotalSupply,
		Balance,
		RewardPerToken,
		StakeTokenContract,
		RewardTokenContract,
	} = useStakeRewards();

	const {data: instance} = CheckInstance();
	const StakeReadFunctions = [
		{
			hook: TotalSupply(),
			header: 'Total Supply',
			description: 'Get the Total Supply of Stake Tokens that is currently staked',
			buttonText: 'Get Total Supply',
		},
		{
			hook: Balance(),
			header: 'Balance',
			description: 'Get the stake token balance of your account',
			buttonText: 'Get Balance',
		},
		{
			hook: RewardPerToken(),
			header: 'Reward Per Token',
			description: 'Get the current reward rate per token staked',
			buttonText: 'Get Rate',
		},
		{
			hook: StakeTokenContract(),
			header: 'Stake Token Contract',
			description: 'Get the stake token contract',
			buttonText: 'Get Contract',
			isAddress: true,
		},
		{
			hook: RewardTokenContract(),
			header: 'Reward Token Contract',
			description: 'Get the reward token contract',
			buttonText: 'Get Contract',
			isAddress: true,
		},
	];

	return (
		<>
			<Accordion.Root type="single" collapsible>
				<Accordion.Item value="item-1">
					<Header>
						<Trigger>
							Step 1: Create Your Token Instances
							<IoIosArrowDown />
						</Trigger>
					</Header>
					<Content>
						<Info>
							<p>
								A Stake Rewards Instance needs two ERC20 Tokens, a Stake Token and a
								Reward Token.
								<br />
								The Stake Token can be any ERC20 Token, but the Reward Token must be
								yours.
								<br />
								For this sample app, you need to create 2 Token instance.{' '}
								<b>You must use two different accounts</b> for each.
								<br />
								<b>
									Keep in mind that you will need to create your reward token
									instance and your stake rewards instance with the same account
								</b>
							</p>
							<h3>Create your Token Instance</h3>
							<Section>
								<CreateTokenInstance />
								<GetProxyToken />
							</Section>
							<Reminder>
								Make sure to save each token proxy contract addresses on the side,
								you will need them for Step 2.
							</Reminder>
						</Info>
					</Content>
				</Accordion.Item>
			</Accordion.Root>

			<Accordion.Root type="single" collapsible>
				<Accordion.Item value="item-1">
					<Header>
						<Trigger>
							Step 2: Create Your Stake Rewards Instance
							<IoIosArrowDown />
						</Trigger>
					</Header>
					<Content>
						<Info>
							<p>
								To create your Stake Rewards Instance, provide it the 2 proxy token
								addresses you saved from step 1.
								<br />
								Once your instance is your created, get your Stake Reward proxy
								address and save it on the side.
							</p>
							<h3>Stake Rewards Factory Functions</h3>
							<Section>
								<CreateStakeInstance />
								<ReadComponent
									hook={Proxy()}
									header="Get Proxy"
									description="Get your proxy contract address"
									buttonText={'Get Instance'}
									isAddress={true}
                  module={'(Stake Rewards Module)'}
								/>
							</Section>
						</Info>
					</Content>
				</Accordion.Item>
			</Accordion.Root>

			<Accordion.Root type="single" collapsible>
				<Accordion.Item value="item-1">
					<Header>
						<Trigger>
							Step 3: Steup your Rewards Process
							<IoIosArrowDown />
						</Trigger>
					</Header>
					<Content>
						<Info>
							<p>
								To allow this contract to distibute your rewards tokens, you need to
								transfer your Rewards Token from your Token Instance to your Stake
								Rewards proxy address.
								<br />
								This is why you need to use the same account for your Stake Rewards
								Instance and your Rewards Token Instance.
							</p>
							<h3>Token Module Transfer</h3>
							<Section>
								<Transfer />
							</Section>
						</Info>
					</Content>
				</Accordion.Item>
			</Accordion.Root>

			<Accordion.Root type="single" collapsible>
				<Accordion.Item value="item-1">
					<Header>
						<Trigger>
							Staking Process
							<IoIosArrowDown />
						</Trigger>
					</Header>
					<Content>
						<Info>
							<p>
								To stake, an account staking needs to allow your Stake Rewards
								proxy contract to transfer their Stake Token.
								<br />
								So before you can stake, you first need to do an approval from your
								Stake Token Instance.
                <br /> 
                <br /> 
                1. Get the proxy address of your Stake Rewards Instance and copy it to the side.
                <br /> 
                2. Switch your account to the owner of the Stake Token Instance you instantiated in Step 1.
                <br />
                3. In Approve, paste the address of your Stake Reward Instance and an amount of how much tokens you want to approve it to stake.
                <br />
                4. This is now your test account and you can now stake any amount that is equal to or less than the amount you approved.
                
							</p>
							<h3>Transfering Tokens with Token Module and Staking with Stake Rewards Module</h3>
							<Section>
              <ReadComponent
									hook={Proxy()}
									header="Get Proxy"
									description="Get your proxy contract address"
									buttonText={'Get Instance'}
									isAddress={true}
                  module={'(Stake Rewards Module)'}
								/>
                <Approve />
								<Stake />
							</Section>
						</Info>
					</Content>
				</Accordion.Item>
			</Accordion.Root>

			<h3>Stake Rewards Other Functions</h3>
			<Section>
				{StakeReadFunctions.map((item) => (
					<ReadComponent
						checkInstance={instance}
						key={item.header}
						hook={item.hook}
						header={item.header}
						description={item.description}
						buttonText={item.buttonText}
						isAddress={item.isAddress}
						module={'(Stake Rewards Module)'}
					/>
				))}
				<BalanceOf />
				<Earned />
				<Withdraw />
				<GetReward />
			</Section>
		</>
	);
};

export default StakeContainer;

const Section = styled('div', {
	marginTop: '1rem',
	display: 'grid',
	gridTemplateColumns: '270px 270px 270px 257px',
	gridGap: '10px',
});

const Info = styled('div', {
	color: '$blue500',
	fontSize: '12px',
});

const Trigger = styled(Accordion.Trigger, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	outline: 'none',
	border: 'none',
	background: 'none',
	color: 'white',
	cursor: 'pointer',
	fontSize: '14px',

	'& > svg': {
		fontSize: '1.3rem',
	},
});

const Header = styled(Accordion.Header, {
	backgroundColor: '$blue300',
	padding: '1rem',
});

const Content = styled(Accordion.Content, {
	backgroundColor: '$blue300',
	padding: '0 1rem 1rem',
	'& b': {
		color: 'white',
	},
});

const Reminder = styled('div', {
	backgroundColor: 'rgba(243, 225, 107, 0.5)',
	width: '99%',
	padding: '0.5rem',
	marginTop: '0.5rem',
	color: 'white',
	fontSize: '12px',
});
