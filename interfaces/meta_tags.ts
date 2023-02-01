export interface LayoutProps {
	children: React.ReactNode;
	googleVerification?: string;
	manifestUrl?: string;
	pageDescription?: string;
	pageTitle: string;
	themePWAColor?: string;
	facebook?: FacebookProps;
	twitter?: TwitterProps;
}

export interface TwitterProps {
	twCard?: string;
	twSite?: string;
	twCreator?: string;
	twURL?: string;
	twTitle?: string;
	twDescription?: string;
	twImage?: string;
}

export interface FacebookProps {
	appID?: string;
	ogURL?: string;
	ogTitle?: string;
	ogImage?: string;
	ogDescription?: string;
	ogSitename?: string;
	ogLocale?: string;
	ogAuthor?: string;
}
