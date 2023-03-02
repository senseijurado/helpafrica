interface Props {
	copyTitle?: string
}

export const Footer: NextPage<Prop> = ({ copyTitle = '' }) => {
	return <p>{copyTitle}</p>
}

export default Footer
