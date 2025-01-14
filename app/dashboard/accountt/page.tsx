import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px] mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Giriş Yap</TabsTrigger>
          <TabsTrigger value="password">Kayıt Ol</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardContent className="space-y-2 mt-5">
              <div className="space-y-1">
                <Label htmlFor="name">E-mail</Label>
                <Input
                  id="name"
                  defaultValue="gmelisaguclu@gmail.com"
                  className="text-muted-foreground text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Şifre</Label>
                <Input
                  id="username"
                  defaultValue="Gm12345"
                  className="text-muted-foreground text-sm"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Giriş Yap</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardContent className="space-y-2 mt-5">
              <div className="space-y-1">
                <Label htmlFor="current">E-mail</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Şifre</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Kayıt Ol</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default page;
