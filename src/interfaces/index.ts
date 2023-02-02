import React from 'react';

export interface iFaqProps {
	id: number;
	question?: string;
	answer?: string;
}

export interface iHeadProps {
	GG_VERIFICATION?: string;
	MANIFEST?: string;
	SITE_DESCRIPTION?: string;
	SITE_TITLE: string;
	THEME_COLOR?: string;
	children?: React.ReactNode;
	key?: string;
}
