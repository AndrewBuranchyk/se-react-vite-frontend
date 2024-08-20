import React, { SVGProps } from 'react';

const SvgCustomCircleGlowingLight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox='0 0 108 108'
		fill='none'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<g filter="url(#a)" opacity={0.65}>
			<circle cx={53.632} cy={53.632} r={22.632} fill="#fff" />
		</g>
		<g filter="url(#b)" opacity={0.6}>
			<circle
				cx={53.298}
				cy={53.205}
				r={10.758}
				fill="#fff"
				fillOpacity={0.5}
				shapeRendering="crispEdges"
			/>
		</g>
		<circle cx={53.298} cy={53.204} r={6.811} fill="url(#c)" />
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
					result="effect1_foregroundBlur_1270_22336"
					stdDeviation={15.48}
				/>
			</filter>
			<filter
				id="b"
				width={29.771}
				height={29.771}
				x={38.412}
				y={42.447}
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
					result="effect1_dropShadow_1270_22336"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1270_22336"
					result="shape"
				/>
			</filter>
			<linearGradient
				id="c"
				x1={53.668}
				x2={80.584}
				y1={50.697}
				y2={34.11}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#E4FAFF" />
				<stop offset={1} stopColor="#fff" stopOpacity={0} />
			</linearGradient>
		</defs>
	</svg>
);

export default SvgCustomCircleGlowingLight;
