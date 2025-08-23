import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Skull, Target, Zap, Shield, Users, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import logoImage from './assets/adventus_mortis_logo.png'
import heroImage from './assets/adventus_mortis_hero.png'
import './App.css'

// Home Page Component
function HomePage({ showRanking, ranking, lastUpdated, rankingEnabled }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={logoImage}
              alt="Adventus Mortis"
              className="mx-auto mb-8 max-w-md w-full zombie-glow"
            />
            <h2 className="text-2xl md:text-4xl font-bold mb-6 blood-text glitch" data-text="死者との最終決戦">
              死者との最終決戦
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              ゾンビが支配する世界で生き残れ。最新のFPS技術と恐怖の体験が融合した、
              究極のサバイバルアクションゲーム。
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-red bg-red-600 hover:bg-red-700 text-white font-bold">
                <Target className="mr-2 h-5 w-5" />
                今すぐプレイ
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-400 hover:bg-red-600/10">
                <Skull className="mr-2 h-5 w-5" />
                トレーラーを見る
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 blood-text">ゲームの特徴</h2>
            <p className="text-xl text-gray-400">恐怖と興奮が交錯する究極のゲーム体験</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "リアルタイム戦闘",
                description: "緊張感溢れるリアルタイム戦闘を体験"
              },
              {
                icon: <Skull className="h-8 w-8" />,
                title: "恐怖の敵",
                description: "AIが制御するゾンビたちとの死闘"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "ランキングシステム",
                description: "ライバルたちとの熱い順位争いが君を待つ"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="horror-gradient border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                  <CardHeader>
                    <div className="text-red-400 mb-2">{feature.icon}</div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ランキング表示 */}
      <section className="py-12 px-4 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 blood-text">ランキング TOP10</h2>
            <p className="text-lg text-gray-400">最強の生存者たち</p>
            {rankingEnabled ? (
              <p className="text-sm text-gray-500 mt-2">
                最終更新: {lastUpdated ? new Date(lastUpdated).toLocaleTimeString() : "未取得"}
              </p>
            ) : (
              <p className="text-red-400 font-bold mt-2">ランキング機能は現在OFFです</p>
            )}
          </motion.div>
          <div className="bg-background/80 rounded-lg shadow-lg p-6">
            {rankingEnabled && ranking.length > 0 ? (
              <ol className="space-y-3">
                {ranking.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between px-4 py-2 border-b border-red-900/20">
                    <span className="font-bold text-red-400">{idx + 1}位</span>
                    <span className="text-white">{item.name}</span>
                    <span className="text-yellow-400 font-mono">{item.score}</span>
                  </li>
                ))}
              </ol>
            ) : rankingEnabled ? (
              <p className="text-gray-400 text-center">ランキングデータがありません</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 blood-text glitch" data-text="今すぐ戦いに参加せよ">
              今すぐ戦いに参加せよ
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              ゾンビの脅威から世界を救う最後の希望となれ
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Admin Page Component
function AdminPage({ rankingEnabled, setRankingEnabled }) {
  const [password, setPassword] = useState('')
  const [authLevel, setAuthLevel] = useState(null) // null, 'member', 'owner'

  const handleLogin = () => {
    if (password === 'Adventus') {
      setAuthLevel('member')
    } else if (password === 'Yuzu0731Adventus') {
      setAuthLevel('owner')
    } else {
      alert('パスワードが間違っています')
    }
  }

  // ON/OFF切り替え時の確認
  const handleRankingToggle = () => {
    if (rankingEnabled) {
      if (
        window.confirm(
          'ランキング表示をOFFにするとランキングデータが消失する恐れがあります。本当にOFFにしますか？'
        )
      ) {
        setRankingEnabled(false)
      }
    } else {
      if (
        window.confirm(
          'ランキング表示をONにしますか？'
        )
      ) {
        setRankingEnabled(true)
      }
    }
  }

  if (!authLevel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md horror-gradient border-red-900/30">
          <CardHeader>
            <CardTitle className="text-center blood-text">関係者専用ページ</CardTitle>
            <CardDescription className="text-center text-gray-400">
              パスワードを入力してください
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="bg-input border-red-900/30"
            />
            <Button
              onClick={handleLogin}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              ログイン
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 blood-text">関係者専用ダッシュボード</h1>

          {/* ランキング取得ON/OFF（自分だけ） */}
          {authLevel === 'owner' && (
            <Card className="mb-8 horror-gradient border-red-900/30">
              <CardHeader>
                <CardTitle className="text-red-400">ランキング表示設定</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <label className="text-gray-300 font-bold">ランキング表示</label>
                  <Button
                    variant={rankingEnabled ? "default" : "outline"}
                    className={rankingEnabled ? "bg-green-600" : "bg-gray-600"}
                    onClick={handleRankingToggle}
                  >
                    {rankingEnabled ? "ON" : "OFF"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 困ったときは（部員全員） */}
          <div className="mt-8">
            <Card className="horror-gradient border-red-900/30">
              <CardHeader>
                <CardTitle className="text-red-400">困ったときは</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-gray-300">
                  <div className="border-l-4 border-red-600 pl-4 space-y-2">
                    <h4 className="font-bold text-lg">ゲームが落ちた場合</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>画面がフリーズ、または落ちたら一旦落ちたウィンドウを閉じてください。</li>
                      <li>AdventusMortisのフォルダから「ADV_FPStemplate.exe」を探してダブルクリックしてください。</li>
                      <li>ゲームを再起動しても動かない場合はSlackで竹内柚翔にDMしてください。</li>
                    </ol>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-4 space-y-2">
                    <h4 className="font-bold text-lg">ランキング機能が正しく動かない場合</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>ランキングが表示されない場合はしばらく待ってください（1分以上待っても更新されない場合は異常です）</li>
                      <li>PCのインターネット接続が問題ないか確認してください。</li>
                      <li>上記で解消しない場合はSlackで竹内柚翔にDMしてください。</li>
                    </ol>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4 space-y-2">
                    <h4 className="font-bold text-lg">その他困ったことがあった場合</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>PCの設定を確認しても問題が無い場合はSlackで竹内柚翔にDMしてください。</li>
                    </ul>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold blood-text">
          ADVENTUS MORTIS
        </Link>
        <div className="flex gap-4">
          <Link to="/">
            <Button variant="ghost" className="text-gray-300 hover:text-red-400">
              ホーム
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="ghost" className="text-gray-300 hover:text-red-400">
              関係者ページ
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Main App Component
function App() {
  const [ranking, setRanking] = useState([])
  const [rankingEnabled, setRankingEnabled] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const intervalRef = useRef(null)

  // サーバーからランキングON/OFF状態を取得
  const fetchRankingEnabled = () => {
    fetch('https://adventusmortis-scoreserver.onrender.com/ranking-enabled')
      .then(res => res.json())
      .then(data => setRankingEnabled(!!data.enabled))
      .catch(() => setRankingEnabled(true))
  }

  // ランキング取得関数
  const fetchRanking = () => {
    if (!rankingEnabled) {
      setRanking([])
      setLastUpdated(null)
      return
    }
    fetch('https://adventusmortis-scoreserver.onrender.com/ranking')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.ranking)) {
          setRanking(data.ranking.slice(0, 10))
        } else {
          setRanking([])
        }
        setLastUpdated(Date.now())
      })
      .catch((err) => {
        console.error('ランキング取得失敗:', err)
        setRanking([])
        setLastUpdated(null)
      })
  }

  // 初回と60秒ごとにランキングON/OFF状態を取得
  useEffect(() => {
    fetchRankingEnabled()
    const interval = setInterval(fetchRankingEnabled, 60000)
    return () => clearInterval(interval)
  }, [])

  // ランキングON/OFF状態が変わったらランキング取得
  useEffect(() => {
    fetchRanking()
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (rankingEnabled) {
      intervalRef.current = setInterval(fetchRanking, 60000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [rankingEnabled])

  // 管理者画面からON/OFF変更時にサーバーへ反映
  const handleRankingEnabledChange = (newValue) => {
    fetch('https://adventusmortis-scoreserver.onrender.com/ranking-enabled', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enabled: newValue })
    })
      .then(() => setRankingEnabled(newValue))
      .catch(() => alert('設定変更に失敗しました'))
  }

  return (
    <Router>
      <div className="dark">
        <Navigation />
        <div className="pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  showRanking={rankingEnabled}
                  ranking={ranking}
                  lastUpdated={lastUpdated}
                  rankingEnabled={rankingEnabled}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <AdminPage
                  rankingEnabled={rankingEnabled}
                  setRankingEnabled={handleRankingEnabledChange}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

