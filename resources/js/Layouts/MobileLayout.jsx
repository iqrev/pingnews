import React from 'react';
import { HomeIcon, MagnifyingGlassIcon, BookmarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, MagnifyingGlassIcon as MagnifyingGlassIconSolid, BookmarkIcon as BookmarkIconSolid, UserCircleIcon as UserCircleIconSolid } from '@heroicons/react/24/solid';
import { Link, usePage } from '@inertiajs/react';

export default function MobileLayout({ children }) {
    const { url, props } = usePage();
    const auth = props.auth;

    const isActive = (path) => url === path || url.startsWith(path + '?') || (path === '/' && url === '');

    const NavItem = ({ href, label, icon: Icon, activeIcon: ActiveIcon }) => (
        <Link 
            href={href} 
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                isActive(href) 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
        >
            <div className={`transition-transform duration-300 ${isActive(href) ? 'scale-110' : 'group-hover:scale-110'}`}>
                {isActive(href) ? <ActiveIcon className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
            </div>
            <span className="font-bold text-sm md:text-base">{label}</span>
        </Link>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
            
            {/* Desktop Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 xl:w-72 bg-white border-r border-slate-200 z-50 hidden lg:flex flex-col p-6 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                <Link href="/" className="flex items-center gap-3 mb-10 px-2 transition-transform hover:scale-105">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="text-white font-bold text-xl leading-none tracking-tighter">p</span>
                    </div>
                    <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">PingNews</span>
                </Link>

                <nav className="flex-1 flex flex-col gap-2">
                    <NavItem href="/" label="Beranda" icon={HomeIcon} activeIcon={HomeIconSolid} />
                    <NavItem href="/explore" label="Jelajah" icon={MagnifyingGlassIcon} activeIcon={MagnifyingGlassIconSolid} />
                    <NavItem href={auth.user ? "/saved" : "/login"} label="Tersimpan" icon={BookmarkIcon} activeIcon={BookmarkIconSolid} />
                    <NavItem href={auth.user ? "/profile" : "/login"} label="Profil" icon={UserCircleIcon} activeIcon={UserCircleIconSolid} />
                </nav>

                {auth.user && (
                    <div className="mt-auto p-4 bg-slate-50/80 rounded-[2rem] flex items-center gap-3 border border-slate-100">
                        <img src={`https://ui-avatars.com/api/?name=${auth.user.name}&background=6366f1&color=fff`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="" />
                        <div className="overflow-hidden">
                            <p className="font-bold text-sm truncate text-slate-900">{auth.user.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium truncate uppercase tracking-widest">{auth.user.email}</p>
                        </div>
                    </div>
                )}
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex flex-col lg:pl-64 xl:pl-72 transition-all duration-300">
                
                {/* Mobile/Tablet Header */}
                <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-slate-200/50 px-4 py-4 lg:px-8 flex items-center justify-between transition-all duration-300 lg:bg-transparent lg:border-none lg:backdrop-blur-none lg:sticky lg:top-0">
                    <div className="lg:hidden flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                <span className="text-white font-bold text-sm leading-none tracking-tighter">p</span>
                            </div>
                            <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">PingNews</span>
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Platform Berita Digital</p>
                        <h2 className="text-slate-900 font-black text-lg">Informasi Terkini</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/explore" className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors">
                            <MagnifyingGlassIcon className="w-5 h-5 text-slate-600" />
                        </Link>
                        {!auth.user && (
                            <Link href="/login" className="hidden lg:flex items-center justify-center px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all active:scale-95">
                                Masuk
                            </Link>
                        )}
                    </div>
                </header>

                <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 lg:px-8 lg:py-8 pb-24 lg:pb-10">
                    {children}
                </main>
            </div>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[2.5rem] lg:hidden safe-area-pb ring-1 ring-black/5">
                <div className="flex items-center justify-around px-2 py-3">
                    <Link href="/" className={`flex flex-col items-center gap-1 group transition-all duration-300 ${isActive('/') ? 'scale-105' : ''}`}>
                        <div className={`p-1.5 rounded-xl transition-colors ${isActive('/') ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 group-hover:bg-slate-50'}`}>
                            {isActive('/') ? <HomeIconSolid className="w-6 h-6" /> : <HomeIcon className="w-6 h-6" />}
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-tighter ${isActive('/') ? 'text-indigo-600' : 'text-slate-400'}`}>Beranda</span>
                    </Link>
                    
                    <Link href="/explore" className={`flex flex-col items-center gap-1 group transition-all duration-300 ${isActive('/explore') ? 'scale-105' : ''}`}>
                        <div className={`p-1.5 rounded-xl transition-colors ${isActive('/explore') ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 group-hover:bg-slate-50'}`}>
                            {isActive('/explore') ? <MagnifyingGlassIconSolid className="w-6 h-6" /> : <MagnifyingGlassIcon className="w-6 h-6" />}
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-tighter ${isActive('/explore') ? 'text-indigo-600' : 'text-slate-400'}`}>Jelajah</span>
                    </Link>
                    
                    <Link href={auth.user ? "/saved" : "/login"} className={`flex flex-col items-center gap-1 group transition-all duration-300 ${isActive('/saved') ? 'scale-105' : ''}`}>
                        <div className={`p-1.5 rounded-xl transition-colors ${isActive('/saved') ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 group-hover:bg-slate-50'}`}>
                            {isActive('/saved') ? <BookmarkIconSolid className="w-6 h-6" /> : <BookmarkIcon className="w-6 h-6" />}
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-tighter ${isActive('/saved') ? 'text-indigo-600' : 'text-slate-400'}`}>Simpan</span>
                    </Link>

                    <Link href={auth.user ? "/profile" : "/login"} className={`flex flex-col items-center gap-1 group transition-all duration-300 ${isActive('/profile') || isActive('/login') ? 'scale-105' : ''}`}>
                        <div className={`p-1.5 rounded-xl transition-colors ${isActive('/profile') || isActive('/login') ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-400 group-hover:bg-slate-50'}`}>
                            {isActive('/profile') || isActive('/login') ? <UserCircleIconSolid className="w-6 h-6" /> : <UserCircleIcon className="w-6 h-6" />}
                        </div>
                        <span className={`text-[9px] font-black uppercase tracking-tighter ${isActive('/profile') || isActive('/login') ? 'text-indigo-600' : 'text-slate-400'}`}>Profil</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
