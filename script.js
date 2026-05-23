// 1. 仮のデータベース（ここに問題の画像URL等を追加していきます）
// ※画像URLは動作確認用にプレースホルダー（ダミー画像）を入れています
const database = [
    { id: 1, difficulty: 3, category: "数学Ⅰ", qImg: "https://via.placeholder.com/500x200?text=Question+1+(Math+I+Lv3)", aImg: "https://via.placeholder.com/500x150?text=Answer+1", eImg: "https://via.placeholder.com/500x300?text=Explanation+1" },
    { id: 2, difficulty: 3, category: "数学A", qImg: "https://via.placeholder.com/500x200?text=Question+2+(Math+A+Lv3)", aImg: "https://via.placeholder.com/500x150?text=Answer+2", eImg: "https://via.placeholder.com/500x300?text=Explanation+2" },
    { id: 3, difficulty: 5, category: "数学Ⅲ", qImg: "https://via.placeholder.com/500x200?text=Question+3+(Math+III+Lv5)", aImg: "https://via.placeholder.com/500x150?text=Answer+3", eImg: "https://via.placeholder.com/500x300?text=Explanation+3" },
    { id: 4, difficulty: 3, category: "数学Ⅰ", qImg: "https://via.placeholder.com/500x200?text=Question+4+(Math+I+Lv3)", aImg: "https://via.placeholder.com/500x150?text=Answer+4", eImg: "https://via.placeholder.com/500x300?text=Explanation+4" },
];

// 2. 画面切り替え関数
function switchScreen(screenId) {
    // すべての画面を隠す
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    // 指定された画面だけ表示する
    document.getElementById(screenId).classList.remove('hidden');
}

// 3. 演習モード：ボタンの活性化チェック
const practiceForm = document.getElementById('practice-form');
const btnStart = document.getElementById('btn-start-practice');

practiceForm.addEventListener('change', () => {
    const diffSelected = document.querySelector('input[name="difficulty"]:checked');
    const catSelected = document.querySelector('input[name="category"]:checked');
    const countSelected = document.getElementById('question-count').value;

    // 全て選択されていればボタンを有効化
    if (diffSelected && catSelected && countSelected !== "") {
        btnStart.disabled = false;
    } else {
        btnStart.disabled = true;
    }
});

// 4. 演習モード：開始処理とランダム抽出
function startPractice() {
    // 条件の取得
    const diff = parseInt(document.querySelector('input[name="difficulty"]:checked').value);
    const cats = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const count = parseInt(document.getElementById('question-count').value);

    // データベースから条件に合うものをフィルタリング
    let filteredQuestions = database.filter(q => q.difficulty === diff && cats.includes(q.category));

    // ランダムにシャッフル
    filteredQuestions.sort(() => 0.5 - Math.random());
    
    // 指定された問題数だけ切り出す
    let selectedQuestions = filteredQuestions.slice(0, count);

    // 画面に描画
    const container = document.getElementById('practice-container');
    container.innerHTML = ""; // クリア

    if (selectedQuestions.length === 0) {
        container.innerHTML = "<p>条件に一致する問題がありませんでした。</p>";
    } else {
        selectedQuestions.forEach((q, index) => {
            container.innerHTML += `
                <div class="question-card">
                    <p><strong>問題 ${index + 1}</strong> (難易度: ★${q.difficulty} / ${q.category})</p>
                    <img src="${q.qImg}" alt="問題画像">
                    <button onclick="toggleAnswer('ans-${q.id}')">解答を表示</button>
                    <div id="ans-${q.id}" class="answer-section hidden">
                        <img src="${q.aImg}" alt="解答画像">
                    </div>
                </div>
            `;
        });
    }

    switchScreen('screen-practice-questions');
}

// 5. 解答の表示/非表示切り替え
function toggleAnswer(elementId) {
    const el = document.getElementById(elementId);
    el.classList.toggle('hidden');
}

// 6. 問題検索モード：検索処理
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
            container.innerHTML += `
                <div class="question-card">
                    <p><strong>[★${q.difficulty} / ${q.category}]</strong></p>
                    <p>【問題文】</p><img src="${q.qImg}">
                    <p>【解答】</p><img src="${q.aImg}">
                    <p>【解説】</p><img src="${q.eImg}">
                </div>
            `;
        });
    }
}
