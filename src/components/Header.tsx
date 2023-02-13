import { Navigation } from './Navigation';
import LanguageSelector from './LanguageSelector.jsx';
import { GetStaticProps, NextPage } from 'next';
import {IndexProps  as Props}  from '@/interfaces';

export const Header:NextPage<Props> = ({description, nav}) => {
	return (
		<>
			<header style={header_styles}>
				<p>
					{description}
				</p>
				<LanguageSelector />
			</header>
			<nav style={{display:"flex"}}>
				<Navigation sections={nav}/>
			</nav>
		</>
	);
}

export default Header;

const header_styles = {
	display: 'flex',
}