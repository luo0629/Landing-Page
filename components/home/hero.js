'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
import { IoIosArrowUp } from 'react-icons/io';
import { FaRocket } from 'react-icons/fa';
import { RiLoginBoxLine } from 'react-icons/ri';

import { useEffect, useState } from 'react';
export default function Hero({ locale, CTALocale }) {
	const [tilt, setTilt] = useState(45);
	const [duration, setDuration] = useState(0.8);
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const maxTilt = 45; // 最大倾斜角度
			const scrollY = window.scrollY;
			const tiltValue = Math.max(maxTilt - scrollY / 8, 0); // 根据滚动值调整
			setTilt(tiltValue);
			setDuration(0.3);
			
			// 显示/隐藏回到顶部按钮
			if (scrollY > 300) {
				setShowScrollTop(true);
			} else {
				setShowScrollTop(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<>
			<section
				className='relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden'
				style={{ perspective: '800px' }}
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
						{locale.h1}
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 0.2,
						duration: 1,
					}}
				>
					<h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10'>{locale.h2}</h2>

					<div className='w-full md:w-8/12 mx-auto flex flex-col items-center gap-y-5'>
						<div className='flex justify-center w-full mt-4 gap-4'>
							<a
								className='btn btn-md lg:btn-lg btn-base rounded-full font-semibold px-8'
								href='放移动的路径'
							>
								{CTALocale.btn2} <IoArrowForward className="ml-2 text-lg" />
							</a>
							<a
								className='btn btn-md lg:btn-lg btn-base rounded-full font-semibold px-8'
								href='放移动的路径'
							>
								{CTALocale.btn1} <RiLoginBoxLine className="ml-2 text-lg" />
							</a>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100, rotateX: '0deg' }}
					animate={{ opacity: 1, y: 0, rotateX: `${tilt}deg` }}
					transition={{
						delay: duration == 0.8 ? 0.4 : 0,
						duration: duration,
					}}
					className='w-full'
				>
					<Image
						width={1024}
						height={600}
						src={'/og.png'}
						className='hidden md:flex w-full -mt-10'
						alt='app demo'
					/>
				</motion.div>
			</section>

			{/* 回到顶部按钮 */}
			{showScrollTop && (
				<motion.button
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					onClick={scrollToTop}
					whileHover={{ 
						scale: 1.1,
						boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
					}}
					whileTap={{ scale: 0.9 }}
					className="fixed bottom-24 right-8 z-50 bg-base-content text-base-100 dark:bg-white dark:text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-base-content/10 overflow-hidden group"
					aria-label="回到顶部"
				>
					<div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
					<div className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-white via-transparent to-white blur-md transition-opacity duration-500"></div>
					<div className="relative flex items-center justify-center">
						<FaRocket className="absolute text-2xl group-hover:translate-y-[-30px] group-hover:opacity-0 transition-all duration-300" />
						<IoIosArrowUp className="text-2xl translate-y-[30px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
					</div>
				</motion.button>
			)}

			<div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					id='patternId'
					width='100%'
					height='100%'
				>
					<defs>
						<pattern
							id='a'
							patternUnits='userSpaceOnUse'
							width='20'
							height='20'
							patternTransform='scale(3) rotate(0)'
						>
							<rect
								x='0'
								y='0'
								width='100%'
								height='100%'
								fill='hsla(0, 0%, 100%, 0)'
							></rect>
							<path
								d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'
								strokeWidth='0.5'
								className='stroke-base-content/50'
								fill='none'
							></path>
						</pattern>
					</defs>
					<rect
						width='800%'
						height='800%'
						transform='translate(0,0)'
						fill='url(#a)'
					></rect>
				</svg>
				<div className='bg-gradient-to-b from-base-100  from-20% to-transparent absolute inset-0 '></div>
				<div className='bg-gradient-to-l from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
				<div className='bg-gradient-to-r from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
				<div className='bg-gradient-to-t from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
			</div>
		</>
	);
}
