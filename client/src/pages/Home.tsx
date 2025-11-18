import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ArrowRight, CheckCircle2, MessageCircle, Instagram, Send, Youtube, Facebook, ExternalLink } from "lucide-react";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="陳楷百家" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-foreground">陳楷百家 - <span className="text-primary">(本人代理)</span></h1>
          </div>
          <nav className="flex items-center gap-6">
            <a href="https://www.facebook.com/profile.php?id=61582415337645" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
              <Facebook className="h-7 w-7 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium hidden md:inline">Facebook</span>
            </a>
            <a href="https://www.youtube.com/@mt5801-v4b/shorts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
              <Youtube className="h-7 w-7 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium hidden md:inline">YouTube</span>
            </a>
            <a href="https://www.instagram.com/seven580108/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
              <Instagram className="h-7 w-7 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium hidden md:inline">Instagram</span>
            </a>
            <a href="https://t.me/ii5801" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
              <Send className="h-7 w-7 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium hidden md:inline">Telegram</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                基本五路規律解析--觀測法教學---59配住--心態調整
              </div>
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                致力於幫助您理解<br />
                <span className="text-primary">百家樂的思維邏輯</span>
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                思維拆解 × 心態訓練 × 實戰解析
              </p>
              <p className="text-base text-muted-foreground">
                知名老字號品牌 總線招收 代理 會員🤝<br />
                全台可面交 誠信 口碑 值得信賴
              </p>
              <div className="flex flex-col gap-4">
                <a href="https://page.line.me/mt5801" target="_blank" rel="noopener noreferrer" className="w-fit">
                  <Button className="group">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    加 Line 了解更多
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-lg font-semibold text-primary">追蹤我們：</span>
                </div>
                <div className="grid grid-cols-2 gap-4 w-fit">
                  <a href="https://www.facebook.com/profile.php?id=61582415337645" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-primary/10 hover:bg-primary/20 px-6 py-4 rounded-lg transition-all group">
                    <Facebook className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary">Facebook</span>
                  </a>
                  <a href="https://www.youtube.com/@mt5801-v4b/shorts" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-primary/10 hover:bg-primary/20 px-6 py-4 rounded-lg transition-all group">
                    <Youtube className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary">YouTube</span>
                  </a>
                  <a href="https://www.instagram.com/seven580108/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-primary/10 hover:bg-primary/20 px-6 py-4 rounded-lg transition-all group">
                    <Instagram className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary">Instagram</span>
                  </a>
                  <a href="https://t.me/ii5801" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-primary/10 hover:bg-primary/20 px-6 py-4 rounded-lg transition-all group">
                    <Send className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary">Telegram</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* YouTube Video */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CN5Deuv7RVo"
                  title="陳楷百家教學影片"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Registration Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              娛樂城平台註冊連結
            </h2>
            <p className="text-lg text-primary font-semibold mb-2">
              註冊好 加LINE 跟我領取優惠
            </p>
            <p className="text-sm text-muted-foreground">
              PS:必須用以下連結註冊才可以領優惠
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">大老爺 娛樂城</h3>
                <a href="https://CZ5801.gm1688.net" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full group">
                    立即註冊
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">雄厚 娛樂城</h3>
                <a href="https://CZ5801.meta1788.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full group">
                    立即註冊
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">八方娛樂城</h3>
                <a href="https://CZ5801.918ofa.net" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full group">
                    立即註冊
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              為什麼選擇陳楷百家？
            </h2>
            <div className="max-w-3xl mx-auto space-y-3">
              <p className="text-lg text-muted-foreground">
                優質代理服務 及時回復 能幫你解決平台，遊戲上任何問題
              </p>
              <p className="text-lg text-primary font-semibold">
                誠信是現在這個社會最缺乏的東西
              </p>
              <p className="text-lg text-muted-foreground">
                我始終相信 真心相待能換來長久的情誼
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">全台可面交</h3>
                <p className="text-muted-foreground">
                  提供全台面交服務，讓您更安心、更放心地開始您的投資之旅。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">誠信口碑</h3>
                <p className="text-muted-foreground">
                  多年經營，累積無數成功案例，口碑保證，值得您的信賴。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">專業指導</h3>
                <p className="text-muted-foreground">
                  提供一對一專業指導，從思維拆解到實戰解析，全方位協助您提升勝率。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">核心價值</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center space-y-3">
                    <div className="inline-block rounded-full bg-primary/20 p-4 mb-2">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">思維拆解</h3>
                    <p className="text-sm text-muted-foreground">
                      路單判讀、機率分析、風險管理
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="inline-block rounded-full bg-primary/20 p-4 mb-2">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">心態訓練</h3>
                    <p className="text-sm text-muted-foreground">
                      賭場心理學、情緒管理、紀律訓練
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="inline-block rounded-full bg-primary/20 p-4 mb-2">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">實戰解析</h3>
                    <p className="text-sm text-muted-foreground">
                      真實案例、獲利分享、一對一指導
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            準備好開始了嗎？
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            立即加入陳楷百家，開啟您的穩定獲利之路。無論您是新手還是老手，我們都會提供最適合您的指導。
          </p>
          <a href="https://page.line.me/mt5801" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group">
              <MessageCircle className="mr-2 h-5 w-5" />
              立即加入 Line
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">關於我們</h3>
              <p className="text-sm text-muted-foreground">
                陳楷百家致力於幫助您理解百家樂的思維邏輯，並提供全面的心態訓練。
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">快速連結</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">首頁</a>
                </li>
                <li>
                  <a href="https://CZ5801.gm1688.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">大老爺娛樂城</a>
                </li>
                <li>
                  <a href="https://CZ5801.meta1788.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">雄厚娛樂城</a>
                </li>
                <li>
                  <a href="https://CZ5801.918ofa.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">八方娛樂城</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">聯繫方式</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <a href="https://page.line.me/mt5801" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Line: @mt5801
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  <a href="https://t.me/ii5801" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Telegram: @ii5801
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  <a href="https://www.instagram.com/seven580108/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    IG: seven580108
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">社群媒體</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61582415337645" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/@mt5801-v4b/shorts" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/seven580108/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://page.line.me/mt5801" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="https://t.me/ii5801" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Send className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 {APP_TITLE}. 保留所有權利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
