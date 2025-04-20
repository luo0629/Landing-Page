'use client';
import Image from 'next/image';
// import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	// useEffect(() => {
	// 	const fetchLinksList = async () => {
	// 		if (pathname === '/') {
	// 			setLangName(defaultLocale);
	// 		} else {
	// 			setLangName(pathname.split('/')[1]);
	// 		}
	// 		setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
	// 	};
	// 	fetchLinksList();
	// }, [pathname, langName]);

	return (
		<footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7]'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-5 text-sm'>
				<div className='flex flex-col items-center md:items-start'>
					<a
						aria-label='landing page template'
						className='flex items-center mb-5'
						title='landing page template'
						href={`/${langName}`}
					>
						<Image
							width={200}
							height={200}
							src={'/logo.gif'}
							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
							alt='logo'
						/>
						<h2 className='ml-3 font-bold leading-5'>ClearAir-Insight</h2>
					</a>
					<div className='flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6 gap-y-3'>
						{linkList.map((link, index) => {
							const Icon = link.icon;
							return (
								<a
									key={index}
									title={link.name}
									href={`/${langName}${link.url}`}
									className="flex items-center gap-2 hover:text-primary transition-colors"
								>
									{Icon && <Icon className="text-lg" />} {link.name}
								</a>
							);
						})}
					</div>
				</div>

				<div className="mt-6 md:mt-0 text-center md:text-right">
					<p className="flex items-center justify-center md:justify-end gap-1 mb-2">
						Made with <FaHeart className="text-red-500" /> for clean air
					</p>
					<p>
						©{' '}
							ClearAir-Insight{' '}
						{new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
}
