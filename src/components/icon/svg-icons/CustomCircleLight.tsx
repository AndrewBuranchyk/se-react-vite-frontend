import React, { SVGProps } from 'react';

const SvgCustomCircleLight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox='0 0 256 256'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}>
		<g
			style={{
				stroke: "none",
				strokeWidth: 0,
				strokeDasharray: "none",
				strokeLinecap: "butt",
				strokeLinejoin: "miter",
				strokeMiterlimit: 10,
				fill: "none",
				fillRule: "nonzero",
				opacity: 1,
			}}
			transform="matrix(2.81 0 0 2.81 1.407 1.407)"
		>
			<circle
				cx={45}
				cy={45}
				r={45}
				style={{
					stroke: "none",
					strokeWidth: 1,
					strokeDasharray: "none",
					strokeLinecap: "butt",
					strokeLinejoin: "miter",
					strokeMiterlimit: 10,
					fill: "#f3f4f5",
					fillRule: "nonzero",
					opacity: 0.35,
				}}
			/>
			<circle
				cx={45}
				cy={45}
				r={20}
				style={{
					stroke: "none",
					strokeWidth: 1,
					strokeDasharray: "none",
					strokeLinecap: "butt",
					strokeLinejoin: "miter",
					strokeMiterlimit: 10,
					fill: "#f3f4f5",
					fillRule: "nonzero",
					opacity: 0.65,
				}}
			/>
			<circle
				cx={45}
				cy={45}
				r={7}
				style={{
					stroke: "none",
					strokeWidth: 1,
					strokeDasharray: "none",
					strokeLinecap: "butt",
					strokeLinejoin: "miter",
					strokeMiterlimit: 10,
					fill: "#fff",
					fillRule: "nonzero",
					opacity: 1,
				}}
			/>
		</g>
	</svg>
);

export default SvgCustomCircleLight;
