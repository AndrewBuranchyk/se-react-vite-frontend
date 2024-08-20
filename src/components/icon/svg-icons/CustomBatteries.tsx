import React, { SVGProps } from 'react';

const SvgCustomBattery = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox='0 0 20 20'
		fill='none'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<path
			fill="#333"
			fillRule="evenodd"
			d="M18.384 1.616c.234.235.366.552.366.884v1.25H20V2.5A2.5 2.5 0 0 0 17.5 0h-1.25v1.25h1.25c.331 0 .65.132.884.366Zm.366 14.634v1.25a1.25 1.25 0 0 1-1.25 1.25h-1.25V20h1.25a2.5 2.5 0 0 0 2.5-2.5v-1.25h-1.25ZM1.25 17.5a1.25 1.25 0 0 0 1.25 1.25h1.25V20H2.5A2.5 2.5 0 0 1 0 17.5v-1.25h1.25v1.25ZM3.75 0H2.5A2.5 2.5 0 0 0 0 2.5v1.25h1.25V2.5A1.25 1.25 0 0 1 2.5 1.25h1.25V0Zm7.5 1.25h2.5V0h-2.5v1.25Zm-2.5 0h-2.5V0h2.5v1.25ZM11.25 20h2.5v-1.25h-2.5V20Zm-2.5 0h-2.5v-1.25h2.5V20Zm10-8.75v2.5H20v-2.5h-1.25Zm0-2.5v-2.5H20v2.5h-1.25ZM0 11.25v2.5h1.25v-2.5H0Zm0-2.5v-2.5h1.25v2.5H0Zm10.851 2.4h2.643l-6.219-7.4 1.617 5.1H6.25l6.219 7.4-1.618-5.1Z"
			clipRule="evenodd"
		/>
	</svg>
);

export default SvgCustomBattery;
