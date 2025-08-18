import { useState } from 'react'
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
function HomePage() {
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

      {/* System Requirements
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 blood-text">システム要件</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="horror-gradient border-red-900/30">
              <CardHeader>
                <CardTitle className="text-green-400">推奨環境</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-300">
                <p><strong>OS:</strong> Windows 10 64-bit</p>
                <p><strong>CPU:</strong> Intel i7-8700K / AMD Ryzen 7 2700X</p>
                <p><strong>メモリ:</strong> 16 GB RAM</p>
                <p><strong>グラフィック:</strong> RTX 3070 / RX 6700 XT</p>
                <p><strong>ストレージ:</strong> 50 GB 利用可能領域</p>
              </CardContent>
            </Card>

            <Card className="horror-gradient border-red-900/30">
              <CardHeader>
                <CardTitle className="text-yellow-400">最小環境</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-300">
                <p><strong>OS:</strong> Windows 10 64-bit</p>
                <p><strong>CPU:</strong> Intel i5-6600K / AMD Ryzen 5 1600</p>
                <p><strong>メモリ:</strong> 8 GB RAM</p>
                <p><strong>グラフィック:</strong> GTX 1060 / RX 580</p>
                <p><strong>ストレージ:</strong> 50 GB 利用可能領域</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

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
function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    if (password === 'Adventus') {
      setIsAuthenticated(true)
    } else {
      alert('パスワードが間違っています')
    }
  }

  if (!isAuthenticated) {
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

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="horror-gradient border-red-900/30">
              <CardHeader>
                <CardTitle className="text-green-400">開発状況</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>ゲームプレイ</span>
                    <Badge className="bg-green-600">完了</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>グラフィック</span>
                    <Badge className="bg-green-600">完了</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>サウンド</span>
                    <Badge className="bg-yellow-600">進行中</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>最適化</span>
                    <Badge className="bg-red-600">未着手</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="horror-gradient border-red-900/30">
              <CardHeader>
                <CardTitle className="text-blue-400">統計情報</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-300">
                  <p><strong>総プレイ時間:</strong> 1,234時間</p>
                  <p><strong>バグ報告:</strong> 23件</p>
                  <p><strong>テスター数:</strong> 15人</p>
                  <p><strong>完成度:</strong> 85%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="horror-gradient border-red-900/30">
              <CardHeader>
                <CardTitle className="text-purple-400">リリース予定</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-300">
                  <p><strong>アルファ版:</strong> 完了</p>
                  <p><strong>ベータ版:</strong> 2025年3月</p>
                  <p><strong>正式版:</strong> 2025年6月</p>
                  <p><strong>DLC第1弾:</strong> 2025年9月</p>
                </div>
              </CardContent>
            </Card>
          </div> */}

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
  return (
    <Router>
      <div className="dark">
        <Navigation />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

