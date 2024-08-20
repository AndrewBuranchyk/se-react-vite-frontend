import { Store } from 'react-notifications-component';

const showNotification = (
	title: string | JSX.Element,
	message: string | JSX.Element,
	type = 'default',
	dismissDuration: number = 5000,
) => {
	Store.addNotification({
		title,
		message,
		// @ts-ignore
		type,
		insert: 'top',
		container: 'top-right',
		animationIn: ['animate__animated', 'animate__fadeIn'],
		animationOut: ['animate__animated', 'animate__fadeOut'],
		dismiss: {
			duration: dismissDuration,
			pauseOnHover: true,
			onScreen: true,
			showIcon: true,
			waitForAnimation: true,
		},
	});
};

export default showNotification;
