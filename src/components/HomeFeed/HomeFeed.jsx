import React, { Fragment } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from 'react-icons/fa';

const HomeFeed = () => {
    return (
        <Fragment>
            <section className="bg-white w-full sm:w-4/5 md:w-3/5 lg:w-1/3 flex flex-col p-5 sm:p-6 lg:p-8 text-black border rounded-lg mx-auto mt-4 shadow-md">
                <div className="userPost flex flex-col">
                    {/* Post Header */}
                    <div className="userPostNav flex justify-between items-center pt-2 pb-2 px-3">
                        <div className="userProfile details flex gap-3 items-center">
                            <img className="w-12 h-12 object-cover rounded-full" src="https://photosking.net/wp-content/uploads/hidden-face-boy-dp-hidden-face-boy-1-683x1024.jpg" alt="User" />
                            <span className="font-semibold text-lg">Deepak</span>
                        </div>
                        <div>
                            <span><BsThreeDots className="text-lg cursor-pointer hover:text-gray-600" /></span>
                        </div>
                    </div>

                    {/* Post Image */}
                    <div className="image-videos bg-gray-200 mx-auto rounded-lg overflow-hidden">
                        <img className="w-full h-auto" src="https://photosking.net/wp-content/uploads/hidden-face-boy-dp-hidden-face-boy-1-683x1024.jpg" alt="Post" />
                    </div>

                    {/* Post Interaction Bar */}
                    <div className="likes-comment-share-save flex justify-between items-center mt-4">
                        <div className="likes-comment-share flex gap-5 text-2xl text-gray-700">
                            <span className="inline-block like cursor-pointer hover:text-red-500">
                                <FaRegHeart />
                            </span>
                            <span className="inline-block comment cursor-pointer hover:text-blue-500">
                                <FaRegComment />
                            </span>
                            <span className="inline-block share cursor-pointer hover:text-green-500">
                                <IoPaperPlaneOutline />
                            </span>
                        </div>
                        <div className="save cursor-pointer hover:text-gray-600">
                            <span className="inline-block text-xl">
                                <FaRegBookmark size={20} color="black" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default HomeFeed;
