"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { signInUser, signUpNewUser } from "@/data/actions/userActions";
import toast from "react-hot-toast";

export const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const data = await signUpNewUser(email, password);
      toast.success("Kayıt başarılı!");
      router.push("/");
    } catch (error) {
      toast.error("Kayıt başarısız " + error);
    }
  };

  const handleLogin = async () => {
    try {
      const data = await signInUser(loginEmail, loginPassword);
      toast.success("Giriş başarılı!");
      router.push("/dashboard/home");
    } catch (error) {
      toast.error("Giriş başarısız: " + error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px] mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Giriş Yap</TabsTrigger>
          <TabsTrigger value="password">Kayıt Ol</TabsTrigger>
        </TabsList>

        {/* Giriş Yap Tab'ı */}
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

        {/* Kayıt Ol Tab'ı */}
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
};

export default page;
function useToast(): { toast: any } {
  throw new Error("Function not implemented.");
}
