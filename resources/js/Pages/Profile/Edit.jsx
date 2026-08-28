import MobileLayout from '@/Layouts/MobileLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { PowerIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <MobileLayout>
            <Head title="Pengaturan Profil | PingNews" />

            <div className="py-6 lg:py-4">
                <div className="px-4 mb-10 flex items-end justify-between lg:px-0 lg:mb-14">
                    <div>
                        <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Pengaturan Akun</p>
                        <h1 className="text-3xl lg:text-5xl font-black text-slate-900 leading-none">Profil Anda</h1>
                        <p className="text-slate-500 font-bold text-sm lg:text-base mt-4 hidden lg:block tracking-wide">Kelola detail identitas digital dan konfigurasi keamanan akun PingNews Anda.</p>
                    </div>
                    <Link 
                        href={route('logout')} 
                        method="post" 
                        as="button"
                        className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-red-50 text-red-600 font-black text-[11px] uppercase tracking-widest hover:bg-red-100 transition-all active:scale-95 border border-red-100/50 shadow-sm"
                    >
                        <PowerIcon className="w-5 h-5" />
                        <span className="hidden sm:inline">Keluar Sesi</span>
                    </Link>
                </div>

                <div className="space-y-8 lg:space-y-12 lg:px-0 max-w-4xl pb-20">
                    <div className="bg-white p-10 lg:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.02)] border border-slate-100 rounded-[3rem]">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="w-full"
                        />
                    </div>

                    <div className="bg-white p-10 lg:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.02)] border border-slate-100 rounded-[3rem]">
                        <UpdatePasswordForm className="w-full" />
                    </div>

                    <div className="bg-white p-10 lg:p-14 shadow-[0_8px_40px_rgba(239,68,68,0.05)] border border-red-50 rounded-[3rem]">
                        <DeleteUserForm className="w-full" />
                    </div>
                </div>
            </div>
        </MobileLayout>
    );
}
