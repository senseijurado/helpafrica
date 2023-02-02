import { iHeadProps } from '@/interfaces';
import { FC } from 'react';

export const ThemeChanger: FC<iHeadProps> = ({}) => {
	return (
		<>
			<h1 className='text-slate-800'>ThemeChanger Component</h1>
		</>
	);
};

export default ThemeChanger;
