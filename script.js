// 1. テキストベースの問題データベース（計49題）
// ※JS内でLaTeXを正しく表示させるため、\ を \\ にエスケープしています。
const database = [
    // --- 前回の4題 ---
    { 
        id: 1, univ: "東京大(令和8年)", difficulty: 5, category: "数学Ⅱ", 
        qText: "正の実数 $k$ および $\\alpha < \\beta$ となる実数 $\\alpha, \\beta$ が次の条件を満たすように動く。\n条件: 座標平面上の放物線 $C: y = k(x - \\alpha)(\\beta - x)$ の頂点は $(-3, 1)$ であり、$C$ は $y$ 軸と $-2 \\le y \\le 0$ の範囲で交わる。\nこのとき、$C$ と $x$ 軸で囲まれる図形の面積 $S$ のとりうる値の範囲を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 2, univ: "東京大(令和8年)", difficulty: 5, category: "数学A", 
        qText: "$n$ を正の整数とする。座標平面上の $3n$ 個の点がなす集合\n$\\{(x, y) \\mid x, y \\text{ は } 1 \\le x \\le 3, 1 \\le y \\le n \\text{ を満たす整数}\\}$\nから相異なる3点を選ぶ。ただし、どの3点も等確率で選ばれるものとする。選んだ3点が三角形の3頂点となる確率を $p_{n}$ とする。\n(1) $p_{5}$ を求めよ。\n(2) $m$ を2以上の整数とする。$p_{2m}$ を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 3, univ: "東京大(令和8年)", difficulty: 5, category: "数学Ⅱ", 
        qText: "$0 < a < 1$ とし、関数 $f(x)$ を\n$$f(x) = \\frac{a}{8}(x - 1)^{2} + \\frac{2}{a} - 3$$\nと定める。また、関数 $g(x)$ を次のように定める。整数 $n$ に対し、\n$2n \\le x < 2n + 1$ のとき $g(x) = x - 2n$\n$2n + 1 \\le x < 2n + 2$ のとき $g(x) = -x + 2n + 2$\nとする。\n(1) $x \\ge 4$ において $f(x) > g(x)$ を示せ。\n(2) $\\frac{1}{2} < a < \\frac{2}{3}$ とする。座標平面上の $y = f(x)$ のグラフと $y = g(x)$ のグラフの $x \\ge 0$ の範囲における共有点の個数を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 4, univ: "東京大(令和8年)", difficulty: 5, category: "数学Ⅱ", 
        qText: "$k$ を実数とし、座標平面上の曲線 $C$ を $y = x^{3} - kx$ で定める。$C$ 上の2点 $P, Q$ に対する以下の条件(*)を考える。\n条件(*) 原点 $O$, 点 $P$, 点 $Q$ は相異なり、$C$ の $O, P, Q$ における接線のうち、どの2本も交わり、そのなす角はすべて $\\frac{\\pi}{3}$ となる。\nただし、2直線のなす角は $0$ 以上 $\\frac{\\pi}{2}$ 以下の範囲で考えるものとする。\n(1) $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{6}$ とする。$\\tan\\left(\\theta + \\frac{\\pi}{3}\\right)$ を $\\tan\\theta$ を用いて表せ。\n(2) 条件(*)を満たす $P, Q$ が存在するような $k$ の範囲を求めよ。\n(3) $k$ が(2)で定まる範囲にあるとする。$P, Q$ が条件(*)を満たすように動くとき、$C$ の $O, P, Q$ における接線によって囲まれる三角形の面積 $S$ の最大値を $M$、最小値を $m$ とおく。ただし、3本の接線が1点で交わるときは $S = 0$ とする。$M = 4m$ となる $k$ の値を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },

    // --- 追加の45題 ---
    { 
        id: 5, univ: "京都大", difficulty: 4, category: "数学Ⅱ", 
        qText: "すべては 0 でない $n$ 個の実数 $a_1, a_2, \\dots, a_n$ があり $a_1 \\le a_2 \\le \\dots \\le a_n$ かつ $a_1 + a_2 + \\dots + a_n = 0$ を満たすとき $a_1 + 2a_2 + \\dots + na_n > 0$ が成り立つことを証明せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 6, univ: "東京大", difficulty: 5, category: "数学Ⅲ", 
        qText: "$xy$ 平面に 2 つの円 $C_0: x^2 + (y - \\frac{1}{2})^2 = \\frac{1}{4}, C_1: (x-1)^2 + (y - \\frac{1}{2})^2 = \\frac{1}{4}$ をとり、$C_2$ を $x$ 軸と $C_0, C_1$ に接する円とする。さらに、$n = 2, 3, \\dots$ に対して $C_{n+1}$ を $x$ 軸と $C_{n-1}, C_n$ に接する円で $C_{n-2}$ とは異なるものとする。$C_n$ の半径を $r_n$、$C_n$ と $x$ 軸の接点を $(x_n, 0)$ として、$q_n = \\frac{1}{\\sqrt{2r_n}}, p_n = q_n x_n$ とおく。\n(1) $q_n$ は整数であることを示せ。\n(2) $p_n$ も整数で、$p_n$ と $q_n$ は互いに素であることを示せ。\n(3) $\\alpha$ を $\\alpha = \\frac{1}{1 + \\alpha}$ を満たす正の数として、不等式 $|x_{n+1} - \\alpha| < \\frac{2}{3} |x_n - \\alpha|$ を示し、極限 $\\lim_{n \\to \\infty} x_n$ を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 7, univ: "名古屋大", difficulty: 4, category: "数学C", 
        qText: "座標空間内の 6 つの平面 $x=0, x=1, y=0, y=1, z=0, z=1$ で囲まれた立方体を $C$ とする。$\\vec{l} = (-a_1, -a_2, -a_3)$ を $a_1 > 0, a_2 > 0, a_3 > 0$ を満たし、大きさが 1 のベクトルとする。$H$ を原点 O を通りベクトル $\\vec{l}$ に垂直な平面とする。\nこのとき、ベクトル $\\vec{l}$ を進行方向にもつ光線により平面 $H$ に生じる立方体 $C$ の影の面積を、$a_1, a_2, a_3$ を用いて表せ。ここに、$C$ の影とは $C$ 内の点から平面 $H$ へ引いた垂線の足全体のなす図形である。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 8, univ: "東京大", difficulty: 4, category: "数学A", 
        qText: "$n$ を 2 以上の整数とする。自然数（1 以上の整数）の $n$ 乗になる数を $n$ 乗数とよぶことにする。\n(1) 連続する 2 個の自然数の積は $n$ 乗数でないことを示せ。\n(2) 連続する $n$ 個の自然数の積は $n$ 乗数でないことを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 9, univ: "東京工業大", difficulty: 4, category: "数学Ⅰ", 
        qText: "$R$ を、隣り合う 2 辺の長さ $a, b$ が $2a > b > a$ を満たす長方形とし、$A$ を次の性質 (a) をもつ半径 $x$ の円とする。\n(a) $R$ の内部にあって、隣り合う 2 辺にだけ接する。\n(1) 連続性 (a) をもつ円で、円 $A$ に外接するものが 4 つ存在するために、円 $A$ の半径 $x$ が満たすべき条件を $a, b$ を用いて表せ。\n(2) $x$ が (1) の条件を満たすとき、円 $A$ に外接する 4 つの円のうち 2 番目に大きい円を $B$ とする。$x$ が変化するとき、円 $A$ と円 $B$ の面積の和の最小値を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 10, univ: "浜松医科大", difficulty: 4, category: "数学Ⅲ", 
        qText: "(1) $n$ 個の異なるものの円順列の総数を $a_n$ とし、$b_n = \\frac{10^n}{\\sqrt{a_n}}$ ($n = 1, 2, 3, \\dots$) と定義する。このとき、数列 $\\{b_n\\}$ はどのような漸化式を満たすか。また、$\\lim_{n \\to \\infty} b_n = 0$ を示せ。\n(2) $z_1 = 1, z_{n+1} = 2( \\frac{1}{\\sqrt{6}} + \\frac{i}{\\sqrt{n}} ) z_n$ ($n = 1, 2, 3, \\dots$) で定義される複素数列 $\\{z_n\\}$ について\n(ア) $z_n$ の絶対値 $|z_n|$ が最大となるような $n$ をすべて求めよ。\n(イ) $z_n$ の偏角 $\\arg z_n$ を次の条件を満たすように定める。 $\\arg z_1 = 0, 0 \\le \\arg z_{n+1} - \\arg z_n < 2\\pi$ ($n=1, 2, 3, \\dots$)\nこのとき、$\\arg z_n > \\pi$ となるような最小の $n$ を求めよ。さらに、$n \\to \\infty$ のとき $\\arg z_n \\to \\infty$ となることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 11, univ: "東京大", difficulty: 4, category: "数学A", 
        qText: "$xy$ 平面において、$x$ 座標、$y$ 座標がともに整数であるような点を格子点と呼ぶ。格子点を頂点にもつ三角形 ABC を考える。\n(1) 辺 AB, AC それぞれの上に両端を除いて奇数個の格子点があるとする。このとき、辺 BC 上にも両端を除いて奇数個の格子点があることを示せ。\n(2) 辺 AB, AC 上に両端を除いてちょうど 3 個ずつ格子点が存在するとき、三角形 ABC の面積は 8 で割り切れる整数であることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 12, univ: "東京大", difficulty: 4, category: "数学B", 
        qText: "$n$ を 2 以上の自然数とする。$x_1 \\ge x_2 \\ge \\dots \\ge x_n$ および $y_1 \\ge y_2 \\ge \\dots \\ge y_n$ を満足する数列 $x_1, x_2, \\dots, x_n$ および $y_1, y_2, \\dots, y_n$ が与えられている。$y_1, y_2, \\dots, y_n$ を並べ替えて得られるどのような数列 $z_1, z_2, \\dots, z_n$ に対しても $\\sum_{i=1}^n (x_i - y_i)^2 \\le \\sum_{i=1}^n (x_i - z_i)^2$ が成り立つことを証明せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 13, univ: "北海道大", difficulty: 3, category: "数学Ⅲ", 
        qText: "(1) $p$ を正の定数とし、点 F(0, $p$) を焦点にもち、$y = -p$ を準線とする放物線を $C$ とする。$C$ 上の点 Q($x_0, y_0$) (ただし $x_0 \\ne 0$) を考え、点 Q と点 F を通る直線を $l_1$、点 Q を通り放物線 $C$ の軸に平行な直線を $l_2$ とする。このとき、点 Q における $C$ の接線 $l$ は、$l_1$ と $l_2$ のなす角を 2 等分することを示せ。\n(2) 放物線 $y = x^2 - 2\\sqrt{2}x + 4$ 上の点 R($a, b$) ($a > \\sqrt{2}$) における接線と直線 $x = a$ のなす角を $\\theta$ ($0^\\circ < \\theta < 90^\\circ$) とする。点 R を通り傾きが $\\frac{1 - \\tan^2 \\theta}{2 \\tan \\theta}$ である直線は $a$ によらない定点を通ることを示し、その定点の座標を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 14, univ: "東北大", difficulty: 4, category: "数学Ⅲ", 
        qText: "$a, b$ を $0 < b < a$ を満たす実数として、楕円 $C: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ を考える。\n(1) $0 < t \\le \\frac{\\pi}{2}$ とする。座標が $(a \\cos t, b \\sin t)$ の $C$ 上の点を P($t$) とおく。P($t$) における $C$ の接線 $l$ の方程式と、$l$ と $x$ 軸の交点 Q($t$) の座標を求めよ。\n(2) $xyz$ 空間内の立体 $V$ で、底面が平面 $z=0$ において $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} \\le 1, 0 \\le x, 0 \\le y$ で与えられ、$z$ 軸の正の方向への高さが線分 P($t$)Q($t$) 上の各点で $t$ となるものを考える。ただし、点 $(a, 0)$ と点 $(\\frac{a^2 - b^2}{a}, 0)$ を結ぶ線分上の点での高さは 0 とする。$V$ の平面 $z=s$ による断面積を求めよ。\n(3) $V$ の体積を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 15, univ: "東京工業大", difficulty: 4, category: "数学Ⅰ", 
        qText: "1 辺の長さが 1 の正方形の紙を 1 本の線分に沿って折り曲げたとき、2 重になる部分の多角形を $P$ とする。$P$ が線対称な五角形になるように折るとき、$P$ の面積の最小値を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 16, univ: "東京大", difficulty: 4, category: "数学Ⅱ", 
        qText: "3 次関数 $h(x) = px^3 + qx^2 + rx + s$ は、条件\n(A) $h(1) = 1, h(-1) = -1$\n(B) 区間 $-1 < x < 1$ で極大値 1、極小値 -1\nを満たすものとする。\n(1) $h(x)$ を求めよ。\n(2) 3 次関数 $f(x) = ax^3 + bx^2 + cx + d$ が区間 $-1 < x < 1$ で $-1 < f(x) < 1$ を満たすとき、$|x| > 1$ なる任意の実数 $x$ に対して、不等式 $|f(x)| < |h(x)|$ が成立することを証明せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 17, univ: "大阪大", difficulty: 4, category: "数学A", 
        qText: "立方体 $X$ と球 $Y$ があって、両者の体積は等しいとする。このとき、次の問いに答えよ。ただし、円周率は $\\pi = 3.14\\dots$ である。\n(1) 立方体 $X$ と球 $Y$ を動かして、立方体 $X$ のなるべく多くの頂点が球 $Y$ の内部に含まれるようにしたい。最大何個の頂点が含まれるようにできるか。\n(2) 立方体 $X$ と球 $Y$ を動かして、立方体 $X$ のなるべく多くの辺が球 $Y$ の内部と共通点をもつようにしたい。最大何個の辺が共通点をもつようにできるか。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 18, univ: "大分医科大", difficulty: 3, category: "数学Ⅱ", 
        qText: "$0 \\le x \\le 1, 0 \\le y \\le 1, 0 \\le z \\le 1$ の範囲で、$\\frac{x + y + z}{3} + \\sqrt{x(1-x) + y(1-y) + z(1-z)}$ のとりうる値の最大値を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 19, univ: "東京大", difficulty: 5, category: "数学B", 
        qText: "$N$ を正の整数とする。$2N$ 個の項からなる数列 $\\{a_1, a_2, \\dots, a_N, b_1, b_2, \\dots, b_N\\}$ を $\\{b_1, a_1, b_2, a_2, \\dots, b_N, a_N\\}$ という数列に並べ替える操作を「シャッフル」と呼ぶことにする。並べ替えた数列は $b_1$ を初項とし、$b_i$ の次に $a_i$、$a_i$ の次に $b_{i+1}$ が来るようなものになる。また、数列 $\\{1, 2, \\dots, 2N\\}$ をシャッフルしたときに得られる数列において、数 $k$ が現れる位置を $f(k)$ で表す。\n例えば、$N=3$ のとき $\\{1, 2, 3, 4, 5, 6\\}$ をシャッフルすると $\\{4, 1, 5, 2, 6, 3\\}$ となるので、$f(1)=2, f(2)=4, f(3)=6, f(4)=1, f(5)=3, f(6)=5$ である。\n(1) 数列 $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$ を 3 回シャッフルしたときに得られる数列を求めよ。\n(2) $1 \\le k \\le 2N$ を満たすすべての整数 $k$ に対し、$f(k) - 2k$ は $2N + 1$ で割り切れることを示せ。\n(3) $n$ を正の整数とし、$N = 2^{n-1}$ のときを考える。数列 $\\{1, 2, \\dots, 2N\\}$ を $2n$ 回シャッフルすると、$\\{1, 2, \\dots, 2N\\}$ に戻ることを証明せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 20, univ: "東京大", difficulty: 4, category: "数学Ⅱ", 
        qText: "半径 10 の円 $C$ がある。半径 3 の円板 $D$ を、円 $C$ に内接させながら、円 $C$ の円周に沿って滑ることなく転がす。円板 $D$ の周上の 1 点を P とすると、点 P が円 $C$ の円周に接してから再び円 $C$ の円周に接するまでに描く曲線は、円 $C$ を 2 つの部分に分ける。それぞれの面積を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 21, univ: "京都府立医科大", difficulty: 3, category: "数学A", 
        qText: "自然数 $n$ に対して、$f(n) = 5^{3n} + 5^{2n} + 5^n + 1$ とおく。\n(1) $n$ が 4 の倍数でないとき、$f(n)$ は 13 で割り切れることを示せ。\n(2) $n$ が 4 の倍数のとき、$f(n)$ を 13 で割った余りを求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 22, univ: "東京大", difficulty: 4, category: "数学Ⅱ", 
        qText: "$xy$ 平面内に 2 つの集合 $L = \\{(-5, y) \\mid -5 < y < 5\\}$, $M = \\{(5, y) \\mid -5 < y < 5\\}$ を考える。\n$L, M$ 上にない 2 点 A, B に対し、A, B を $L, M$ と交わらない線分または折れ線で結んだときの経路の長さの最小値を $d(A, B)$ で表す。\n2 点 P(-9, -3), Q(9, 3) に対し $d(P, R) = d(Q, R)$ となる点 R の軌跡を $xy$ 平面に図示せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 23, univ: "類 徳島大", difficulty: 2, category: "数学Ⅱ", 
        qText: "自然数 $n$ に対して、$a_1 > 0, a_2 > 0, \\dots, a_n > 0$ とする。次の不等式が成り立つことを証明せよ。\n(1) $a_1 a_2 \\dots a_n = 1$ ならば $a_1 + a_2 + \\dots + a_n \\ge n$\n(2) $(\\frac{a_1 + a_2 + \\dots + a_n}{n})^n \\ge a_1 a_2 \\dots a_n$",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 24, univ: "神戸大", difficulty: 4, category: "数学A", 
        qText: "自然数 $n$ に対し、$2^k$ が $n$ を割り切るような 0 以上の整数 $k$ の最大値を $f(n)$ とする。\n(1) $f(n)=k$ のとき $n=2^k r$ と書くと、$r$ は奇数であることを示せ。\n(2) 自然数 $m, n$ に対し $f(mn) = f(m) + f(n)$ が成り立つことを示せ。\n(3) 自然数 $m, n$ に対し $f(m+n) \\ge \\min\\{f(m), f(n)\\}$ が成り立つことを示せ。ただし、整数 $p, q$ に対して $\\min\\{p, q\\}$ は $p \\le q$ のとき $\\min\\{p, q\\}=p$, $p > q$ のとき $\\min\\{p, q\\}=q$ である。\n(4) $n$ は 2 以上の自然数とし、$f(n)=k$ であるとする。いま、$m=1, 2, \\dots, n-1$ に対して $f(m+n)=f(m)$ が成り立つならば、$n=2^k$ であることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 25, univ: "京都大", difficulty: 4, category: "数学A", 
        qText: "座標平面において、$x$ 座標、$y$ 座標がともに整数である点を格子点と呼ぶ。4 つの格子点 O(0, 0), A($a, 0$), B($a, b+1$), C(0, 1) を考える。ただし、$a, b$ は正の整数で、その最大公約数は 1 である。\n(1) 平行四辺形 OABC の内部（辺、頂点は含めない）に格子点はいくつあるか。\n(2) (1) の格子点全体を $P_1, P_2, \\dots, P_t$ とするとき、$\\triangle OP_i A$ ($i=1, 2, \\dots, t$) の面積のうちの最小値を求めよ。ただし $a > 1$ とする。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 26, univ: "東京大", difficulty: 5, category: "数学Ⅱ", 
        qText: "$C$ を $y = x^3 - x, -1 \\le x \\le 1$ で与えられる $xy$ 平面上の図形とする。次の条件を満たす $xy$ 平面上の点 P 全体の集合を図示せよ。\n「$C$ を平行移動した図形で、点 P を通り、かつ、もとの図形 $C$ との共有点がただ 1 点であるようなものがちょうど 3 個存在する。」",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 27, univ: "京都大", difficulty: 4, category: "数学Ⅰ", 
        qText: "次のことが成り立つことを示せ。\n(1) 底辺の長さ $a$ が一定で他の 2 辺の長さの和 $m$ も一定 ($m > a$) であるような三角形のうち、面積最大のものは二等辺三角形である。\n(2) 周囲の長さが一定の四角形のうち、面積最大のものは正方形である。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 28, univ: "東京大", difficulty: 5, category: "数学B", 
        qText: "空間内の点 O を中心とする 1 辺の長さが 1 の立方体の頂点を $A_1, A_2, \\dots, A_8$ とする。また、O を中心とする半径 $r$ の球面を $S$ とする。\n(1) $S$ 上のすべての点から $A_1, A_2, \\dots, A_8$ のうち少なくとも 1 点が見えるための必要十分条件を $l$ と $r$ で表せ。\n(2) $S$ 上のすべての点から $A_1, A_2, \\dots, A_8$ のうち少なくとも 2 点が見えるための必要十分条件を $l$ と $r$ で表せ。\nただし、$S$ 上の点 P から $A_k$ が見えるとは、$A_k$ が $S$ の外側にあり、線分 $PA_k$ と $S$ との共有点が P のみであることをする。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 29, univ: "東京工業大", difficulty: 5, category: "数学Ⅲ", 
        qText: "(1) $m \\ge 0, n \\ge 1$ である整数 $m, n$ に対し $a_{m,n} = \\int_0^{\\pi/2} \\theta^m \\cos n\\theta d\\theta, b_{m,n} = \\int_0^{\\pi/2} \\theta^m \\sin n\\theta d\\theta$ とおくとき、次の式を示せ。\n$a_{m+1,n} = - \\frac{m+1}{n} b_{m,n}, b_{m+1,n} = (-1)^{n+1} \\frac{\\pi^{m+1}}{n \\cdot 2^{m+1}} + \\frac{m+1}{n} a_{m,n}$\n(2) 半径 1 の球面上の一点を端点とする長さ $\\pi$ のひもを考える。このひもが球の外側の空間を動くとき、ひもの通過しうる領域の体積を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 30, univ: "北海道大", difficulty: 4, category: "数学Ⅲ", 
        qText: "$f(x)$ は最高次の係数が 1 の整式とする。\n(1) 自然数 $n, m$ に対し、$\\int_n^m t^m dt \\le \\sum_{k=n}^m k^m \\le \\int_n^{m+1} t^m dt$ を示せ。\n(2) $f(x)$ の次数を $r$ とするとき、次が成り立つことを示せ。\n$\\lim_{n \\to \\infty} \\frac{1}{n^{r+1}} \\sum_{k=1}^n f(k) = \\frac{1}{r+1}$\n(3) すべての自然数 $n$ に対して $\\frac{1}{n} \\sum_{k=1}^n f(k) = \\frac{1}{2} f(n)$ が成り立つような $f(x)$ を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 31, univ: "大阪大", difficulty: 4, category: "数学Ⅲ", 
        qText: "$a, b, c$ を正の定数とし、$x$ の関数 $f(x) = x^3 + ax^2 + bx + c$ を考える。以下、定数はすべて実数とする。\n(1) 定数 $p, q$ に対し、次を満たす定数 $r$ が存在することを示せ。\n$x \\ge 1$ ならば $|px + q| \\le rx$\n(2) 恒等式 $(\\alpha-\\beta)(\\alpha^2+\\alpha\\beta+\\beta^2) = \\alpha^3 - \\beta^3$ を用いて、次を満たす定数 $k$、$l$ が存在することを示せ。\n$x \\ge 1$ ならば $|\\sqrt{f(x)} - x - k| \\le \\frac{l}{x}$\n(3) すべての自然数 $n$ に対して $\\sqrt{f(n)}$ が自然数であるとする。このとき、関数 $f(x)$ は、自然数の定数 $m$ を用いて $f(x) = (x+m)^3$ と表されることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 32, univ: "名古屋大", difficulty: 3, category: "数学Ⅱ", 
        qText: "$xy$ 平面上に 3 点 O(0, 0), A(1, 0), B(0, 1) がある。\n(1) $a > 0$ とする。OP:AP = 1:$a$ を満たす点 P の軌跡を求めよ。\n(2) $a > 0, b > 0$ とする。OP:AP:BP = 1:$a$:$b$ を満たす点 P が存在するための $a, b$ に対する条件を求め、$ab$ 平面上に図示せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 33, univ: "東京工業大", difficulty: 4, category: "数学Ⅱ", 
        qText: "$x_i$ ($i=1, 2, \\dots, n$) を正の数とし、$\\sum_{i=1}^n x_i = k$ を満たすとする。このとき、不等式 $\\sum_{i=1}^n x_i \\log x_i \\ge k \\log \\frac{k}{n}$ を証明せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 34, univ: "京都大", difficulty: 5, category: "数学B", 
        qText: "$n, k$ は整数で、$n \\ge 2, 0 \\le k \\le 4$ とする。サイコロを $n$ 回投げて出た目の和を 5 で割ったときの余りが $k$ に等しくなる確率を $p_n(k)$ とする。\n(1) $p_{n+1}(0), \\dots, p_{n+1}(4)$ を $p_n(0), \\dots, p_n(4)$ を用いて表せ。\n(2) $p_n(0), \\dots, p_n(4)$ の最大値を $M_n$、最小値を $m_n$ とするとき、次の (ア), (イ) が成立することを示せ。\n(ア) $m_n \\le \\frac{1}{5} \\le M_n$\n(イ) 任意の $k, l$ ($0 \\le k, l \\le 4$) に対し $|p_{n+1}(k) - p_{n+1}(l)| \\le \\frac{1}{6} (M_n - m_n)$\n(3) $\\lim_{n \\to \\infty} p_n(k)$ を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 35, univ: "東京大", difficulty: 4, category: "数学Ⅱ", 
        qText: "多項式の列 $P_0(x)=0, P_1(x)=1, P_2(x)=1+x, \\dots, P_n(x)=\\sum_{k=0}^{n-1} x^k$ を考える。\n(1) 正の整数 $n, m$ に対して、$P_n(x)$ を $P_m(x)$ で割った余りは $P_0(x), P_1(x), \\dots, P_{m-1}(x)$ のいずれかであることを証明せよ。\n(2) 等式 $P_l(x) P_m(x^2) P_n(x^4) = P_{100}(x)$ が成立するような正の整数の組 $(l, m, n)$ をすべて求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 36, univ: "千葉大", difficulty: 3, category: "数学Ⅱ", 
        qText: "AB を直径とする半円がある。周上の弧 PQ を弦 PQ で折り返したとき、折り返された弧が AB に接したとする。このような弦 PQ の存在する範囲を求めて図示せよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 37, univ: "九州大", difficulty: 3, category: "数学Ⅱ", 
        qText: "3 次関数 $y = x^3 + ax^2 + bx + c$ のグラフを $G$ とする。\n(1) $xy$ 平面上の点 $(p, q)$ に関する、点 $(X, Y)$ に対称な点の座標を求めよ。\n(2) $G$ はこの上のある点に関して点対称であることを示せ。\n(3) 直線 $mx + ny = 0$ に関する、点 $(X, Y)$ に対称な点の座標を求めよ。ただし、$m, n$ はともには 0 でないとする。\n(4) $G$ は原点を通るどんな直線に関しても線対称でないことを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 38, univ: "東京大", difficulty: 5, category: "数学Ⅲ", 
        qText: "$r$ を正の実数とする。$xyz$ 空間内の原点 O(0, 0, 0) を中心とする半径 1 の球を $A$、点 P($r, 0, 0$) を中心とする半径 1 の球を $B$ とする。球 $A$ と球 $B$ の和集合の体積を $V$ とする。ただし、球 $A$ と球 $B$ の和集合とは、球 $A$ または球 $B$ の少なくとも一方に含まれる点全体よりなる立体のことである。\n(1) $V$ を $r$ の関数として表し、そのグラフの概形をかけ。\n(2) $V=8$ となるとき、$r$ の値はいくらか。四捨五入して小数第 1 位まで求めよ。\n注意：円周率 $\\pi$ は $3.14 < \\pi < 3.15$ を満たす。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 39, univ: "東京大", difficulty: 5, category: "数学Ⅲ", 
        qText: "(1) $x, y$ を実数とし、$x > 0$ とする。$t$ を変数とする 2 次関数 $f(t) = xt^2 + yt$ の $0 \\le t \\le 1$ における最大値と最小値の差を求めよ。\n(2) 次の条件を満たす点 $(x, y)$ 全体からなる座標平面内の領域を $S$ とする。\n$x > 0$ かつ、実数 $z$ で $0 \\le t \\le 1$ の範囲のすべての実数 $t$ に対して $0 \\le xt^2 + yt + z \\le 1$ を満たすようなものが存在する。\n$S$ の概形を図示せよ。\n(3) 次の条件を満たす点 $(x, y, z)$ 全体からなる座標空間内の領域を $V$ とする。\n$0 \\le x \\le 1$ かつ、$0 \\le t \\le 1$ の範囲のすべての実数 $t$ に対して、$0 \\le xt^2 + yt + z \\le 1$ が成り立つ。\n$V$ の体積を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 40, univ: "京都大", difficulty: 5, category: "数学Ⅱ", 
        qText: "$f(x)$ は $x$ に関する $n$ 次の整式（多項式）とする ($n \\ge 0$)。\n(1) 2 変数 $x, y$ の整式として\n$f(x+y) = P_0(x) + P_1(x) y + P_2(x) y^2 + \\dots + P_n(x) y^n$\nと書き表す。ただし $P_i(x)$ ($i=0, 1, 2, \\dots, n$) は $x$ に関する整式である。\nこのとき $P_0(x)=f(x), P_1(x)=f'(x), P_2(x)=\\frac{1}{2}f''(x)$ かつ $P_n(x)=$「$f(x)$ における $x^n$ の係数」であることを示せ。\n(2) ある定数 $c$ があって $f(x+y) - f(x) = yf'(x+cy)$ が成立すれば、$f(x)$ の次数は 2 以下であることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 41, univ: "京都大", difficulty: 4, category: "数学Ⅱ", 
        qText: "3 次関数 $f(x) = x^3 + ax^2 + bx + c$ ($a, b, c$ は定数) のグラフ $y = f(x)$ と、定数 $m$ とを考える。\n(1) このグラフの接線で、傾き $m$ のものは何本あるか。\n(2) 傾き $m$ の接線が 2 本ある場合について、その接線 $l_1, l_2$ の接点を $P_1, P_2$ とし、$l_1, l_2$ がグラフと交わる他の点を $Q_1, Q_2$ とすれば、$P_1 Q_1 = P_2 Q_2$ であることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 42, univ: "東京工業大", difficulty: 5, category: "数学Ⅱ", 
        qText: "原点 O を中心とする半径 2 の円 $K$ の内部に、1 辺の長さが 2 で対角線の交点が O となるような正方形 ABCD をとる。$K$ 上の点 P において、線分 PO と角 $\\theta$ で交わる 2 本の半直線を描く。このとき、P が $K$ 上のどのような位置にあっても、これら 2 本の半直線が正方形 ABCD を通るような $\\theta$ の最大値を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 43, univ: "大阪大", difficulty: 5, category: "数学B", 
        qText: "座標空間において\n・平面 $z = \\sqrt{2}$ 上にある半径 $\\sqrt{2}$、中心 $(0, 0, \\sqrt{2})$ の円を $C_1$\n・平面 $z = -\\sqrt{2}$ 上にある半径 $\\sqrt{2}$、中心 $(0, 0, -\\sqrt{2})$ の円を $C_2$\nとする。また、空間内の点 P($x, y, z$) に対し\n・円 $C_1$ 上を動く点 Q と点 P の距離の最小値を $m$\n・円 $C_2$ 上を動く点 R と点 P の距離の最大値を $M$\nとする。次の問いに答えよ。\n(1) $r = \\sqrt{x^2 + y^2}$ とおくとき、$m$ と $M$ を $r$ および $z$ で表せ。\n(2) $|M^2 - 2\\sqrt{6}| \\ge m$ という条件を満たす点 P の範囲を $H$ とする。図形 $H$ の体積を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 44, univ: "東京大", difficulty: 5, category: "数学Ⅲ", 
        qText: "$n$ を正の整数とする。以下の問いに答えよ。\n(1) 関数 $g(x)$ を次のように定める。\n$g(x) = \\begin{cases} \\frac{\\cos(\\pi x) + 1}{2} & (|x| \\le 1 \\text{のとき}) \\\\ 0 & (|x| > 1 \\text{のとき}) \\end{cases}$\n$f(x)$ を連続な関数とし、$p, q$ を実数とする。$|x| \\le \\frac{1}{n}$ を満たす $x$ に対して $p \\le f(x) \\le q$ が成り立つとき、次の不等式を示せ。\n$p \\le n \\int_{-1}^1 g(nx) f(x) dx \\le q$\n(2) 関数 $h(x)$ を次のように定める。\n$h(x) = \\begin{cases} -\\frac{\\pi}{2} \\sin(\\pi x) & (|x| \\le 1 \\text{のとき}) \\\\ 0 & (|x| > 1 \\text{のとき}) \\end{cases}$\nこのとき、次の極限を求めよ。\n$\\lim_{n \\to \\infty} n^2 \\int_{-1}^1 h(nx) \\log(1 + e^{x+1}) dx$",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 45, univ: "東京工業大", difficulty: 4, category: "数学Ⅱ", 
        qText: "$C$ を半径 1 の円とし、その周上に長さ $\\theta$ の円弧 PQ をおく。$C$ と P で接し $C$ の内部にある円を $A$、$C$ と Q で接し $A$ にも接する円を $B$ とする。\n(1) $A$ と $B$ の面積の和の最小値 $S_\\theta$ を $\\theta$ で表せ。\n(2) $\\theta$ が 0 から $2\\pi$ まで動くとき、$S_\\theta$ の最大値を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 46, univ: "東京大", difficulty: 5, category: "数学Ⅱ", 
        qText: "$xy$ 平面上の長さ 2 の線分 AB を直径とする半円を $D$ とする。半円 $D$ の内部（周を含まない）の 1 点を P とする。A と P を通る直線と半円 $D$ の円弧の部分との交点を Q とし、B と P を通る直線と半円 $D$ の円弧の部分との交点を R とする。\n五角形 ARPQB の面積を $S$ とおく。\n(1) $\\angle APB$ を一定に保ったまま点 P が半円 $D$ の内部を動くとき、$S$ のとる値の範囲を、$\\angle APB = \\theta$ を使って表せ。\n(2) 点 P が半円 $D$ の内部を自由に動くとき、$S$ のとる値の範囲を求めよ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 47, univ: "東京大", difficulty: 4, category: "数学A", 
        qText: "さいころを振り、出た目の数で 17 を割った余りを $X_1$ とする。ただし、1 で割った余りは 0 である。次にさいころを振り、出た目の数で $X_1$ を割った余りを $X_2$ とする。以下同様にして、$X_n$ が決まればさいころを振り、出た目の数で $X_n$ を割った余りを $X_{n+1}$ とする。このようにして、$X_n$ ($n=1, 2, \\dots$) を定める。\n(1) $X_3 = 0$ となる確率を求めよ。\n(2) 各 $n$ に対し、$X_n = 5$ となる確率を求めよ。\n(3) 各 $n$ に対し、$X_n = 1$ となる確率を求めよ。\n(注意) さいころは 1 から 6 までの目が等確率で出るものとする。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 48, univ: "京都大", difficulty: 5, category: "数学C", 
        qText: "同一平面上に 2 つの三角形 $\\triangle ABC, \\triangle A'B'C'$ があり、それぞれの外接円の半径はともに 1 であるとする。この 2 つの外接円の中心を結ぶ線分の中点を M、線分 AA', BB', CC' の中点をそれぞれ P, Q, R とする。\n(1) $MP \\le 1, MQ \\le 1, MR \\le 1$ となることを示せ。\n(2) もし $\\triangle PQR$ が鋭角三角形で、その外接円の半径が 1 となるならば、点 M はこの外接円の中心と一致することを示せ。さらに、このとき $\\triangle ABC, \\triangle A'B'C', \\triangle PQR$ はすべて合同となることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
    },
    { 
        id: 49, univ: "京都大", difficulty: 4, category: "数学Ⅱ", 
        qText: "$a, b, c, d, e$ を正の実数として整式 $f(x) = ax^2 + bx + c$, $g(x) = dx + e$ を考える。すべての正の整数 $n$ に対して $\\frac{f(n)}{g(n)}$ は整数であるとする。このとき、$f(x)$ は $g(x)$ で割り切れることを示せ。",
        qImg: "", aText: "【解答・解説を作成して入力】", aImg: "" 
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

// 4. 数式を再レンダリングする関数
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
            let qImgHtml = q.qImg ? `<img src="${q.qImg}" alt="問題の図表" class="problem-img">` : "";
            let aImgHtml = q.aImg ? `<img src="${q.aImg}" alt="解答の図表" class="answer-img">` : "";

            // 大学名（univ）を追加表示
            container.innerHTML += `
                <div class="question-card">
                    <p style="color: #2b6cb0;">
                        <strong>問題 ${index + 1}</strong> 
                        <span style="background: #e2e8f0; padding: 2px 8px; border-radius: 12px; font-size: 0.85em; margin: 0 8px; color: #4a5568;">${q.univ}</span>
                        <span style="font-size: 0.9em; color: #718096;">(難易度: ★${q.difficulty} / ${q.category})</span>
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

            // 大学名（univ）を追加表示
            container.innerHTML += `
                <div class="question-card">
                    <p style="color: #2b6cb0;">
                        <span style="background: #e2e8f0; padding: 2px 8px; border-radius: 12px; font-size: 0.85em; margin-right: 8px; color: #4a5568;">${q.univ}</span>
                        <span style="font-size: 0.9em; color: #718096;">[★${q.difficulty} / ${q.category}]</span>
                    </p>
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
    
    renderMath();
}
