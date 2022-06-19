import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection inverse id="more">
			<HeroVideo src="./Assets/Clearwater.mp4" autoPlay muted />
			<Container>
				<MainHeading>Welcome to Mojalefa JJ Moja's porfolio</MainHeading>
				<HeroText>
					All information and details within your finger tips reach
				</HeroText>
			</Container>
		</HeroSection>
	);
};

export default Hero;