"use client";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import * as FaIcons from 'react-icons/fa6';
import * as FaIconsOld from 'react-icons/fa';

const ICONS: { [key: string]: React.ComponentType } = {
    ...FaIcons,
    ...FaIconsOld
};

interface ServiceCardProps {
    href: string;
    title: string;
    description: string;
    bgColor: string;
    icon: string; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ href, title, description, bgColor, icon }) => {
    const Icon = ICONS[icon as keyof typeof ICONS];
    return (
        <div className="w-full sm:w-11/12 md:w-full lg:w-5/12 xl:w-5/12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <div className={`w-full h-48 ${bgColor} flex items-center justify-center text-5xl`}>
                    {Icon && <Icon />}
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                    <Link href={href}>
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-green-700 transition-colors mb-2">{title}</h3>
                    </Link>
                    <p className="text-gray-600 flex-grow mb-4">{description}</p>
                    <Link href={href} className="text-green-700 hover:text-green-900 transition-colors font-medium flex items-center gap-2">
                        More <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;