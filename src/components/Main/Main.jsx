import { ContextProvider } from '../Context/GlobalContext';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai'


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const Main = () => {
    const [videos, setVideos] = useState(null)

    const {mode, closeSidebar} = useContext(ContextProvider)

    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
        params: {
          geo: 'US',
          lang: 'en'
        },
        headers: {
          'X-RapidAPI-Key': 'bec358e4f0mshbd40a5c48189258p1876f3jsnb55b02d4012c',
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };

    async function fetchVideo() {
        try {
            const response = await axios.request(options);
            const data = response.data
            console.log(response.data);
            const videos = data.data.map((video, index) => {
                return (
                        <div key={index} className='max-w-[370px] overflow-hidden h-[310px]'>
                            <NavLink to={`/video/${video.title}/${video.videoId}/${video.viewCount}`}><div className='relative cursor-pointer h-[220px] overflow-hidden'>
                                <img src={video.thumbnail[0].url} className='w-full hover:scale-125 h-[220px] rounded-xl transition-transform object-cover' alt="Video" />
                                <span className='absolute z-50 bottom-2 right-2 rounded px-1 bg-slate-100/70'>{video.lengthText}</span>
                            </div></NavLink>
                            <div className='flex items-start gap-2 pt-2'>
                                <div className='w-9 h-9 rounded-full overflow-hidden border cursor-pointer'>
                                    <img src={video.channelThumbnail[0].url} className='w-full h-full object-cover block' alt="Channel logo" />
                                </div>
                                <div>
                                    <h3 className={`text-[18px] font-medium line-clamp-1 w-[300px]`}>{video.title}</h3>
                                    <span className='font-medium'>{video.channelTitle}</span>
                                    <div className='text-gray-300 flex gap-2'>
                                        <span className='flex items-center gap-1'>{video.viewCount} <AiOutlineEye /></span>
                                        <span>•</span>
                                        <span>{video.publishedText}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })
            setVideos(videos)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchVideo()
    }, [])


  return (
    <div className={`${closeSidebar ? 'left-[4px]' : 'zero:left-[-20px] zero:px-2 z-40 sm:left-[200px]'} absolute top-0 pt-[110px]`}>
        <div className={`h-full w-full flex flex-wrap sm:justify-evenly zero:justify-center pl-5 gap-3 gap-y-5 ${mode ? 'text-white' : 'text-black'}`}>
            {videos}
            {videos}
            {videos}
            {videos}
            {videos}
            {videos}
            {videos}
            {videos}
            {videos}
            {videos}
            {videos}
        </div>
    </div>
  )
}

export default Main