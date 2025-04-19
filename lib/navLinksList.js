import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

export const NavLinksList = {
	LINK_EN: [
		{ name: 'Feature', url: '#feature', icon: MdOutlineFeaturedPlayList },
		{ name: 'Pricing', url: '#pricing', icon: FaRegMoneyBillAlt },
		{ name: 'Testimonial', url: '#testimonial', icon: FaRegStar },
		{ name: 'FAQ', url: '#faq', icon: FaQuestionCircle }
	],
	LINK_ZH: [
		{ name: '功能', url: '#feature', icon: MdOutlineFeaturedPlayList },
		{ name: '定价', url: '#pricing', icon: FaRegMoneyBillAlt },
		{ name: '评价', url: '#testimonial', icon: FaRegStar },
		{ name: '常见问题', url: '#faq', icon: FaQuestionCircle },
	]
};
