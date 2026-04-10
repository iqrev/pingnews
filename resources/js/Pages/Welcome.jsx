import { Head } from '@inertiajs/react';
import MobileLayout from '@/Layouts/MobileLayout';
import ArticleCard from '@/Components/ArticleCard';

export default function Welcome({ articles }) {
    // We treat the first article as featured
    const featuredArticle = articles?.[0];
    const regularArticles = articles?.slice(1) || [];

    return (
        <MobileLayout>
            <Head title="Latest News" />
            
            <div className="py-6">
                <div className="px-4 mb-4 flex items-center justify-between">
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white">Top Stories</h1>
                </div>

                {featuredArticle && (
                    <ArticleCard article={featuredArticle} featured={true} />
                )}

                <div className="mt-8 px-4 mb-3">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Latest News</h2>
                </div>

                <div className="flex flex-col gap-1">
                    {regularArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                    {regularArticles.length === 0 && !featuredArticle && (
                        <div className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                            No articles published yet.
                        </div>
                    )}
                </div>
            </div>
        </MobileLayout>
    );
}
