import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#F8FAFC] pt-12 sm:justify-center sm:pt-0">
            <div className="mb-10 transition-transform hover:scale-110 duration-500">
                <Link href="/">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl shadow-indigo-600/30">
                        <span className="text-white font-black text-3xl tracking-tighter">p</span>
                    </div>
                </Link>
            </div>

            <div className="w-full px-4 sm:max-w-md">
                <div className="overflow-hidden bg-white px-10 py-12 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.04)] border border-slate-100 rounded-[3rem]">
                    {children}
                </div>
            </div>
        </div>
    );
}
