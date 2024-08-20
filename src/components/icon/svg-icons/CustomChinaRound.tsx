import React, { SVGProps } from 'react';

const SvgCustomChinaRound = (props: SVGProps<SVGSVGElement>) => (
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
				fill="#C00"
				d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"
			/>
			<path
				fill="#FFE000"
				d="M5.695 7.943 4 9.122l.598-1.976-1.645-1.247 2.064-.043.678-1.95.678 1.95 2.064.043-1.645 1.247.598 1.976-1.695-1.18ZM12.301 5.42l-.217-.701.605.415.6-.423-.208.704.588.44-.734.02-.237.694-.245-.692-.734-.01.582-.447ZM10.199 10.646l-.217-.7.605.415.6-.424-.208.705.588.44-.734.02-.236.694-.246-.692-.734-.01.582-.448ZM10.383 3.43l-.698.23.405-.613-.434-.592.708.196.429-.596.033.733.699.224-.687.258.002.734-.457-.574ZM12.694 8.764l-.603.419.213-.703-.585-.443.734-.015.241-.694.241.694.734.015-.585.443.212.703-.602-.42Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h20v20H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default SvgCustomChinaRound;
