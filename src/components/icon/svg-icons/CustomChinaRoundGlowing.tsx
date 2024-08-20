import React, { SVGProps } from 'react';

const SvgCustomChinaRoundGlowing = (props: SVGProps<SVGSVGElement>) => (
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
				fill="#C00"
				d="M16 22c5.523 0 10-4.477 10-10S21.523 2 16 2 6 6.477 6 12s4.477 10 10 10Z"
			/>
			<path
				xmlns="http://www.w3.org/2000/svg"
				stroke="#fff"
				d="M16 23c6.075 0 11-4.925 11-11S22.075 1 16 1 5 5.925 5 12s4.925 11 11 11Z"
			/>
		</g>
		<path
			fill="#FFE000"
			d="m11.695 9.943-1.694 1.179.597-1.976-1.645-1.248 2.064-.042.678-1.95.678 1.95 2.065.042-1.646 1.248.598 1.976-1.695-1.18ZM18.301 7.42l-.217-.701.605.415.6-.423-.208.704.588.44-.734.02-.237.694-.245-.692-.734-.01.582-.447ZM16.199 12.646l-.217-.7.605.415.6-.424-.208.705.588.44-.734.02-.236.694-.246-.692-.734-.01.582-.448ZM16.383 5.43l-.697.23.404-.613-.434-.592.708.196.429-.596.033.733.699.224-.687.258.002.734-.457-.574ZM18.694 10.764l-.603.419.213-.703-.585-.443.734-.015.241-.694.241.694.734.015-.585.443.212.703-.602-.42Z"
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
					result="effect1_dropShadow_1270_22298"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1270_22298"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);

export default SvgCustomChinaRoundGlowing;
