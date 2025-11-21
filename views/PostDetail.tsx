import React, { useState } from 'react';
import { ChevronLeft, Heart, MessageCircle, Share2, Send, MoreHorizontal } from 'lucide-react';
import { Post } from '../types';
import { CURRENT_USER } from '../constants';

interface Props {
  post: Post;
  onBack: () => void;
}

export const PostDetail: React.FC<Props> = ({ post, onBack }) => {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: '爱狗人士王二', content: '太可爱了！希望能早点找到家 ❤️', time: '5分钟前' },
    { id: 2, user: '快乐小狗', content: '转发了！', time: '20分钟前' }
  ]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSendComment = () => {
    if (!comment.trim()) return;
    setComments([...comments, {
      id: Date.now(),
      user: CURRENT_USER.name,
      content: comment,
      time: '刚刚'
    }]);
    setComment('');
  };

  return (
    <div className="bg-transparent min-h-screen pb-24 relative animate-fade-in">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-brand-brown/5 p-4 pt-8 flex justify-between items-center">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <ChevronLeft size={24} className="text-brand-brown" />
        </button>
        <h2 className="text-lg font-bold text-brand-brown">帖子详情</h2>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <MoreHorizontal size={24} className="text-brand-brown" />
        </button>
      </div>

      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <img src={post.user.avatar} alt={post.user.name} className="w-12 h-12 rounded-full border border-brand-brown/10" />
          <div>
            <div className="font-bold text-brand-brown text-sm flex items-center gap-1">
              {post.user.name}
              {post.user.verified && <span className="text-brand-blue text-[10px]">✓</span>}
            </div>
            <div className="text-xs text-brand-gray">{post.time} · {post.location}</div>
          </div>
          <button className="ml-auto bg-brand-pink/10 text-brand-pink text-xs font-bold px-4 py-1.5 rounded-full">
            + 关注
          </button>
        </div>

        {/* Content */}
        <p className="text-brand-brown mb-4 leading-relaxed whitespace-pre-line text-base">
          {post.content}
        </p>

        {/* Images */}
        <div className="space-y-3 mb-6">
          {post.images.map((img, idx) => (
            <img key={idx} src={img} alt="post" className="w-full rounded-2xl object-cover shadow-sm" />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex justify-between items-center py-3 border-t border-b border-brand-brown/5 text-sm text-brand-gray mb-4">
          <span>{likes} 次赞</span>
          <span>{comments.length} 条评论</span>
        </div>

        {/* Comments Section */}
        <div className="space-y-4 mb-20">
          <h3 className="font-bold text-brand-brown">评论区</h3>
          {comments.map(c => (
            <div key={c.id} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-xs font-bold text-brand-brown">
                {c.user[0]}
              </div>
              <div className="flex-1 bg-white p-3 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-sm border border-brand-brown/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-brand-brown/80">{c.user}</span>
                  <span className="text-[10px] text-brand-gray">{c.time}</span>
                </div>
                <p className="text-sm text-brand-brown">{c.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Interaction Bar (Relative to container because of transform in App) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-brown/5 px-4 py-3 flex items-center gap-3 z-30 safe-area-bottom">
        <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 flex items-center gap-2 border border-brand-brown/5">
          <input 
            type="text" 
            placeholder="写下你的评论..." 
            className="flex-1 bg-transparent text-sm outline-none text-brand-brown placeholder:text-brand-gray"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendComment()}
          />
        </div>
        <button 
            onClick={handleSendComment}
            className="w-10 h-10 flex items-center justify-center rounded-full text-brand-blue hover:bg-brand-blue/10 transition-colors"
        >
            <Send size={20} />
        </button>
        <button 
          onClick={handleLike}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isLiked ? 'text-brand-pink bg-brand-pink/10' : 'text-brand-gray hover:bg-gray-100'}`}
        >
          <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-brand-gray hover:bg-gray-100 transition-colors">
          <Share2 size={24} />
        </button>
      </div>
    </div>
  );
};