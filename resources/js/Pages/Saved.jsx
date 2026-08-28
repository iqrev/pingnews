import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import MobileLayout from '@/Layouts/MobileLayout';
import ArticleCard from '@/Components/ArticleCard';

export default function Saved({ articles }) {
    return (
        <MobileLayout>
            <Head title="Koleksi Saya | PingNews" />
            
            <div className="py-6 lg:py-4 min-h-screen">
                <div className="px-4 mb-10 lg:px-0">
                    <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">Personal Library</p>
                    <h1 className="text-3xl lg:text-5xl font-black text-slate-900 mb-2">Simpanan Anda</h1>
                    <p className="text-slate-500 font-bold text-sm lg:text-base mt-2 tracking-wide">Daftar bacaan yang Anda kurasi untuk dinikmati nanti.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 lg:px-0">
                    {articles && articles.length > 0 ? (
                        articles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))
                    ) : (
                        <div className="col-span-full py-40 text-center bg-white rounded-[3rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-slate-50 mb-8 border border-slate-100 shadow-inner">
                                <BookmarkIcon className="w-10 h-10 text-slate-300" />
                            </div>
                            <h3 className="text-slate-900 font-black text-2xl tracking-tight">Belum Ada Koleksi</h3>
                            <p className="text-slate-400 font-medium text-sm mt-3 max-w-sm mx-auto leading-relaxed">
                                Klik ikon simpan pada berita yang Anda sukai untuk menyusun perpustakaan digital pribadi Anda di sini.
                            </p>
                            <Link 
                                href="/explore" 
                                className="mt-10 inline-flex items-center gap-2 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 active:scale-95"
                            >
                                Mulai Menjelajah &rarr;
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </MobileLayout>
    );
}
