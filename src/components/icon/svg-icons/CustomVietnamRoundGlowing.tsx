import React, { SVGProps } from 'react';

const SvgCustomVietnamRoundGlowing = (props: SVGProps<SVGSVGElement>) => (
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
				fill="#F1453D"
				d="M16 22c5.523 0 10-4.477 10-10S21.523 2 16 2 6 6.477 6 12s4.477 10 10 10Z"
			/>
			<path
				stroke="#fff"
				strokeWidth={2}
				d="M16 23c6.075 0 11-4.925 11-11S22.075 1 16 1 5 5.925 5 12s4.925 11 11 11Z"
			/>
		</g>
		<path
			fill="#FEE94E"
			fillRule="evenodd"
			d="m16.005 14.1-2.939 1.945.942-3.396-2.758-2.194 3.52-.154L16.006 7l1.235 3.301 3.52.154-2.758 2.194.942 3.396-2.939-1.945Z"
			clipRule="evenodd"
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
					result="effect1_dropShadow_1270_22326"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1270_22326"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);

export default SvgCustomVietnamRoundGlowing;
