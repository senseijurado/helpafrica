import React from 'react';

export interface IndexProps {
	SITE_TITLE?: string;
	SITE_DESCRIPTION?: string;
	THEME_COLOR?: string;
	myKey?:string;
}

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
	myKey?: string;
	HEADER_DESCRIPTION?: string;
	NAVIGATION_DESCRIPTION?: object;
}

export interface QuestionProps {
	id: number;
	question: string;
	answer: string;
}