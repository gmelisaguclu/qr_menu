"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { signInUser, signUpNewUser } from "@/data/actions/userActions";
import { useToast } from "@/components/ui/toaster";
import { Toaster } from "@/components/ui/toaster";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { toast } = useToast();

  const handleSignUp = async () => {
    try {
      await signUpNewUser(email, password);
      toast({
        title: "Kayıt başarılı!",
        description: "Hesabınıza giriş yapabilirsiniz.",
      });
      router.push("/");
    } catch (error) {
      const err = error as Error;
      toast({
        title: "Kayıt başarısız",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  const handleLogin = async () => {
    try {
      const userData = await signInUser(loginEmail, loginPassword);

      const userId = userData.user.id;
      console.log("Giriş yapan kullanıcının ID'si:", userId);

      toast({
        title: "Giriş başarılı!",
        description: "Dashboard'a yönlendiriliyorsunuz...",
      });
      router.push("/dashboard/home");
    } catch (error) {
      const err = error as Error;
      toast({
        title: "Giriş başarısız",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Toaster />
      <Tabs defaultValue="account" className="w-[400px] mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Giriş Yap</TabsTrigger>
          <TabsTrigger value="password">Kayıt Ol</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardContent className="space-y-2 mt-5">
              <div className="space-y-1">
                <Label htmlFor="loginEmail">E-mail</Label>
                <Input
                  id="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="E-mail adresiniz"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="loginPassword">Şifre</Label>
                <Input
                  id="loginPassword"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Şifreniz"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin}>Giriş Yap</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardContent className="space-y-2 mt-5">
              <div className="space-y-1">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail adresiniz"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Şifre</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifreniz"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSignUp}>Kayıt Ol</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
