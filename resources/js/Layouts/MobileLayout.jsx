import React from 'react';
import { HomeIcon, MagnifyingGlassIcon, BookmarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';

export default function MobileLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-200 dark:bg-black/95 flex justify-center">
            <div className="w-full max-w-md bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans min-h-screen relative shadow-2xl overflow-hidden pb-20 selection:bg-indigo-500 selection:text-white sm:border-x sm:border-slate-300 dark:sm:border-slate-800">
            {/* Header / App Bar */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-800/50 px-4 py-4 flex items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="text-white font-bold text-lg leading-none tracking-tighter">p</span>
                    </div>
                    <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">PingNews</span>
                </div>
                <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <MagnifyingGlassIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                </button>
            </header>

            {/* Main Content Area */}
            <main className="min-h-[calc(100vh-140px)]">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 safe-area-pb">
                <div className="flex items-center justify-around px-2 py-3">
                    <Link href="/" className="flex flex-col items-center gap-1 group">
                        <div className="p-1 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                            <HomeIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">Home</span>
                    </Link>
                    
                    <button className="flex flex-col items-center gap-1 group">
                        <div className="p-1 rounded-xl group-hover:bg-slate-100 dark:group-hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all">
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 transition-colors">Explore</span>
                    </button>
                    
                    <button className="flex flex-col items-center gap-1 group">
                        <div className="p-1 rounded-xl group-hover:bg-slate-100 dark:group-hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all">
                            <BookmarkIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 transition-colors">Saved</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 group">
                        <div className="p-1 rounded-xl group-hover:bg-slate-100 dark:group-hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all">
                            <UserCircleIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 transition-colors">Profile</span>
                    </button>
                </div>
            </nav>
            </div>
        </div>
    );
}
