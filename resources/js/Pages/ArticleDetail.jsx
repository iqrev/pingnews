import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeftIcon, ClockIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';
import MobileLayout from '@/Layouts/MobileLayout';
import ArticleCard from '@/Components/ArticleCard';

export default function ArticleDetail({ article, relatedArticles }) {
    return (
        <MobileLayout>
            <Head title={`${article.title} | PingNews`} />

            {/* Back Nav Overlay - Responsive */}
            <div className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-10 flex justify-between items-center pointer-events-none lg:left-64 xl:left-72">
                <Link href="/" className="w-10 h-10 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white pointer-events-auto hover:bg-white hover:text-indigo-600 transition-all shadow-xl active:scale-95">
                    <ChevronLeftIcon className="w-6 h-6" />
                </Link>
                <div className="flex gap-3">
                    <Link 
                        href={route('article.save', article.id)} 
                        method="post" 
                        as="button"
                        preserveScroll
                        className="w-10 h-10 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white pointer-events-auto hover:bg-white hover:text-indigo-600 transition-all shadow-xl active:scale-95"
                    >
                        {article.is_saved ? <BookmarkIconSolid className="w-6 h-6 text-indigo-400" /> : <BookmarkIcon className="w-6 h-6" />}
                    </Link>
                    <button className="w-10 h-10 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white pointer-events-auto hover:bg-white hover:text-indigo-600 transition-all shadow-xl active:scale-95">
                        <ShareIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <article className="max-w-7xl mx-auto pb-20">
                {/* Hero Image Section */}
                <div className="relative w-full aspect-[3/4] md:aspect-video lg:rounded-[3.5rem] overflow-hidden lg:shadow-[0_32px_80px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
                    <img 
                        src={article.cover_image || `https://picsum.photos/seed/${article.id}/1200/800`} 
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="inline-block px-5 py-2 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] bg-indigo-600 text-white rounded-xl shadow-2xl shadow-indigo-600/40">
                                {article.category?.name || 'Exclusive'}
                            </span>
                            <div className="flex items-center text-white/80 text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-xl ring-1 ring-white/10">
                                <ClockIcon className="w-4 h-4 mr-2" />
                                7 Menit Baca
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
                            {article.title}
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-12 lg:mt-20 px-4 lg:px-0">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        <div className="bg-white lg:rounded-[3.5rem] p-8 lg:p-20 shadow-[0_8px_40px_rgba(0,0,0,0.02)] border border-slate-100">
                            {/* Author & Meta */}
                            <div className="flex flex-wrap items-center justify-between mb-12 pb-12 border-b border-slate-50 gap-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[1.5rem] overflow-hidden shadow-xl shadow-indigo-500/10 ring-2 ring-slate-50">
                                        <img src={`https://ui-avatars.com/api/?name=${article.author?.name}&background=6366f1&color=fff`} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Ditulis Oleh</p>
                                        <p className="font-black text-slate-900 uppercase tracking-wider text-base lg:text-lg">{article.author?.name || 'Tim Redaksi'}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 text-right">Tanggal Publikasi</p>
                                    <p className="text-sm lg:text-base font-black text-slate-900 text-right">
                                        {new Date(article.published_at || article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>

                            {/* Article Body */}
                            <div 
                                className="prose prose-slate prose-lg md:prose-2xl max-w-none 
                                prose-p:leading-[1.8] prose-p:text-slate-600 prose-p:font-medium
                                prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                prose-strong:text-slate-900 prose-strong:font-black
                                prose-a:text-indigo-600 prose-a:font-black prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-12
                                prose-blockquote:border-l-8 prose-blockquote:border-indigo-600 prose-blockquote:bg-indigo-50 prose-blockquote:py-6 prose-blockquote:px-10 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-indigo-900 prose-blockquote:font-bold"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />

                            {/* Tags */}
                            {article.tags && article.tags.length > 0 && (
                                <div className="flex flex-wrap gap-3 mt-16 pt-12 border-t border-slate-50">
                                    {article.tags.map(tag => (
                                        <span key={tag.id} className="px-6 py-3 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-slate-100 border border-slate-100/50 cursor-pointer">
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-4 space-y-12">
                        {/* More from Related */}
                        {relatedArticles && relatedArticles.length > 0 && (
                            <div className="bg-white rounded-[3rem] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.02)] border border-slate-100">
                                <h3 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-[0.2em] border-l-4 border-indigo-600 pl-5">Berita Terkait</h3>
                                <div className="flex flex-col gap-10">
                                    {relatedArticles.slice(0, 3).map(rel => (
                                        <Link key={rel.id} href={`/article/${rel.slug}`} className="group block">
                                            <div className="aspect-video w-full rounded-3xl overflow-hidden mb-5 shadow-inner border border-slate-50 relative">
                                                <img src={rel.cover_image || `https://picsum.photos/seed/${rel.id}/400/250`} className="w-full h-full object-cover transition-all duration-[1s] group-hover:scale-110 group-hover:rotate-2" alt="" />
                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                            <h4 className="font-black text-base lg:text-lg text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2 uppercase tracking-tight">{rel.title}</h4>
                                            <p className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                {new Date(rel.published_at || rel.created_at).toLocaleDateString()}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Premium CTA */}
                        <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white shadow-[0_32px_80px_rgba(99,102,241,0.2)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600 rounded-full -mr-24 -mt-24 blur-[80px] group-hover:blur-[60px] transition-all duration-1000"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-1 bg-indigo-500 rounded-full mb-8"></div>
                                <h3 className="text-3xl font-black mb-4 leading-none">Ping<span className="text-indigo-500">Plus</span></h3>
                                <p className="text-slate-400 font-medium text-lg mb-10 leading-relaxed">Nikmati jurnalisme berkualitas tanpa gangguan iklan. Mulai dari Rp 15rb/bulan.</p>
                                <button className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95">
                                    Berlangganan Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </MobileLayout>
    );
}
