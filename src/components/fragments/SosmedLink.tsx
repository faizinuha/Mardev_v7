import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
    url: string;
    icon: ReactNode;
};

const SosmedLink = ({ url, icon }: Props) => {
    return (
        <Link target='_blank' href={url}>
            <span className='hover:bg-primary bg-blue-500 delay-0 ease-in-out'>
                {icon}
            </span>
        </Link>
    );
};

export default SosmedLink;
