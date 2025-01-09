"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

const RestorantInformation = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  console.log(isDesktop);

  return (
    <div>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setOpen(true)} variant="outline">
              Restorant Bilgilerini Gir
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Restorant Bilgilerini Düzenle</DialogTitle>
              <DialogDescription>
                Restorant bilgilerinizi buradan düzenleyebilirsiniz. Kaydet
                butonuna tıklamayı unutmayın.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setOpen(true)} variant="outline">
              Restorant Bilgilerini Gir <Pencil />
            </Button>
          </DialogTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Restorant-Cafe Bilgilerini Gir</DrawerTitle>
              <DrawerDescription>
                Restorant bilgilerinizi buradan düzenleyebilirsiniz. Kaydet
                butonuna tıklamayı unutmayın.
              </DrawerDescription>
            </DrawerHeader>
            <ProfileForm className="px-4" />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Kapat</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="restorant-adi">Restorant Adı</Label>
        <Input type="text" id="restorant-adi" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="restorant-adres">Restorant Adres</Label>
        <Input type="text" id="restorant-adres" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="iletisim-bilgileri">İletişim Bilgileri</Label>
        <Input
          type="text"
          id="iletisim-bilgileri"
          placeholder="0551-123-56-78"
          className="text-sm text-muted-foreground"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="restorant-logo">Restorant Logo</Label>
        <Input type="file" id="restorant-logo" />
      </div>
      <Button type="submit">Bilgileri Kaydet</Button>
    </form>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default RestorantInformation;
