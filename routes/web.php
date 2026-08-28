<?php

use App\Http\Controllers\ProfileController;
use App\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $articles = Article::with(['author', 'category'])
        ->orderByDesc('published_at')
        ->orderByDesc('created_at')
        ->limit(10)
        ->get();

    if (auth()->check()) {
        $savedIds = auth()->user()->savedArticles()->pluck('id')->toArray();
        $articles->each(function($article) use ($savedIds) {
            $article->is_saved = in_array($article->id, $savedIds);
        });
    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'articles' => $articles,
    ]);
});

Route::get('/explore', function (\Illuminate\Http\Request $request) {
    $search = $request->input('search');
    $categorySlug = $request->input('category');

    $query = Article::query()->with(['author', 'category']);

    if ($search) {
        $query->where(function($q) use ($search) {
            $q->where('title', 'like', "%{$search}%")
              ->orWhere('content', 'like', "%{$search}%");
        });
    }

    if ($categorySlug) {
        $query->whereHas('category', function($q) use ($categorySlug) {
            $q->where('slug', $categorySlug);
        });
    }

    $articles = $query->latest('published_at')->latest()->get();
    
    if (auth()->check()) {
        $savedIds = auth()->user()->savedArticles()->pluck('id')->toArray();
        $articles->each(function($article) use ($savedIds) {
            $article->is_saved = in_array($article->id, $savedIds);
        });
    }

    $categories = \App\Models\Category::all();

    return Inertia::render('Explore', [
        'articles' => $articles,
        'categories' => $categories,
        'filters' => $request->only(['search', 'category']),
    ]);
});
Route::get('/article/{slug}', function ($slug) {
    $article = Article::with(['author', 'category', 'tags'])->where('slug', $slug)->firstOrFail();
    
    if (auth()->check()) {
        $article->is_saved = auth()->user()->savedArticles()->where('article_id', $article->id)->exists();
    }

    $related = Article::with(['author', 'category'])
        ->where('id', '!=', $article->id)
        ->where('category_id', $article->category_id)
        ->latest('published_at')
        ->limit(3)
        ->get();

    return Inertia::render('ArticleDetail', [
        'article' => $article,
        'relatedArticles' => $related,
    ]);
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/article/{article}/save', function (Article $article) {
        auth()->user()->savedArticles()->toggle($article->id);
        return back();
    })->name('article.save');

    Route::get('/saved', function () {
        $articles = auth()->user()->savedArticles()->with(['author', 'category'])->latest()->get();
        $articles->each(function($a) { $a->is_saved = true; });
        return Inertia::render('Saved', [
            'articles' => $articles,
        ]);
    })->name('saved.index');
});

require __DIR__.'/auth.php';
