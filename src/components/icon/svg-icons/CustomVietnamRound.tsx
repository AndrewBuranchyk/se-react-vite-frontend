import React, { SVGProps } from 'react';

const SvgCustomVietnamRound = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox='0 0 20 20'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<g clipPath="url(#a)">
			<path
				fill="#F1453D"
				d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"
			/>
			<path
				fill="#FEE94E"
				fillRule="evenodd"
				d="m10.005 12.1-2.939 1.945.942-3.396L5.25 8.455 8.77 8.3 10.006 5l1.235 3.301 3.52.154-2.758 2.194.942 3.396-2.939-1.945Z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h20v20H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default SvgCustomVietnamRound;
