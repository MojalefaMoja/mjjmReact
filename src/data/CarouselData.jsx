export const data = [
	{
		title: 'Hoerskool Akasia',
		description:
			'Natinal senior certificate 2015',
		image: './Assets/Hoërskool_Akasia.jpg',
	},
	{
		title: 'Tshwane University of Technology (TUT) ',
		description: 'National Diploma Information Technology: Software Development 2021',
		image: './Assets/Tshwane_University_of_Technology_logo.svg',
	},
	{
		title: 'Shape.AI',
		description: 'Web development Basics (HTML,CSS,JS) 2021 ',
		image: './Assets/shape ai.jpg',
	},
	{
		title: 'Hockey Champions',
		description: 'Winner of High school Hockey League in 2013/2014 and 2014/2015',
		image: './Assets/hockey.jpg',
	},
	{
		title: 'Jukskei',
		description: 'Recieved 3rd in the district in the year 2013',
		image: './Assets/jukskei-game_.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};