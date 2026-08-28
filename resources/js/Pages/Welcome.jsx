import { Head } from '@inertiajs/react';
import MobileLayout from '@/Layouts/MobileLayout';
import ArticleCard from '@/Components/ArticleCard';

export default function Welcome({ articles }) {
    // We treat the first article as featured
    const featuredArticle = articles?.[0];
    const regularArticles = articles?.slice(1) || [];

    return (
        <MobileLayout>
            <Head title="Beranda | PingNews" />
            
            <div className="py-6 lg:py-4">
                <div className="px-4 mb-10 flex flex-col lg:flex-row lg:items-end justify-between lg:px-0">
                    <div className="mb-6 lg:mb-0">
                        <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">Redaksi Pilihan</p>
                        <h1 className="text-3xl lg:text-5xl font-black text-slate-900 leading-none">Berita Utama</h1>
                        <p className="text-slate-500 font-bold text-sm mt-3 hidden lg:block tracking-wide">Analisis mendalam dan berita terpercaya dari seluruh penjuru dunia.</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                        <div className="h-1 w-4 bg-slate-200 rounded-full"></div>
                        <div className="h-1 w-4 bg-slate-200 rounded-full"></div>
                    </div>
                </div>

                {featuredArticle && (
                    <div className="lg:mb-16">
                        <ArticleCard article={featuredArticle} featured={true} />
                    </div>
                )}

                <div className="mt-16 px-4 mb-8 lg:px-0 flex items-center justify-between border-b border-slate-100 pb-6">
                    <div>
                        <h2 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tight">Terbaru Spesial Untuk Anda</h2>
                    </div>
                    <Link href="/explore" className="text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors">
                        Lihat Semua &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 lg:px-0 mb-20">
                    {regularArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                    {regularArticles.length === 0 && !featuredArticle && (
                        <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookmarkIcon className="w-8 h-8 text-slate-300" />
                            </div>
                            <p className="text-slate-900 font-black text-lg">Belum Ada Kabar Baru</p>
                            <p className="text-slate-400 font-medium text-sm mt-2">Nantikan berita terbaru kami segera.</p>
                        </div>
                    )}
                </div>
            </div>
        </MobileLayout>
    );
}
