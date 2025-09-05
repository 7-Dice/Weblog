document.addEventListener('DOMContentLoaded', () => {

    // 記事データの配列を定義します
    const blogPosts = [
        {
            title: 'ブログ始めました！',
            date: '2025年9月5日',
            excerpt: '皆様にもっと私の活動を知ってもらうために...',
            url: 'post-1.html'
        },
        {
            title: '続けることの大切さ',
            date: '2025年9月4日',
            excerpt: 'どんなに小さなことでも毎日コツコツと続ける事は...',
            url: 'post-2.html'
        },
        {
            title: '私のポートフォリオサイトについて',
            date: '2025年9月2日',
            excerpt: '私のポートフォリオサイトの制作過程と、こだわったポイントについて詳しく解説します。技術的な挑戦やデザインの工夫...',
            url: 'post-3.html'
        },
        {
            title: 'AIとの協業：効率的なWebサイト構築',
            date: '2025年9月1日',
            excerpt: 'AIを活用することで、コーディングの時間を大幅に削減し、より創造的な作業に集中できます...',
            url: 'post-4.html'
        },
        {
            title: '初心者向けGitHubガイド：プロジェクトを管理しよう',
            date: '2025年8月31日',
            excerpt: 'GitHubは、コードのバージョン管理に不可欠なツールです。本記事では、初心者がGitHubを使い始めるための基本的な手順を...',
            url: 'post-5.html'
        }
    ];

    const postsList = document.querySelector('.posts-list');
    
    // トップページか記事一覧ページかを判定
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    
    // 記事を動的に表示
    // トップページでは最新の3件、記事一覧ページではすべて表示
    const postsToShow = isHomePage ? blogPosts.slice(0, 3) : blogPosts;

    // 記事一覧ページでは抜粋文を非表示にする
    if (!isHomePage) {
        postsToShow.forEach(post => {
            delete post.excerpt;
        });
    }

    // ループ処理でHTMLを生成
    postsToShow.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');

        let postContent = `
            <h3>${post.title}</h3>
            <p class="post-meta">公開日：${post.date}</p>
        `;

        if (post.excerpt) {
            postContent += `<p>${post.excerpt}</p>`;
        }

        postContent += `<a href="${post.url}" class="read-more">続きを読む</a>`;
        postElement.innerHTML = postContent;

        postsList.appendChild(postElement);
    });
});