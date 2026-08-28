import React from 'react';
import { Link } from '@inertiajs/react';
import { ClockIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

export default function ArticleCard({ article, featured = false }) {
    const handleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Since we are using Link with method="post" as an overlay, 
        // we can't easily prevent bubbling without a real button.
    };

    if (featured) {
        return (
            <div className="relative mx-4 mb-8">
                <Link href={`/article/${article.slug}`} className="block group relative overflow-hidden rounded-[2.5rem] shadow-[0_24px_50px_-12px_rgba(99,102,241,0.15)] ring-1 ring-black/5">
                    <div className="aspect-[4/5] sm:aspect-[16/7] w-full relative">
                        <img 
                            src={article.cover_image || `https://picsum.photos/seed/${article.id}/800/1000`} 
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex flex-col justify-end">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase bg-white/20 backdrop-blur-md text-white rounded-xl ring-1 ring-white/30">
                                    {article.category?.name || 'Utama'}
                                </span>
                                <div className="flex items-center text-white/80 text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-xl ring-1 ring-white/10">
                                    <ClockIcon className="w-3.5 h-3.5 mr-1.5" />
                                    {new Date(article.published_at || article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4 group-hover:text-indigo-200 transition-colors drop-shadow-md">
                                {article.title}
                            </h2>
                            <div className="flex items-center mt-2 space-x-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/40 shadow-sm">
                                    <img src={`https://ui-avatars.com/api/?name=${article.author?.name}&background=6366f1&color=fff`} alt={article.author?.name} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-white/90 drop-shadow-sm">{article.author?.name || 'Redaksi'}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                
                {/* Float Save Button for Featured */}
                <Link 
                    href={route('article.save', article.id)} 
                    method="post" 
                    as="button"
                    preserveScroll
                    className="absolute top-6 right-6 z-20 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-2xl text-white transition-all active:scale-95 ring-1 ring-white/30 shadow-xl"
                >
                    {article.is_saved ? <BookmarkIconSolid className="w-6 h-6" /> : <BookmarkIcon className="w-6 h-6" />}
                </Link>
            </div>
        );
    }

    return (
        <div className="relative group mb-4 lg:mb-0">
            <Link href={`/article/${article.slug}`} className="flex md:flex-col gap-5 p-5 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] hover:border-indigo-100 hover:-translate-y-1 h-full">
                <div className="w-28 h-28 md:w-full md:h-52 md:aspect-video shrink-0 rounded-[1.75rem] overflow-hidden relative shadow-sm">
                    <img 
                        src={article.cover_image || `https://picsum.photos/seed/${article.id}/400/400`} 
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                    />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1 pr-4 md:pr-0">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                                {article.category?.name || 'Berita'}
                            </span>
                            <span className="text-slate-200">&bull;</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                                <ClockIcon className="w-3.5 h-3.5 mr-1" />
                                {new Date(article.published_at || article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                            </span>
                        </div>
                        <h3 className="text-base md:text-xl font-black text-slate-900 leading-tight line-clamp-2 md:line-clamp-3 group-hover:text-indigo-600 transition-colors">
                            {article.title}
                        </h3>
                    </div>
                    <div className="flex items-center mt-5 pt-4 border-t border-slate-50">
                        <div className="w-7 h-7 rounded-full overflow-hidden mr-3 shadow-sm ring-1 ring-slate-100">
                            <img src={`https://ui-avatars.com/api/?name=${article.author?.name}&background=6366f1&color=fff`} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{article.author?.name || 'Penulis'}</span>
                    </div>
                </div>
            </Link>

            {/* Float Save Button for List */}
            <Link 
                href={route('article.save', article.id)} 
                method="post" 
                as="button"
                preserveScroll
                className="absolute top-7 right-7 p-2.5 bg-white/90 backdrop-blur-md rounded-2xl text-slate-300 hover:text-indigo-600 transition-all active:scale-90 shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 ring-1 ring-slate-200/50"
            >
                {article.is_saved ? <BookmarkIconSolid className="w-5 h-5 text-indigo-600" /> : <BookmarkIcon className="w-5 h-5" />}
            </Link>
        </div>
    );
}
