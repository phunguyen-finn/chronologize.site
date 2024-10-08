'use client';

import { Marker } from "@/services/openai.service";
import Skeleton from "antd/es/skeleton";
import Divider from "antd/es/divider";
import Image from "next/image";

export default function Details({ marker, showDetailsSkeleton }: { marker: Marker, showDetailsSkeleton: boolean }) {
    return <div className='flex flex-col h-full sm:grid sm:grid-cols-4 items-left w-full py-6 gap-x-4 max-h-[90vh] overflow-y-auto no-scrollbar'>
        {
            marker.medias.length == 0 && <>
                <div className='sm:col-span-4 flex flex-col dark:text-white'>
                    <p className='text-gray-600 dark:text-gray-500'>{marker.time}</p>
                    <h1 className='mt-3 text-xl font-bold'>{marker.title}</h1>
                    <Divider style={{ margin: '10px 0px' }} />
                    <div className='flex w-full text-gray-600 dark:text-gray-500'><p>{marker.preview}</p></div> <br />
                    {
                        (marker.details == "" && showDetailsSkeleton)
                            ? <Skeleton paragraph={true} active />
                            : <div className='flex w-full'><p>{marker.details}</p></div>
                    }
                </div>
            </>
        }
        {
            marker.medias.length != 0 && <>
                <div className='sm:col-span-2 flex flex-col mb-5 dark:text-white'>
                    <p className='text-gray-600 dark:text-gray-500 '>{marker.time}</p>
                    <h1 className='mt-3 text-xl font-bold'>{marker.title}</h1>
                    <Divider style={{ margin: '10px 0px' }} />
                    <p className='text-gray-600 dark:text-gray-500'>{marker.preview}</p> <br />
                    {
                        (marker.details == "" && showDetailsSkeleton)
                            ? <Skeleton active />
                            : <div className='flex w-full'><p>{marker.details}</p></div>
                    }
                </div>
                <div className='sm:col-span-2 h-full sm:max-h-[500px] sm:overflow-y-auto no-scrollbar'>
                    {
                        marker.medias.map((media, index) => {
                            return <div key={index} className='flex flex-col gap-y-2 mb-5'>
                                <Image src={media.url} alt={media.title} width={media.width} height={media.height} style={{ width: "100%", height: "auto" }} />
                                <p className="text-gray-600 dark:text-gray-500 italic">{media.title}, from Wikipedia</p>
                            </div>
                        })
                    }
                </div>
            </>
        }
    </div>;
}