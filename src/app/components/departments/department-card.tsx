import Image from "next/image"
import React from "react";
import Link from "next/link";

interface Props {
    src: string;
    alt: string;
    title: string;
    describtion:React.ReactNode;
}

export const DepartmentCard:React.FC<Props> = ({src, alt, title, describtion}) => {
    return(
        <div className="flex items-center justify-center flex-col min-w-80 w-96 bg-white pt-2 shadow-lg rounded-2xl">
            <div>
                <Image 
                src={src}
                alt={alt}
                width={350}
                height={200}
                className="rounded-lg"
                loading="lazy"
                />
            </div>
            <div className="flex h-64 flex-col items-center justify-around">
                <h1 className="text-2xl mb-auto font-bold text-center mt-4">
                    {title}
                </h1>
                <div className="text-center overflow-hidden text-ellipsis whitespace-wrap line-clamp-3 px-2">
                    {describtion}
                </div>
                <div className="w-32 h-fit mcbg text-center text-white rounded-2xl font-bold py-2 px-4 mt-6 mb-4">
                    <Link
                        href={`/departments/${title.replace(/\s+/g, '-').toLowerCase()}`}
                        className="w-full"
                    >
                        Show more...
                    </Link>
                </div>
            </div>
        </div>
    )
}