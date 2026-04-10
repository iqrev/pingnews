import React from 'react';
import { Link } from '@inertiajs/react';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function ArticleCard({ article, featured = false }) {
    if (featured) {
        return (
            <Link href={`/article/${article.slug}`} className="block group relative overflow-hidden rounded-3xl mx-4 mb-6 shadow-2xl shadow-indigo-900/5 dark:shadow-indigo-900/20">
                <div className="aspect-[4/5] sm:aspect-[16/9] w-full relative">
                    <img 
                        src={article.cover_image || `https://picsum.photos/seed/${article.id}/800/1000`} 
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500 text-white rounded-full backdrop-blur-md">
                                {article.category?.name || 'News'}
                            </span>
                            <div className="flex items-center text-slate-300 text-xs font-medium backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                                <ClockIcon className="w-3 h-3 mr-1" />
                                {new Date(article.published_at || article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                            </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 group-hover:text-indigo-200 transition-colors">
                            {article.title}
                        </h2>
                        <div className="flex items-center mt-2 space-x-2">
                            <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30">
                                <img src={`https://ui-avatars.com/api/?name=${article.author?.name}&background=6366f1&color=fff`} alt={article.author?.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-medium text-slate-200">{article.author?.name || 'Editorial Team'}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/article/${article.slug}`} className="group flex gap-4 p-4 mx-4 mb-4 bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/50">
            <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden relative">
                <img 
                    src={article.cover_image || `https://picsum.photos/seed/${article.id}/400/400`} 
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            {article.category?.name || 'News'}
                        </span>
                        <span className="text-slate-300 dark:text-slate-600">&bull;</span>
                        <span className="text-[10px] text-slate-500 flex items-center">
                            <ClockIcon className="w-3 h-3 mr-0.5 inline" />
                            {new Date(article.published_at || article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                        </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {article.title}
                    </h3>
                </div>
                <div className="flex items-center mt-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">{article.author?.name || 'Editorial Team'}</span>
                </div>
            </div>
        </Link>
    );
}
