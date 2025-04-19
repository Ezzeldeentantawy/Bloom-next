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
        <div className="flex items-center justify-center flex-col w-96 bg-white pt-2 shadow-lg rounded-2xl">
            <div>
                <Image 
                src={src}
                alt={alt}
                width={350}
                height={200}
                className="rounded-lg"
                />
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold text-center mt-4">
                    {title}
                </h1>
                <div className="text-center overflow-hidden text-ellipsis whitespace-wrap line-clamp-3 px-2">
                    {describtion}
                </div>
                <button className="bg-orange-400 rounded-2xl hover:bg-orange-500 text-white font-bold py-2 px-4 mt-4 mb-2">
                    <Link 
                    href={`/departments/${title.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        Show more...
                    </Link>
                </button>
            </div>
        </div>
    )
}