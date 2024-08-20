import UserImage from "../../assets/img/wanna1.png"
import UserImageWebp from "../../assets/img/wanna1.webp"
import UserImage2 from "../../assets/img/wanna2.png"
import UserImage2Webp from "../../assets/img/wanna2.webp"
import SERVICES, { IServiceProps } from "./serviceDummyData"

import { TColor } from "../../type/color-type"

export interface IUserProps {
	id: string
	username: string
	name: string
	surname: string
	position: string
	email?: string
	src: string
	srcSet: string
	isOnline: boolean
	isReply?: boolean
	color: TColor
	fullImage?: string
	services?: IServiceProps[]
	password: string
}

const john: IUserProps = {
	id: "1",
	username: "john",
	name: "John",
	surname: "Doe",
	position: "CEO, Founder",
	email: "john@omtanke.studio",
	src: UserImage,
	srcSet: UserImageWebp,
	isOnline: true,
	isReply: true,
	color: "primary",
	services: [SERVICES.SURFING, SERVICES.KITE_SURFING, SERVICES.TENNIS],
	password: "@ABC123",
}

const grace: IUserProps = {
	id: "2",
	username: "grace",
	name: "Grace",
	surname: "Buckland",
	position: "Staff",
	email: "grace@omtanke.studio",
	src: UserImage2,
	srcSet: UserImage2Webp,
	isOnline: true,
	color: "warning",
	services: [SERVICES.SNOWBOARDING, SERVICES.ICE_SKATING, SERVICES.KITE_SURFING],
	password: "@ABC123",
}

const USERS: { [key: string]: IUserProps } = {
	JOHN: john,
	GRACE: grace,
}

export function getUserDataWithUsername(username: string): IUserProps {
	// @ts-ignore
	return USERS[Object.keys(USERS).filter((f) => USERS[f].username.toString() === username)]
}

export function getUserDataWithId(id?: string): IUserProps {
	// @ts-ignore
	return USERS[Object.keys(USERS).filter((f) => USERS[f].id.toString() === id.toString())]
}

export default USERS
