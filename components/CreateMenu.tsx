"use client";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import supabase from "@/lib/supabaseClient";

const CreateMenu = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    categoryName: "",
    logo: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Oturum bilgisi alınamadı:", error.message);
        return;
      }

      if (session) {
        console.log("Kullanıcı ID:", session.user.id);
      } else {
        console.log("Oturum bulunamadı");
      }
    };

    getUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.from("category").insert([
      {
        name: formData.categoryName,
        logo: formData.logo,
      },
    ]);

    if (error) {
      setMessage("Bir hata oluştu: " + error.message);
    } else {
      setMessage("Kategori başarıyla eklendi!");
      setFormData({ categoryName: "", logo: "" });
      setOpen(false);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center w-2/3 border-2 rounded-lg justify-start">
      <div className="flex items-center justify-between w-full gap-5">
        <div className="ml-4">Kategori Ekle</div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="border-none" variant="outline" size="icon">
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Yeni Kategori Ekle</DialogTitle>
              <DialogDescription className="text-lg">
                Mevcut kategorilerinizi menünüze ekleyiniz.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label>Kategori</Label>
                <Input
                  id="categoryName"
                  name="categoryName"
                  placeholder="Kategori adı"
                  className="col-span-3"
                  value={formData.categoryName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label>Ürün Resmi</Label>
                <Input
                  className="col-span-3"
                  type="file"
                  id="restorant-logo"
                  name="logo"
                  onChange={handleChange}
                />
              </div>
              <DialogFooter>
                <Button type="submit" disabled={loading}>
                  {loading ? "Kaydediliyor..." : "Kaydet"}
                </Button>
              </DialogFooter>
            </form>
            {message && <p className="text-center mt-2">{message}</p>}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CreateMenu;
