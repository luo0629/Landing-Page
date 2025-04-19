import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { GB, CN } from 'country-flag-icons/react/3x2';

export const locales = ['', 'en', 'zh'];
export const localeNames = {
	en: {
		name: 'English',
		icon: GB
	},
	zh: {
		name: '中文',
		icon: CN
	}
};
export const defaultLocale = 'en';

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers) {
	let languages = new Negotiator({ headers }).languages();

	return match(languages, locales, defaultLocale);
}

const dictionaries = {
	en: () => import('@/locales/en.json').then((module) => module.default),
	zh: () => import('@/locales/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
	if (['zh-CN', 'zh-TW', 'zh-HK'].includes(locale)) {
		locale = 'zh';
	}

	if (!Object.keys(dictionaries).includes(locale)) {
		locale = 'en';
	}

	return dictionaries[locale]();
};
