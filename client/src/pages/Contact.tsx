import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { APP_LOGO, APP_TITLE } from "@/const";
import { trpc } from "@/lib/trpc";
import { MessageCircle, Instagram, Send, Home } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const createContactMutation = trpc.contact.create.useMutation({
    onSuccess: () => {
      toast.success("訊息已送出！我們會盡快回覆您。");
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error) => {
      toast.error(error.message || "送出失敗，請稍後再試");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createContactMutation.mutate(formData);
  };

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
            <Link href="/dashboard">
              <Button variant="outline">會員中心</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">聯繫我們</h1>
            <p className="text-lg text-muted-foreground">
              有任何問題或需求？歡迎隨時與我們聯繫
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>填寫表單</CardTitle>
                <CardDescription>請填寫以下資訊，我們會盡快回覆您</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="請輸入您的姓名"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0912-345-678"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">訊息 *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="請輸入您的訊息（至少 10 個字元）"
                      required
                      rows={5}
                      className="bg-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={createContactMutation.isPending}
                  >
                    {createContactMutation.isPending ? "送出中..." : "送出訊息"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>直接聯繫</CardTitle>
                  <CardDescription>您也可以透過以下方式直接聯繫我們</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://page.line.me/mt5801"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Line</p>
                      <p className="text-sm text-muted-foreground">@mt5801</p>
                      <p className="text-xs text-muted-foreground mt-1">點擊加入 Line 群組</p>
                    </div>
                  </a>
                  <a
                    href="https://t.me/ii5801"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Send className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Telegram</p>
                      <p className="text-sm text-muted-foreground">@ii5801</p>
                      <p className="text-xs text-muted-foreground mt-1">點擊開始對話</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/seven580108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Instagram</p>
                      <p className="text-sm text-muted-foreground">seven580108</p>
                      <p className="text-xs text-muted-foreground mt-1">追蹤我們的最新動態</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-border">
                <CardHeader>
                  <CardTitle>營業時間</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">週一至週日</span>
                      <span className="font-medium text-foreground">24 小時服務</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      我們提供全年無休的線上服務，隨時為您解答疑問。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
