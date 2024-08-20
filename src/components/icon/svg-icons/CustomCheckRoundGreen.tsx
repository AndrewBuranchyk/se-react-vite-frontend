import React, { SVGProps } from 'react';

const SvgCustomCheckRoundGreen = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox='0 0 86 86'
		fill='none'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<g filter="url(#a)" opacity={0.5}>
			<circle cx={43} cy={43} r={18} fill="#8EFDC7" fillOpacity={0.8} />
		</g>
		<path
			fill="url(#b)"
			d="M43 59c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z"
		/>
		<path
			fill="#172851"
			fillRule="evenodd"
			d="M50.373 38.293a1 1 0 0 1 0 1.414L41.04 49.04a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414l3.293 3.293 8.626-8.626a1 1 0 0 1 1.414 0Z"
			clipRule="evenodd"
		/>
		<defs>
			<linearGradient
				id="b"
				x1={31}
				x2={50.5}
				y1={27}
				y2={59}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#4EFFAA" />
				<stop offset={0.516} stopColor="#85FFC4" />
				<stop offset={1} stopColor="#4EFFAA" />
			</linearGradient>
			<filter
				id="a"
				width={86}
				height={86}
				x={0}
				y={0}
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_1270_22340"
					stdDeviation={12.5}
				/>
			</filter>
		</defs>
	</svg>
);

export default SvgCustomCheckRoundGreen;
