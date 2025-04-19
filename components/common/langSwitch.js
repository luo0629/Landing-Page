'use client';
import React from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { defaultLocale, localeNames } from '@/lib/i18n';

export default function LangSwitch() {
	const params = useParams();
	const lang = params.lang;
	const pathname = usePathname();
	const router = useRouter();

	let langName = lang && lang !== 'index' ? lang : defaultLocale;

	const handleSwitchLanguage = (value) => {
		return () => {
			let newPathname;
			const pathParts = pathname.split('/').filter(Boolean);

			if (pathParts.length === 0) {
				// 处理根路径
				newPathname = `/${value}`;
			} else if (pathParts[0] === lang) {
				// 当前路径已经包含语言代码
				pathParts[0] = value;
				newPathname = '/' + pathParts.join('/');
			} else {
				// 当前路径不包含语言代码
				newPathname = `/${value}${pathname}`;
			}

			// 确保路径末尾有斜杠
			newPathname = newPathname.endsWith('/') ? newPathname : newPathname + '/';

			router.replace(newPathname);
		};
	};

	return (
		<div className='dropdown dropdown-end dropdown-hover z-[100]'>
			<div
				tabIndex={0}
				role='button'
				className='flex items-center justify-center gap-2 md:bg-base-100 md:rounded-full w-15 md:w-[100px] h-5 text-sm md:h-8 md:shadow-sm md:hover:shadow-md transition-all'
			>
				{localeNames[langName].icon && React.createElement(localeNames[langName].icon, { className: "w-4 h-4" })}
				{localeNames[langName].name}
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow'
			>
				{Object.keys(localeNames).map((key) => {
					const { name, icon: Icon } = localeNames[key];
					return (
						<li key={key}>
							<a
								href='#'
								title={`switch to ${name}`}
								className='cursor-pointer flex items-center gap-2'
								onClick={handleSwitchLanguage(key)}
							>
								{Icon && React.createElement(Icon, { className: "w-4 h-4" })}
								{name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
