import { chakra } from '@chakra-ui/react';

const GraduationIcon = ({ fill }) => (
	<chakra.svg
		xmlns='http://www.w3.org/2000/svg'
		width={'36px'}
		height={'36px'}
		viewBox='0 0 24 24'
		fill={fill}
	>
		<path d='M2 7v1l11 4 9-4V7L11 4z' />
		<path d='M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z' />
	</chakra.svg>
);

export default GraduationIcon;