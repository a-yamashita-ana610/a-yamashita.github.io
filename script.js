// script.js

// ページが読み込まれたら実行
document.addEventListener("DOMContentLoaded", () => {
    // 画面内に要素が入ったかを判定する設定
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // 要素が10%見えたらアニメーションを発火
    };

    // 交差判定（見えたかどうか）を行うオブザーバー
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面に入ったら 'visible' クラスを付与
                entry.target.classList.add("visible");
                // 一度アニメーションしたら監視を解除（毎回動かしたい場合はこの行を削除）
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 'fade-in' クラスを持つすべてのセクションを監視対象にする
    const sections = document.querySelectorAll(".fade-in");
    sections.forEach(section => {
        observer.observe(section);
    });
});