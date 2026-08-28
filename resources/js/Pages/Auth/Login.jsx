import MobileLayout from '@/Layouts/MobileLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <MobileLayout>
            <Head title="Masuk Ke Akun | PingNews" />

            <div className="py-12 px-6 flex flex-col items-center">
                <div className="w-full max-w-lg bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.04)] border border-slate-100">
                    <div className="mb-12 text-center">
                        <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Autentikasi</p>
                        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Selamat Datang</h1>
                        <p className="text-slate-500 font-bold text-sm tracking-wide">Silakan masuk untuk melanjutkan akses berita Anda.</p>
                    </div>

                    {status && (
                        <div className="mb-8 text-sm font-black text-green-600 bg-green-50 p-5 rounded-2xl border border-green-100 italic">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-8">
                        <div className="space-y-2">
                            <InputLabel htmlFor="email" value="Alamat Email" className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded-2xl border-slate-200 bg-slate-50/50 py-4 px-6 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="space-y-2">
                            <InputLabel htmlFor="password" value="Kata Sandi" className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full rounded-2xl border-slate-200 bg-slate-50/50 py-4 px-6 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between px-1">
                            <label className="flex items-center group cursor-pointer">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded-lg border-slate-200 text-indigo-600 focus:ring-indigo-500 w-5 h-5 transition-all group-hover:scale-110"
                                />
                                <span className="ms-3 text-sm text-slate-500 font-black uppercase tracking-widest group-hover:text-indigo-600 transition-colors">Ingat Saya</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-xs font-black text-indigo-600 hover:text-indigo-700 transition-colors uppercase tracking-widest"
                                >
                                    Lupa Sandi?
                                </Link>
                            )}
                        </div>

                        <div className="pt-4">
                            <PrimaryButton 
                                className="w-full justify-center py-5 bg-slate-900 hover:bg-black text-white rounded-3xl shadow-2xl shadow-slate-900/10 transition-all font-black text-xs uppercase tracking-[0.2em] active:scale-95 disabled:opacity-50" 
                                disabled={processing}
                            >
                                Masuk Sekarang
                            </PrimaryButton>
                        </div>
                        
                        <div className="text-center pt-8 border-t border-slate-50 mt-10">
                            <p className="text-sm text-slate-500 font-bold tracking-wide">
                                Belum punya akun?{' '}
                                <Link href={route('register')} className="text-indigo-600 font-black hover:text-indigo-700 transition-colors">
                                    Daftar Gratis
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </MobileLayout>
    );
}
