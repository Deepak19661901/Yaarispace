import React, { useState } from "react";
import { Settings } from "lucide-react";
import Stories from "../Posts/Stories";
import RenderContent from "../Posts/RenderContent";
import { useNavigate, Link } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate()
    const [bio, setBio] = useState({
        name: "Deepak Kumar",
        username: "deepak_dev",
        description: "🚀 Full Stack Developer\n✨ Creating digital experiences\n🌍 Based in India",
        link: "https://github.com/Deepak19661901"
    });
    const myStories = [1, 2];

    return (
        <div className="max-w-3xl mx-auto bg-black text-white min-h-screen">
            {/* Header */}
            <div className="sticky top-0 z-50 border-b border-gray-800 bg-black p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link to={"/feed"} className="font-semibold text-lg">YarriSpace</Link>

                </div>
                <Settings className="w-6 h-6" />
            </div>

            {/* Profile Section */}
            <div className="p-4">
                <div className="flex items-start mb-6">
                    {/* Profile Picture */}
                    <div className="mr-8">
                        <div className="w-20 h-20 rounded-full ring-2 ring-gray-800 p-0.5">
                            <img
                                className="w-full h-full rounded-full object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAhvc-YjdwsimlEYdOknxcvbgNOVSHWjkWQ&s"
                                alt={bio.name}
                            />
                        </div>
                    </div>
                    {/* Stats */}
                    <div className="flex-1">
                        <div className="flex items-center mb-4 space-x-4">
                            <div className="flex-1">
                                <span className="text-sm font-semibold">238</span>
                                <p className="text-sm">posts</p>
                            </div>
                            <div className="flex-1">
                                <span className="text-sm font-semibold">1.2M</span>
                                <p className="text-sm">followers</p>
                            </div>
                            <div className="flex-1">
                                <span className="text-sm font-semibold">1,234</span>
                                <p className="text-sm">following</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                            <button className="flex-1 bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-semibold">
                                Edit profile
                            </button>
                            <button className="flex-1 bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-semibold">
                                Share profile
                            </button>
                        </div>
                    </div>
                </div>
                {/* Bio */}
                <div className="mb-4">
                    <h1 className="font-semibold mb-1">{bio.name}</h1>
                    <p className="text-sm whitespace-pre-line text-gray-300">{bio.description}</p>
                    <a href={`https://${bio.link}`} className="text-sm text-blue-400">{bio.link}</a>
                </div>
            </div>

            {/* Story Highlights */}
            <div className="px-4 mb-4">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {myStories.map((_, index) => <Stories key={index} index={index} />)}
                </div>
            </div>
            <RenderContent />
        </div>
    );
};

export default UserProfile;