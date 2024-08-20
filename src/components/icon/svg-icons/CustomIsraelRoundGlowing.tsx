import React, { SVGProps } from 'react';

const SvgCustomIsraelRoundGlowing = (props: SVGProps<SVGSVGElement>) => (
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
			/>
		</g>
		<g filter="url(#b)">
			<path
				fill="#ECEFF1"
				d="M15.998 2c-2.246 0-4.313.75-5.982 2h11.963a9.94 9.94 0 0 0-5.981-2Z"
			/>
		</g>
		<path
			fill="#ECEFF1"
			d="M26 12a9.943 9.943 0 0 0-2.014-6H8.013a9.943 9.943 0 0 0 0 12h15.973A9.943 9.943 0 0 0 26 12ZM10.016 20a9.941 9.941 0 0 0 11.964 0H10.016Z"
		/>
		<path
			fill="#3F51B5"
			d="M23.989 18H8.016c.57.759 1.245 1.431 2.004 2h11.964a10.039 10.039 0 0 0 2.005-2ZM21.984 4H10.02a10.037 10.037 0 0 0-2.004 2h15.973a10.05 10.05 0 0 0-2.005-2ZM12.5 14h2.334l.73 1.252.432.74.431-.74.731-1.252h2.334l-.44-.752L18.324 12l.728-1.248.44-.752h-2.334l-.73-1.252-.432-.74-.431.74L14.834 10H12.5l.44.752.728 1.248-.728 1.248-.44.752Zm3.496 1-.584-1h1.166l-.582 1Zm-.875-1.5-.875-1.5.875-1.5h1.75l.875 1.5-.875 1.5h-1.75Zm3.5 0h-1.172l.586-1.004.586 1.004Zm0-3-.586 1.004-.586-1.004h1.172ZM15.996 9l.584 1h-1.166l.582-1Zm-2.625 1.5h1.172l-.586 1.004-.586-1.004Zm.586 1.996.586 1.004h-1.172l.586-1.004Z"
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
					result="effect1_dropShadow_1270_22307"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1270_22307"
					result="shape"
				/>
			</filter>
			<filter
				id="b"
				width={19.964}
				height={10}
				x={6.016}
				y={2}
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
					result="effect1_dropShadow_1270_22307"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1270_22307"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);

export default SvgCustomIsraelRoundGlowing;
