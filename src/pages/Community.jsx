import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

export default function CommunityForum() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Anonymous Student",
      badge: "Success Story",
      time: "2 hours ago",
      topic: "Exam Anxiety",
      text: "Just wanted to share that I finally talked to my professor about my anxiety around presentations...",
      likes: 24,
      comments: ["That’s awesome!", "Proud of you! 💚"],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [commentInputs, setCommentInputs] = useState({});
  const [openComments, setOpenComments] = useState({});

  const handleShare = () => {
    if (!newPost.trim()) return;
    const newEntry = {
      id: Date.now(),
      user: "Anonymous",
      badge: "New",
      time: "just now",
      topic: newTopic || "General",
      text: newPost,
      likes: 0,
      comments: [],
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
    setNewTopic("");
  };

  const handleLike = (id) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );

  const handleAddComment = (id) => {
    if (!commentInputs[id]?.trim()) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, comments: [...p.comments, commentInputs[id]] } : p
      )
    );
    setCommentInputs((prev) => ({ ...prev, [id]: "" }));
  };

  const trendingMap = posts.reduce((acc, p) => {
    acc[p.topic] = (acc[p.topic] || 0) + 1;
    return acc;
  }, {});
  const trending = Object.entries(trendingMap)
    .map(([topic, count]) => ({ topic, posts: count }))
    .sort((a, b) => b.posts - a.posts)
    .slice(0, 5);

  return (
    <div id="community" className="relative min-h-screen overflow-hidden">
      {/* === Digital-mental-health background === */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-[-6rem] w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-6rem] left-1/3 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10 text-emerald-300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,160 C80,120 240,200 360,160 C480,120 640,40 720,80 
               C800,120 960,200 1080,160 C1200,120 1360,40 1440,80 V320 H0 Z"
          />
        </svg>
      </div>

      {/* === Forum Content === */}
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <div className="text-center mb-10 mt-14">
          <h1 className="text-5xl font-bold text-green-900">
            Community Support Forum
          </h1>
          <p className="text-green-700 mt-2">
            Connect with fellow students in a safe, anonymous, and supportive environment
          </p>
          <button
            className="mt-5 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
            onClick={() => navigate("/chat")}
          >
            1-1 Anonymous Conversation
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* === Posts Section === */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Input */}
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">😊</span>
                <input
                  type="text"
                  placeholder="Topic (optional)"
                  className="flex-1 border border-green-300 rounded-md focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none px-4 py-2 text-sm text-green-900"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Share your thoughts..."
                className="w-full border border-green-300 rounded-md focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none px-4 py-3 text-sm text-green-900 resize-none"
                rows={3}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button
                className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-6 py-2 rounded-lg w-full font-semibold shadow-md transition"
                onClick={handleShare}
              >
                Share
              </button>
            </div>

            {/* Existing Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FaUserCircle className="text-2xl text-green-400" />
                    <span className="font-semibold text-green-900">{post.user}</span>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {post.badge}
                    </span>
                    <span className="text-green-500 text-sm">{post.time}</span>
                  </div>
                </div>

                <p className="text-green-800 text-base">
                  <span className="text-xs text-green-600 font-semibold mr-2">#{post.topic}</span>
                  {post.text}
                </p>

                <div className="flex items-center space-x-6 text-green-600 pt-1">
                  <span
                    className="flex items-center space-x-1 cursor-pointer hover:text-green-800 transition"
                    onClick={() => handleLike(post.id)}
                  >
                    <FaHeart /> <span>{post.likes}</span>
                  </span>
                  <span
                    className="flex items-center space-x-1 cursor-pointer hover:text-green-800 transition"
                    onClick={() =>
                      setOpenComments((prev) => ({ ...prev, [post.id]: !prev[post.id] }))
                    }
                  >
                    <FaComment /> <span>{post.comments.length}</span>
                  </span>
                  <span className="flex items-center space-x-1 cursor-pointer hover:text-green-800 transition">
                    <FaShareAlt /> <span>Share</span>
                  </span>
                </div>

                {openComments[post.id] && (
                  <div className="mt-4 space-y-3">
                    {post.comments.map((cmt, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-green-700 bg-green-100 p-3 rounded-md"
                      >
                        {cmt}
                      </div>
                    ))}
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-1 text-sm border border-green-300 rounded-md px-3 py-2 outline-none text-green-900"
                        value={commentInputs[post.id] || ""}
                        onChange={(e) =>
                          setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))
                        }
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* === Sidebar === */}
          <div className="space-y-8">
            {/* Trending */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="font-semibold text-lg mb-5 text-green-900">Trending Topics</h2>
              <ul className="space-y-3">
                {trending.map((t, idx) => (
                  <li key={idx} className="flex justify-between text-green-800">
                    <div>
                      <span className="font-medium">{t.topic}</span>
                      <p className="text-xs font-normal text-green-500">{t.posts} posts</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidelines */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="font-semibold text-lg mb-4 flex items-center space-x-2 text-green-900">
                <FiShield className="text-emerald-600" />
                <span>Safe Space Guidelines</span>
              </h2>
              <ul className="space-y-3 text-green-700 font-medium">
                <li>👍 Be kind and supportive to everyone</li>
                <li>🔒 Respect privacy and anonymity</li>
                <li>💬 Share experiences, not personal details</li>
              </ul>
              <button className="mt-6 w-full bg-green-100 text-green-800 py-3 rounded-lg hover:bg-green-200 transition font-semibold shadow-md">
                Read Full Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}