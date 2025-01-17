import { styled } from '../stitches.config';
import { useFlow } from '@decentology/hyperverse-flow';
import { useEffect, useState } from 'react'

const shortenHash = (hash: string = '', charLength: number = 6, postCharLength?: number) => {
	let shortendHash;
	if (postCharLength) {
		shortendHash =
			hash.slice(0, charLength) +
			'...' +
			hash.slice(hash.length - postCharLength, hash.length);
	} else {
		shortendHash = hash.slice(0, charLength);
	}
	return shortendHash;
};

const ReadComponent = ({ hook, header, description, buttonText, isAddress }) => {
	const flow = useFlow();
	const [hidden, setHidden] = useState(false);
	const [data, setData] = useState();

	const dataFetched = isAddress ? shortenHash(data, 5, 5) : data;

	useEffect(() => {
		if (flow.user && flow.user.loggedIn) {
			fetchData();
		}
	}, [flow.user])

	const fetchData = async () => {
		let returnedData = null;
		if (header === 'Get Balance') {
			console.log("User", flow.user?.addr)
			returnedData = await hook(flow.user?.addr);
		} else {
			returnedData = await hook();
		}
		console.log(returnedData);
		setData(returnedData);
	}

	return (
		<Box>
			<h4>{header}</h4>
			<p>{description}</p>
			<Button disabled={!flow.user?.addr} onClick={() => setHidden(p => !p)}>
				{!flow.user?.addr ? 'Connect Wallet' : !hidden ? buttonText : data}
			</Button>
		</Box>
	);
};

export default ReadComponent;

const Box = styled('div', {
	maxHeight: '150px',
	maxWidth: '220px',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '$blue500',
	borderRadius: '10px',
	color: 'white',
	padding: '30px 20px',
	alignItems: 'center',
	'& h4': {
		marginTop: '10px',
		fontSize: '1.2rem',
		fontWeight: '500',
	},
	'& p': {
		margin: '10px 0 30px',
		fontSize: '0.8rem',
	},
});

const Button = styled('button', {
	minWidth: '150px',
	backgroundColor: '$yellow100',
	outline: 'none',
	border: 'none',
	padding: '10px 15px',
	borderRadius: '90px',
	cursor: 'pointer',
	margin: '10px auto 0',
	'&:hover': {
		opacity: 0.8,
	},
});
