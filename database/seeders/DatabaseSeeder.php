<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create(['name' => 'Editor']);
        Role::create(['name' => 'Penulis']);

        $user = User::factory()->create([
            'name' => 'Admin PingNews',
            'email' => 'admin@pingnews.com',
            'password' => bcrypt('password'),
        ]);

        $user->assignRole('Editor');

        $categories = ['Politik', 'Teknologi', 'Olahraga', 'Kesehatan', 'Hiburan'];
        foreach ($categories as $cat) {
            \App\Models\Category::create(['name' => $cat, 'slug' => \Illuminate\Support\Str::slug($cat)]);
        }

        $tags = ['Viral', 'Terkini', 'Eksklusif', 'Investigasi', 'Tren'];
        foreach ($tags as $tag) {
            \App\Models\Tag::create(['name' => $tag, 'slug' => \Illuminate\Support\Str::slug($tag)]);
        }

        $faker = \Faker\Factory::create('id_ID');

        for ($i = 0; $i < 15; $i++) {
            $title = $faker->realText(50);
            $article = \App\Models\Article::create([
                'title' => $title,
                'slug' => \Illuminate\Support\Str::slug($title) . '-' . mt_rand(100, 999),
                'content' => '<p>' . implode('</p><p>', $faker->paragraphs(6)) . '</p>',
                'published_at' => now()->subDays(mt_rand(0, 10))->subHours(mt_rand(1, 23)),
                'category_id' => mt_rand(1, 5),
                'author_id' => $user->id,
            ]);

            $article->tags()->attach(
                \App\Models\Tag::inRandomOrder()->limit(mt_rand(2, 3))->pluck('id')
            );
        }
    }
}
