import React from "react";
import StartRating from "../asserts/rating.png"
import HaftStartRating from "../asserts/rating-half.png"
import FilmImg from "../asserts/temp-1.jpeg"
import PlayButton from "../asserts/play-button.png"

export function Banner() {
    return (
        <div className="w-full h-[500px] bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 opacity-50 bg-black"/>
            <div className="w-full h-full flex items-center justify-center space-x-[100px] p-4 relative z-20">
                <div className="flex flex-col space-y-5 items-baseline w-[50%] ml-6">
                    <p className="text-white bg-gradient-to-r from-red-600 to-gray-500 px-4 py-2">TV Show</p>
                    <div className="flex flex-col space-y-4 items-start">
                        <h1 className="text-[40px] font-bold text-white">Nghe nói em thích tôi</h1>
                        <div className="flex items-center space-x-3">
                            <img src={StartRating} alt="Rating" className="w-8 h-8"/>
                            <img src={StartRating} alt="Rating" className="w-8 h-8"/>
                            <img src={StartRating} alt="Rating" className="w-8 h-8"/>
                            <img src={StartRating} alt="Rating" className="w-8 h-8"/>
                            <img src={HaftStartRating} alt="Rating" className="w-8 h-8"/>
                        </div>
                        <p className="text-white">Ninh Chí Khiêm là một người điển trai, thông minh và quyết đoán, luôn ưu tiên sự nghiệp hàng đầu. Anh là người trưởng thành và đã đạt được thành công trong sự nghiệp. Về tình cảm, 6 năm trước đó, anh chưa hoàn thành trách nhiệm của một người chồng tốt và cuộc hôn nhân giữa anh và Nguyễn Lưu Tranh không đúng thời điểm.</p>
                        <div className="flex items-center space-x-3">
                            <button className="bg-black font-bold text-white p-3">Chi tiết</button>
                            <button className="bg-red-600 font-bold text-white p-3">Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[300px] h-[400px] relative group cursor-pointer">
                        <img src={FilmImg} alt="temp" className="w-full h-full object-cover"/>
                        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <img src={PlayButton} alt="play"
                                 className="w-16 h-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}