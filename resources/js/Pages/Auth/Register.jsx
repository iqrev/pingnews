import MobileLayout from '@/Layouts/MobileLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <MobileLayout>
            <Head title="Buat Akun Baru | PingNews" />

            <div className="py-12 px-6 flex flex-col items-center">
                <div className="w-full max-w-lg bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.04)] border border-slate-100">
                    <div className="mb-12 text-center">
                        <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Membership</p>
                        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Join PingNews</h1>
                        <p className="text-slate-500 font-bold text-sm tracking-wide leading-relaxed">Daftar sekarang untuk sinkronisasi simpanan berita Anda di semua perangkat secara instan.</p>
                    </div>

                    <form onSubmit={submit} className="space-y-7">
                        <div className="space-y-2">
                            <InputLabel htmlFor="name" value="Nama Lengkap" className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full rounded-2xl border-slate-200 bg-slate-50/50 py-4 px-6 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-1" />
                        </div>

                        <div className="space-y-2">
                            <InputLabel htmlFor="email" value="Alamat Email" className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded-2xl border-slate-200 bg-slate-50/50 py-4 px-6 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-1" />
                        </div>

                        <div className="space-y-2">
                            <InputLabel htmlFor="password" value="Kata Sandi Baru" className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full rounded-2xl border-slate-200 bg-slate-50/50 py-4 px-6 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-1" />
                        </div>

                        <div className="space-y-2">
                            <InputLabel htmlFor="password_confirmation" value="Konfirmasi Sandi" className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-full rounded-2xl border-slate-200 bg-slate-50/50 py-4 px-6 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-1" />
                        </div>

                        <div className="pt-6">
                            <PrimaryButton 
                                className="w-full justify-center py-5 bg-slate-900 hover:bg-black text-white rounded-3xl shadow-2xl shadow-slate-900/10 transition-all font-black text-xs uppercase tracking-[0.2em] active:scale-95 disabled:opacity-50" 
                                disabled={processing}
                            >
                                Konfirmasi Pendaftaran
                            </PrimaryButton>
                        </div>

                        <div className="text-center pt-8 border-t border-slate-50 mt-8">
                            <p className="text-sm text-slate-500 font-bold tracking-wide">
                                Sudah punya akun?{' '}
                                <Link href={route('login')} className="text-indigo-600 font-black hover:text-indigo-700 transition-colors">
                                    Masuk Disini
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </MobileLayout>
    );
}
