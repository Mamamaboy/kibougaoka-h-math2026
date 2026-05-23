// 1. テキストベースの問題データベース（画像は必要な場合のみファイル名を入れ、不要なら "" にします）
// ※ JavaScript内でバックスラッシュ（\）を扱うため、LaTeXの記号は \\ とエスケープしています。
const database = [
    { 
        id: 1, 
        difficulty: 5, 
        category: "数学Ⅱ", 
        qText: "正の実数 $k$ および $\\alpha < \\beta$ となる実数 $\\alpha, \\beta$ が次の条件を満たすように動く。\n条件: 座標平面上の放物線 $C: y = k(x - \\alpha)(\\beta - x)$ の頂点は $(-3, 1)$ であり、$C$ は $y$ 軸と $-2 \\le y \\le 0$ の範囲で交わる。\nこのとき、$C$ と $x$ 軸で囲まれる図形の面積 $S$ のとりうる値の範囲を求めよ。",
        qImg: "", // グラフなどの画像があればここに入力（例: "graph1.jpg"）
        aText: "【ここに解答のテキストを入力します】",
        aImg: ""  
    },
    { 
        id: 2, 
        difficulty: 5, 
        category: "数学A", 
        qText: "$n$ を正の整数とする。座標平面上の $3n$ 個の点がなす集合\n$\\{(x, y) \\mid x, y \\text{ は } 1 \\le x \\le 3, 1 \\le y \\le n \\text{ を満たす整数}\\}$\nから相異なる3点を選ぶ。ただし、どの3点も等確率で選ばれるものとする。選んだ3点が三角形の3頂点となる確率を $p_{n}$ とする。\n(1) $p_{5}$ を求めよ。\n(2) $m$ を2以上の整数とする。$p_{2m}$ を求めよ。",
        qImg: "", 
        aText: "【ここに解答のテキストを入力します】",
        aImg: "" 
    },
    { 
        id: 3, 
        difficulty: 5, 
        category: "数学Ⅱ", 
        qText: "$0 < a < 1$ とし、関数 $f(x)$ を\n$$f(x) = \\frac{a}{8}(x - 1)^{2} + \\frac{2}{a} - 3$$\nと定める。また、関数 $g(x)$ を次のように定める。整数 $n$ に対し、\n$2n \\le x < 2n + 1$ のとき $g(x) = x - 2n$\n$2n + 1 \\le x < 2n + 2$ のとき $g(x) = -x + 2n + 2$\nとする。\n(1) $x \\ge 4$ において $f(x) > g(x)$ を示せ。\n(2) $\\frac{1}{2} < a < \\frac{2}{3}$ とする。座標平面上の $y = f(x)$ のグラフと $y = g(x)$ のグラフの $x \\ge 0$ の範囲における共有点の個数を求めよ。",
        qImg: "", 
        aText: "【ここに解答のテキストを入力します】",
        aImg: "" 
    },
    { 
        id: 4, 
        difficulty: 5, 
        category: "数学Ⅱ", 
        qText: "$k$ を実数とし、座標平面上の曲線 $C$ を $y = x^{3} - kx$ で定める。$C$ 上の2点 $P, Q$ に対する以下の条件(*)を考える。\n条件(*) 原点 $O$, 点 $P$, 点 $Q$ は相異なり、$C$ の $O, P, Q$ における接線のうち、どの2本も交わり、そのなす角はすべて $\\frac{\\pi}{3}$ となる。\nただし、2直線のなす角は $0$ 以上 $\\frac{\\pi}{2}$ 以下の範囲で考えるものとする。\n(1) $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{6}$ とする。$\\tan\\left(\\theta + \\frac{\\pi}{3}\\right)$ を $\\tan\\theta$ を用いて表せ。\n(2) 条件(*)を満たす $P, Q$ が存在するような $k$ の範囲を求めよ。\n(3) $k$ が(2)で定まる範囲にあるとする。$P, Q$ が条件(*)を満たすように動くとき、$C$ の $O, P, Q$ における接線によって囲まれる三角形の面積 $S$ の最大値を $M$、最小値を $m$ とおく。ただし、3本の接線が1点で交わるときは $S = 0$ とする。$M = 4m$ となる $k$ の値を求めよ。",
        qImg: "", 
        aText: "【ここに解答のテキストを入力します】",
        aImg: "" 
    }
];

