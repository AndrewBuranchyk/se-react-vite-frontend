import React, { useRef, useState, cloneElement, FC, ElementType, ReactNode } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import {
	omit,
	pick,
	TransitionTimeouts,
	TransitionPropTypeKeys,
	TransitionStatuses,
} from './utils';

const transitionStatusToClassHash = {
	[TransitionStatuses.ENTERING]: 'collapsing',
	[TransitionStatuses.ENTERED]: 'collapse show',
	[TransitionStatuses.EXITING]: 'collapsing',
	[TransitionStatuses.EXITED]: 'collapse',
};

const getTransitionClass = (status: string) => {
	return transitionStatusToClassHash[status] || 'collapse';
};

interface ICollapseProps extends Record<string, any> {
	tag?: ElementType | any;
	isOpen?: boolean;
	className?: string;
	isNavbar?: boolean;
	children: ReactNode;
	isChildClone?: boolean;
	appear?: boolean;
	enter?: boolean;
	exit?: boolean;
	timeout?: number;
}
const Collapse: FC<ICollapseProps> = ({
	tag: Tag = 'div',
	isOpen = false,
	className,
	isNavbar = false,
	children,
	isChildClone = false,
	appear = false,
	enter = true,
	exit = true,
	timeout = TransitionTimeouts.Collapse,
	// @ts-ignore
	in: inProp = Transition.defaultProps.in,
	// @ts-ignore
	mountOnEnter = Transition.defaultProps.mountOnEnter,
	// @ts-ignore
	unmountOnExit = Transition.defaultProps.unmountOnExit,
	// @ts-ignore
	addEndListener = Transition.defaultProps.addEndListener,
	// @ts-ignore
	onEnter = Transition.defaultProps.onEnter,
	// @ts-ignore
	onEntering = Transition.defaultProps.onEntering,
	// @ts-ignore
	onEntered = Transition.defaultProps.onEntered,
	// @ts-ignore
	onExit = Transition.defaultProps.onExit,
	// @ts-ignore
	onExiting = Transition.defaultProps.onExiting,
	// @ts-ignore
	onExited = Transition.defaultProps.onExited,
	...props
}) => {
	const ref = useRef(null);
	const [height] = useState<number | null>(null);

	const transitionProps = pick(props, TransitionPropTypeKeys);
	const childProps = omit(props, TransitionPropTypeKeys);

	return (
		// @ts-ignore
		<Transition
			nodeRef={ref}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...transitionProps}
			in={isOpen}
			timeout={timeout}
			onEntering={onEntering}
			onEntered={onEntered}
			onExit={onExit}
			onExiting={onExiting}
			onExited={onExited}
			mountOnEnter={mountOnEnter}
			unmountOnExit={unmountOnExit}
			addEndListener={addEndListener}
			onEnter={onEnter}
			{...props}
		>
			{(status) => {
				const collapseClass = getTransitionClass(status);
				const classes = classNames(className, collapseClass, isNavbar && 'navbar-collapse');
				const style = height === null ? null : { height };
				if (isChildClone) {
					// @ts-ignore
					return cloneElement(children, {
						ref,
						// @ts-ignore
						style: { ...childProps.style, ...style },
						// @ts-ignore
						className: classNames(classes, children.props.className),
						...childProps,
					});
				}
				return (
					<Tag
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...childProps}
						// @ts-ignore
						style={{ ...childProps.style, ...style }}
						className={classes}
						ref={ref}>
						{children}
					</Tag>
				);
			}}
		</Transition>
	);
};

export default Collapse;
