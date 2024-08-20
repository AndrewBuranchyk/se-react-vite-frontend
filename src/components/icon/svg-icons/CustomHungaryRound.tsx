import React, { SVGProps } from 'react';

const SvgCustomHungary = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox='0 0 20 20'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<path
			fill="#FF3D00"
			d="M9.999 0C5.709 0 2.06 2.706.64 6.5h18.715C17.936 2.706 14.288 0 10 0Z"
		/>
		<path
			fill="#ECEFF1"
			d="M20 10a9.962 9.962 0 0 0-.642-3.5H.642A9.962 9.962 0 0 0 0 10c0 1.233.234 2.409.642 3.5h18.716A9.951 9.951 0 0 0 20 10Z"
		/>
		<path
			fill="#689F38"
			d="M19.357 13.5H.64C2.06 17.294 5.709 20 9.999 20c4.29 0 7.937-2.706 9.358-6.5Z"
		/>
	</svg>
);

export default SvgCustomHungary;