// 2. 画面切り替え関数
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

// 3. 演習モード：ボタンの活性化チェック
const practiceForm = document.getElementById('practice-form');
const btnStart = document.getElementById('btn-start-practice');

practiceForm.addEventListener('change', () => {
    const diffSelected = document.querySelector('input[name="difficulty"]:checked');
    const catSelected = document.querySelector('input[name="category"]:checked');
    const countSelected = document.getElementById('question-count').value;

    if (diffSelected && catSelected && countSelected !== "") {
        btnStart.disabled = false;
    } else {
        btnStart.disabled = true;
    }
});

// 4. 数式を再レンダリングする関数（画面書き換え後に呼び出す）
function renderMath() {
    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
    }
}

// 5. 演習モード：開始処理とランダム抽出
function startPractice() {
    const diff = parseInt(document.querySelector('input[name="difficulty"]:checked').value);
    const cats = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const count = parseInt(document.getElementById('question-count').value);

    let filteredQuestions = database.filter(q => q.difficulty === diff && cats.includes(q.category));
    filteredQuestions.sort(() => 0.5 - Math.random());
    let selectedQuestions = filteredQuestions.slice(0, count);

    const container = document.getElementById('practice-container');
    container.innerHTML = "";

    if (selectedQuestions.length === 0) {
        container.innerHTML = "<p>条件に一致する問題がありませんでした。</p>";
    } else {
        selectedQuestions.forEach((q, index) => {
            // 画像の有無で表示するHTMLを出し分ける
            let qImgHtml = q.qImg ? `<img src="${q.qImg}" alt="問題の図表" class="problem-img">` : "";
            let aImgHtml = q.aImg ? `<img src="${q.aImg}" alt="解答の図表" class="answer-img">` : "";

            container.innerHTML += `
                <div class="question-card">
                    <p style="color: #2b6cb0;"><strong>問題 ${index + 1}</strong> (難易度: ★${q.difficulty} / ${q.category})</p>
                    <div class="question-text">${q.qText}</div>
                    ${qImgHtml}
                    
                    <button onclick="toggleAnswer('ans-${q.id}')">解答を表示</button>
                    <div id="ans-${q.id}" class="answer-section hidden">
                        <div class="answer-text">${q.aText}</div>
                        ${aImgHtml}
                    </div>
                </div>
            `;
        });
    }

    switchScreen('screen-practice-questions');
    renderMath(); // 挿入したテキストの数式をレンダリング
}

// 6. 解答の表示/非表示切り替え
function toggleAnswer(elementId) {
    const el = document.getElementById(elementId);
    el.classList.toggle('hidden');
}

// 7. 問題検索モード：検索処理
function executeSearch() {
    const diff = document.getElementById('search-difficulty').value;
    const cat = document.getElementById('search-category').value;

    let results = database.filter(q => {
        let matchDiff = diff === "" || q.difficulty === parseInt(diff);
        let matchCat = cat === "" || q.category === cat;
        return matchDiff && matchCat;
    });

    const container = document.getElementById('search-results-container');
    container.innerHTML = "";

    if (results.length === 0) {
        container.innerHTML = "<p>該当する問題がありません。</p>";
    } else {
        results.forEach(q => {
            let qImgHtml = q.qImg ? `<img src="${q.qImg}" alt="問題の図表" class="problem-img">` : "";
            let aImgHtml = q.aImg ? `<img src="${q.aImg}" alt="解答の図表" class="answer-img">` : "";

            container.innerHTML += `
                <div class="question-card">
                    <p style="color: #2b6cb0;"><strong>[★${q.difficulty} / ${q.category}]</strong></p>
                    <p><strong>【問題文】</strong></p>
                    <div class="question-text">${q.qText}</div>
                    ${qImgHtml}
                    <p><strong>【解答・解説】</strong></p>
                    <div class="answer-text">${q.aText}</div>
                    ${aImgHtml}
                </div>
            `;
        });
    }
    
    renderMath(); // 挿入したテキストの数式をレンダリング
}
