// 1. テキストベースの問題データベース
// ★先生がお持ちの49題のデータ（const database = [...]）をここにそのまま貼り付けてください。
const database = [
    { 
        id: 1, univ: "東京大(令和8年)", difficulty: 5, category: "数学Ⅱ", 
        qText: "正の実数 $k$ および $\\alpha < \\beta$ となる実数 $\\alpha, \\beta$ が次の条件を満たすように動く。\n条件: 座標平面上の放物線 $C: y = k(x - \\alpha)(\\beta - x)$ の頂点は $(-3, 1)$ であり、$C$ は $y$ 軸と $-2 \\le y \\le 0$ の範囲で交わる。\nこのとき、$C$ と $x$ 軸で囲まれる図形の面積 $S$ のとりうる値の範囲を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    // ... 残りの問題データを追加 ...
];

// 2. 画面切り替え関数
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

// 3. 演習モード：ボタンの活性化チェック（複数選択対応）
const practiceForm = document.getElementById('practice-form');
const btnStart = document.getElementById('btn-start-practice');

practiceForm.addEventListener('change', () => {
    // チェックされている項目の個数を確認
    const diffCheckedCount = document.querySelectorAll('input[name="difficulty"]:checked').length;
    const catCheckedCount = document.querySelectorAll('input[name="category"]:checked').length;
    const countSelected = document.getElementById('question-count').value;

    // 難易度、カテゴリがそれぞれ1つ以上チェックされ、問題数が選ばれていれば開始可能
    if (diffCheckedCount > 0 && catCheckedCount > 0 && countSelected !== "") {
        btnStart.disabled = false;
    } else {
        btnStart.disabled = true;
    }
});

// 4. 数式を再レンダリングする関数
function renderMath() {
    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
    }
}

// 5. 演習モード：開始処理とランダム抽出（「すべて」対応）
function startPractice() {
    // 選択された値の配列を取得
    const diffs = Array.from(document.querySelectorAll('input[name="difficulty"]:checked')).map(cb => cb.value);
    const cats = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const count = parseInt(document.getElementById('question-count').value);

    let filteredQuestions = database.filter(q => {
        // 「すべて(all)」が含まれているか、該当難易度が含まれていればOK
        let matchDiff = diffs.includes("all") || diffs.includes(String(q.difficulty));
        let matchCat = cats.includes("all") || cats.includes(q.category);
        return matchDiff && matchCat;
    });

    filteredQuestions.sort(() => 0.5 - Math.random());
    let selectedQuestions = filteredQuestions.slice(0, count);

    const container = document.getElementById('practice-container');
    container.innerHTML = "";

    if (selectedQuestions.length === 0) {
        container.innerHTML = "<p style='color:#ff4d4d;'>条件に一致する問題がありませんでした。</p>";
    } else {
        selectedQuestions.forEach((q, index) => {
            let qImgHtml = q.qImg ? `<img src="${q.qImg}" alt="問題の図表" class="problem-img">` : "";
            let aImgHtml = q.aImg ? `<img src="${q.aImg}" alt="解答の図表" class="answer-img">` : "";

            container.innerHTML += `
                <div class="question-card">
                    <p style="color: #ff4d4d; border-bottom: 1px solid #555; padding-bottom: 5px;">
                        <strong>問題 ${index + 1}</strong> 
                        <span style="background: #fff; padding: 2px 8px; border-radius: 4px; font-size: 0.85em; margin: 0 8px; color: #b30000; font-weight: bold;">${q.univ}</span>
                        <span style="font-size: 0.9em; color: #aaa;">(難易度: ★${q.difficulty} / ${q.category})</span>
                    </p>
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
    renderMath();
}

// 6. 解答の表示/非表示切り替え
function toggleAnswer(elementId) {
    const el = document.getElementById(elementId);
    el.classList.toggle('hidden');
}

// 7. 問題検索モード：検索処理（複数選択・「すべて」対応）
function executeSearch() {
    const diffs = Array.from(document.querySelectorAll('input[name="search-difficulty"]:checked')).map(cb => cb.value);
    const cats = Array.from(document.querySelectorAll('input[name="search-category"]:checked')).map(cb => cb.value);

    // 何もチェックされていない場合はエラーメッセージ代わりに空にする
    if (diffs.length === 0 || cats.length === 0) {
        document.getElementById('search-results-container').innerHTML = "<p style='color:#ff4d4d;'>難易度とカテゴリをそれぞれ1つ以上選択してください。</p>";
        return;
    }

    let results = database.filter(q => {
        let matchDiff = diffs.includes("all") || diffs.includes(String(q.difficulty));
        let matchCat = cats.includes("all") || cats.includes(q.category);
        return matchDiff && matchCat;
    });

    const container = document.getElementById('search-results-container');
    container.innerHTML = "";

    if (results.length === 0) {
        container.innerHTML = "<p style='color:#ff4d4d;'>該当する問題がありません。</p>";
    } else {
        results.forEach(q => {
            let qImgHtml = q.qImg ? `<img src="${q.qImg}" alt="問題の図表" class="problem-img">` : "";
            let aImgHtml = q.aImg ? `<img src="${q.aImg}" alt="解答の図表" class="answer-img">` : "";

            container.innerHTML += `
                <div class="question-card">
                    <p style="color: #ff4d4d; border-bottom: 1px solid #555; padding-bottom: 5px;">
                        <span style="background: #fff; padding: 2px 8px; border-radius: 4px; font-size: 0.85em; margin-right: 8px; color: #b30000; font-weight: bold;">${q.univ}</span>
                        <span style="font-size: 0.9em; color: #aaa;">[★${q.difficulty} / ${q.category}]</span>
                    </p>
                    <p><strong>【問題文】</strong></p>
                    <div class="question-text">${q.qText}</div>
                    ${qImgHtml}
                    <p style="margin-top: 20px;"><strong>【解答・解説】</strong></p>
                    <div class="answer-text">${q.aText}</div>
                    ${aImgHtml}
                </div>
            `;
        });
    }
    
    renderMath();
}
