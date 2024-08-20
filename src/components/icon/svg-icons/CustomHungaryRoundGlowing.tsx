import React, { SVGProps } from 'react';

const SvgCustomHungaryGlowing = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox='0 0 32 32'
		fill='none'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<g filter="url(#a)">
			<path
				stroke="#fff"
				strokeWidth={2}
				d="M16 23c6.075 0 11-4.925 11-11S22.075 1 16 1 5 5.925 5 12s4.925 11 11 11Z"
				shapeRendering="crispEdges"
			/>
		</g>
		<path
			fill="#FF3D00"
			d="M15.999 2C11.709 2 8.06 4.706 6.64 8.5h18.715C23.936 4.706 20.288 2 16 2Z"
		/>
		<path
			fill="#ECEFF1"
			d="M26 12a9.962 9.962 0 0 0-.642-3.5H6.642A9.962 9.962 0 0 0 6 12c0 1.233.234 2.409.642 3.5h18.716A9.951 9.951 0 0 0 26 12Z"
		/>
		<path
			fill="#689F38"
			d="M25.357 15.5H6.64c1.42 3.794 5.068 6.5 9.358 6.5 4.29 0 7.937-2.706 9.358-6.5Z"
		/>
		<defs>
			<filter
				id="a"
				width={32}
				height={32}
				x={0}
				y={0}
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					result="hardAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={4} />
				<feGaussianBlur stdDeviation={2} />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
				<feBlend
					in2="BackgroundImageFix"
					result="effect1_dropShadow_1270_22291"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1270_22291"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);

export default SvgCustomHungaryGlowing;
