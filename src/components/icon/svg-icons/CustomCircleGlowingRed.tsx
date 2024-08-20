import React, { SVGProps } from 'react';

const SvgCustomCircleGlowingRed = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox='0 0 108 108'
		fill='none'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<g filter="url(#a)" opacity={0.8}>
			<path
				fill="#FF7878"
				d="M76.264 53.632c0 12.5-10.133 22.632-22.632 22.632C41.132 76.264 31 66.13 31 53.632 31 41.132 41.133 31 53.632 31c12.5 0 22.632 10.133 22.632 22.632Z"
			/>
		</g>
		<g filter="url(#b)" opacity={0.6}>
			<circle
				cx={53}
				cy={53}
				r={17}
				fill="#FF7878"
				fillOpacity={0.5}
				shapeRendering="crispEdges"
			/>
		</g>
		<circle cx={53} cy={53} r={8} fill="#FF7878" />
		<defs>
			<filter
				id="a"
				width={107.182}
				height={107.182}
				x={0.041}
				y={0.041}
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur
					result="effect1_foregroundBlur_1271_22903"
					stdDeviation={15.48}
				/>
			</filter>
			<filter
				id="b"
				width={42.256}
				height={42.256}
				x={31.872}
				y={36}
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					result="hardAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={4.128} />
				<feGaussianBlur stdDeviation={2.064} />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
				<feBlend
					in2="BackgroundImageFix"
					result="effect1_dropShadow_1271_22903"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1271_22903"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);

export default SvgCustomCircleGlowingRed;
