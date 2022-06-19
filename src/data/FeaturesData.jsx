import React from 'react';

import { CgCPlusPlus } from 'react-icons/cg';
import { SiJavascript } from 'react-icons/si';
import { AiOutlineConsoleSql, AiOutlineTeam } from 'react-icons/ai';
import { SiSimpleanalytics } from 'react-icons/si';
import { DiLinux } from 'react-icons/di';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'C++',
		description: 'knowledgeable in c++ programming and object orieted programming ',
		icon: iconStyle(CgCPlusPlus),
		imgClass: 'one',
	},
	{
		name: 'Javascript',
		description: 'Web development and UI design experience',
		icon: iconStyle(SiJavascript),
		imgClass: 'two',
	},
	{
		name: 'Linux',
		description: 'Experienced in Linux file and directory managemnt and virtual machine linux operations',
		icon: iconStyle(DiLinux),
		imgClass: 'three',
	},
	{
		name: 'Business Analysis',
		description: 'Technical analysis of system requirements and technological involvement in bussiness requirements',
		icon: iconStyle(SiSimpleanalytics),
		imgClass: 'four',
	},
	{
		name: 'Team Player',
		description: 'Work well with others and willing to assit in any team effort',
		icon: iconStyle(AiOutlineTeam),
		imgClass: 'five',
	},
	{
		name: 'SQL',
		description:
			'Experienced in sql documentation and database management even with SQL schema ',
		icon: iconStyle(AiOutlineConsoleSql),
		imgClass: 'six',
	},
];