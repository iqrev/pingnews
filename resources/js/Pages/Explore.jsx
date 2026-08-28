import React from 'react';
import { Head, router } from '@inertiajs/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import MobileLayout from '@/Layouts/MobileLayout';
import ArticleCard from '@/Components/ArticleCard';
import { debounce } from 'lodash';

export default function Explore({ articles, categories, filters }) {
    const [search, setSearch] = React.useState(filters.search || '');

    const handleSearch = React.useMemo(
        () => debounce((value) => {
            router.get('/explore', { search: value, category: filters.category }, {
                preserveState: true,
                replace: true,
                preserveScroll: true
            });
        }, 300),
        [filters.category]
    );

    const onSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        handleSearch(value);
    };

    const toggleCategory = (slug) => {
        const newCategory = filters.category === slug ? null : slug;
        router.get('/explore', { search: filters.search, category: newCategory }, {
            preserveState: true,
            replace: true,
            preserveScroll: true
        });
    };

    const clearSearch = () => {
        setSearch('');
        router.get('/explore', { category: filters.category }, {
            preserveState: true,
            replace: true
        });
    };

    return (
        <MobileLayout>
            <Head title="Jelajah | PingNews" />

            <div className="py-6 lg:py-4 min-h-screen">
                <div className="px-4 mb-10 lg:px-0">
                    <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">Discovery</p>
                    <h1 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8">Cari Sesuatu</h1>
                    
                    {/* Search Input */}
                    <div className="relative group max-w-3xl">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-600 transition-all duration-300" />
                        </div>
                        <input
                            type="text"
                            value={search}
                            onChange={onSearchChange}
                            placeholder="Ketik topik, peristiwa, atau nama tokoh..."
                            className="block w-full pl-16 pr-14 py-5 bg-white border border-slate-100 rounded-[2rem] text-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-400 font-medium"
                        />
                        {search && (
                            <button 
                                onClick={clearSearch}
                                className="absolute inset-y-0 right-0 pr-6 flex items-center"
                            >
                                <div className="p-1.5 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                                    <XMarkIcon className="h-5 w-5 text-slate-400" />
                                </div>
                            </button>
                        )}
                    </div>
                </div>

                {/* Categories Scroll */}
                <div className="mb-12 lg:px-0">
                    <div className="flex overflow-x-auto pb-6 px-4 lg:px-0 scrollbar-hide gap-3 no-scrollbar">
                        <button
                            onClick={() => toggleCategory(null)}
                            className={`whitespace-nowrap px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                !filters.category 
                                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                                    : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
                            }`}
                        >
                            Semua Berita
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => toggleCategory(cat.slug)}
                                className={`whitespace-nowrap px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                    filters.category === cat.slug 
                                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                                        : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results */}
                <div className="lg:px-0">
                     <div className="px-4 lg:px-0 mb-8 flex items-center justify-between">
                         <h2 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tight">
                            {search || filters.category ? 'Hasil Pencarian' : 'Isu Hangat Pekan Ini'}
                         </h2>
                         <div className="flex gap-2">
                             <div className="h-1 w-12 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-indigo-600 w-1/2"></div>
                             </div>
                         </div>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                         {articles.length > 0 ? (
                             articles.map(article => (
                                 <ArticleCard key={article.id} article={article} />
                             ))
                         ) : (
                             <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                                 <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-indigo-50 mb-8 transition-transform hover:rotate-12 duration-500">
                                     <MagnifyingGlassIcon className="w-10 h-10 text-indigo-600" />
                                 </div>
                                 <p className="text-slate-900 font-black text-xl">Hasil Tidak Ditemukan</p>
                                 <p className="text-slate-400 font-medium text-sm mt-3 max-w-xs mx-auto leading-relaxed">Kami tidak menemukan berita yang cocok. Coba cari kata kunci lain atau jelajahi kategori pilihan.</p>
                             </div>
                         )}
                     </div>
                </div>
            </div>
        </MobileLayout>
    );
}
