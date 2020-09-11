// @generated: @expo/next-adapter@2.1.29
import '../base/tensorflow';
import * as React from 'react';
import styled from 'styled-components/native';
import tf from '../base/tensorflow';

export default function App() {
	const [isTfReady, setIsTfReady] = React.useState(false);

	React.useEffect(() => {
		const readyTensorflow = async () => {
			await tf.ready();
			setIsTfReady(true);
		};

		readyTensorflow();
	});

	return (
		<Container>
			<Title>Welcome to Expo + Next.js + typescript + 💅 Styled Components + Tensorflow 👋</Title>
			<SubTitle>{`Tensorflow JS v${tf.version.tfjs} is ${isTfReady ? 'ready' : 'loading'}`}</SubTitle>
			{isTfReady && <SubTitle>{`TF backend ${tf.getBackend()}`}</SubTitle>}
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: palevioletred;
`;
const SubTitle = styled.Text`
	font-size: 12px;
	font-weight: 200;
	color: palevioletred;
`;
