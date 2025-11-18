import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { MessageCircle, Instagram, Send, LogOut, User, Home } from "lucide-react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

export default function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      toast.success("已成功登出");
      setLocation("/");
    },
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">載入中...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>需要登入</CardTitle>
            <CardDescription>請先登入以查看您的帳戶資訊</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <a href={getLoginUrl()} className="block">
              <Button className="w-full">立即登入</Button>
            </a>
            <Link href="/">
              <Button variant="outline" className="w-full">
                返回首頁
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-10" />
              <h1 className="text-2xl font-bold text-primary">{APP_TITLE}</h1>
            </a>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost">
                <Home className="mr-2 h-4 w-4" />
                首頁
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
            >
              <LogOut className="mr-2 h-4 w-4" />
              登出
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">會員中心</h1>
          <p className="text-muted-foreground">歡迎回來，{user?.name || "會員"}！</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* User Info Card */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                個人資訊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">姓名</p>
                <p className="font-medium text-foreground">{user?.name || "未設定"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{user?.email || "未設定"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">會員等級</p>
                <p className="font-medium text-primary">一般會員</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>聯繫陳楷百家</CardTitle>
              <CardDescription>有任何問題？隨時聯繫我們</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="https://page.line.me/mt5801"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Line</p>
                  <p className="text-sm text-muted-foreground">@mt5801</p>
                </div>
              </a>
              <a
                href="https://t.me/ii5801"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Send className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Telegram</p>
                  <p className="text-sm text-muted-foreground">@ii5801</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/seven580108/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">seven580108</p>
                </div>
              </a>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>快速操作</CardTitle>
              <CardDescription>常用功能快速入口</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="https://www.youtube.com/@mt5801-v4b/shorts" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start">
                  查看教學影片
                </Button>
              </a>
              <a href="https://page.line.me/mt5801" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  加 Line 了解更多
                </Button>
              </a>
              <Link href="/">
                <Button variant="outline" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  返回首頁
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="mt-12">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-border">
            <CardHeader>
              <CardTitle className="text-2xl">關於陳楷百家</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                致力於幫助您理解百家樂的思維邏輯，並提供全面的心態訓練。
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                  <h3 className="font-semibold text-primary mb-2">思維拆解</h3>
                  <p className="text-sm text-muted-foreground">
                    深入分析百家樂的底層邏輯，幫助您建立正確的思維模式。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                  <h3 className="font-semibold text-primary mb-2">心態訓練</h3>
                  <p className="text-sm text-muted-foreground">
                    培養穩定的心態，避免情緒化決策，保持理性投注。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                  <h3 className="font-semibold text-primary mb-2">實戰解析</h3>
                  <p className="text-sm text-muted-foreground">
                    真實案例分析，一對一指導，快速提升您的實戰能力。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-12">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2025 {APP_TITLE}. 保留所有權利。</p>
        </div>
      </footer>
    </div>
  );
}
