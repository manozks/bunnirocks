import React, { useState } from 'react';
import { PageType, BlogPost } from '../types';
import { BLOG_POSTS } from '../data';
import {
  Search,
  ChevronRight,
  Clock,
  ArrowLeft,
  Calendar,
  User,
  ShieldCheck,
  Award,
  BookOpen
} from 'lucide-react';

interface BlogPageProps {
  initialPostId?: string | null;
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function BlogPage({ initialPostId = null, navigateTo, openContactModal }: BlogPageProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(initialPostId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Compliance', 'Lab Management', 'Industry News', 'Accreditation'];

  const handleSelectPost = (id: string) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPostId(null);
  };

  // Filters posts based on search query and active category
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activePost = BLOG_POSTS.find((p) => p.id === selectedPostId);

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {activePost ? (
          /* ================= BLOG DETAILS WRITER ================= */
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Back Button & Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Back to Insights</span>
              </button>

              <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
                <ChevronRight className="w-3 h-3" />
                <button onClick={handleBack} className="hover:text-[#0D5C63]">INSIGHTS</button>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#12303A] font-bold uppercase">{activePost.category}</span>
              </div>
            </div>

            {/* Post Header */}
            <div className="space-y-4">
              <span className="inline-flex px-3 py-1 bg-[#EAF6F5] text-[#0D5C63] rounded-full text-xs font-mono font-bold uppercase">
                {activePost.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12303A] tracking-tight leading-snug">
                {activePost.title}
              </h1>
              
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2 border-b border-gray-100 pb-4">
                <span className="flex items-center"><User className="w-4 h-4 mr-1 text-[#0D5C63]" /> {activePost.author.name}</span>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {activePost.date}</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {activePost.readTime}</span>
              </div>
            </div>

            {/* Article Main Image */}
            <div className="aspect-[21:9] w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Core Markdown Body */}
            <article className="prose prose-[#12303A] max-w-none text-xs text-gray-700 leading-relaxed space-y-6">
              
              {activePost.content.split('\n\n').map((para, idx) => {
                if (para.startsWith('###')) {
                  return (
                    <h3 key={idx} className="text-lg font-bold text-[#12303A] pt-4 border-b border-gray-100 pb-1">
                      {para.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (para.startsWith('-')) {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-1.5 my-2">
                      {para.split('\n').map((item, itemIdx) => (
                        <li key={itemIdx}>{item.replace('-', '').trim()}</li>
                      ))}
                    </ul>
                  );
                }
                if (para.startsWith('1.') || para.startsWith('2.') || para.startsWith('3.')) {
                  return (
                    <ol key={idx} className="list-decimal pl-5 space-y-2 my-2">
                      {para.split('\n').map((item, itemIdx) => (
                        <li key={itemIdx} className="font-medium text-gray-800">
                          {item.replace(/^\d+\.\s*/, '').trim()}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return <p key={idx}>{para.trim()}</p>;
              })}

            </article>

            {/* Author Profile Bio card */}
            <div className="bg-white p-6 rounded-3xl border border-[#0D5C63]/10 shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#0D5C63] text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                {activePost.author.avatar}
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-sm font-bold text-[#12303A]">{activePost.author.name}</h4>
                <span className="block text-[10px] text-gray-400 font-mono uppercase">{activePost.author.role}</span>
                <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
                  Co-ordinating senior advisor at BunniRocks. Dr. Evelyn and our other staff authors regularly contribute peer reviews and direct regulatory filings validation.
                </p>
              </div>
            </div>

            {/* Action Card */}
            <div className="bg-[#EAF6F5] p-6 sm:p-8 rounded-3xl border border-[#0D5C63]/15 text-center space-y-4">
              <h3 className="text-lg font-bold text-[#12303A]">Need real-time compliance assistance?</h3>
              <p className="text-xs text-gray-600 max-w-xl mx-auto leading-relaxed">
                Contact our editorial board or arrange a rigorous, zero-obligation gap check of your active testing checklists.
              </p>
              <button
                onClick={() => openContactModal(activePost.title)}
                className="bg-[#12303A] hover:bg-[#0D5C63] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all"
              >
                Request Free Assessment &rarr;
              </button>
            </div>

          </div>
        ) : (
          /* ================= LIST CATALOG VIEW ================= */
          <div className="space-y-10">
            
            {/* Header section with search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-100">
              <div className="text-left space-y-2">
                <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                  BUNNIROCKS INSIGHTS
                </span>
                <h1 className="text-3xl font-extrabold text-[#12303A] tracking-tight">
                  Advisory, Checklists & Industry Briefings
                </h1>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Stay updated on the latest CMS qualifications, CAP checklist reviews, molecular diagnostics, and FDA LDT phaseout policies.
                </p>
              </div>

              {/* Live Search bar */}
              <div className="relative max-w-sm w-full">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Query compliance briefs..."
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none"
                />
              </div>
            </div>

            {/* Category Tags filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0D5C63] text-white'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-[#0D5C63]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handleSelectPost(post.id)}
                    className="bg-white rounded-3xl border border-[#0D5C63]/10 shadow-sm overflow-hidden flex flex-col justify-between text-left cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    
                    {/* Visual Card Head */}
                    <div className="aspect-[16:10] w-full bg-gray-100 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 bg-[#12303A] text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3 flex-1">
                      <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-mono">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-base font-bold text-[#12303A] group-hover:text-[#0D5C63] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-xs text-gray-500 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectPost(post.id);
                        }}
                        className="w-full bg-[#EAF6F5] group-hover:bg-[#0D5C63] group-hover:text-white py-2.5 rounded-xl text-center text-xs font-bold text-[#0D5C63] transition-all cursor-pointer"
                      >
                        Read Article &rarr;
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center space-y-4">
                <BookOpen className="w-12 h-12 text-[#0D5C63]/30 mx-auto" />
                <span className="block font-bold text-[#12303A]">No insights found matching your filters.</span>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="bg-[#0D5C63] text-white px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  Reset Search Criteria
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
