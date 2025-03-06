"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import supabase from "@/lib/supabaseClient";
import { getUserId } from "@/data/actions/userActions";

const RestorantInformation = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    communication: "",
    logo: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const id = await getUserId();
    console.log(id, "id");

    const { error } = await supabase.from("restaurants").insert([
      {
        name: formData.name,
        address: formData.address,
        communication: formData.communication,
        logo: formData.logo,
        user_id: id,
      },
    ]);

    if (error) {
      setMessage("Bir hata oluştu: " + error.message);
    } else {
      setMessage("Restoran bilgileri başarıyla kaydedildi!");
      setFormData({ name: "", address: "", communication: "", logo: "" });
      setOpen(false);
    }
    setLoading(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)} variant="outline">
            Restoran Bilgilerini Gir <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Restoran Bilgilerini Düzenle</DialogTitle>
            <DialogDescription>
              Restoran bilgilerinizi buradan düzenleyebilirsiniz. Kaydet
              butonuna tıklamayı unutmayın.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Restoran Adı</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="address">Adres</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="communication">İletişim</Label>
              <Input
                id="communication"
                name="communication"
                value={formData.communication}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="logo">Logo </Label>
              <Input
                type="file"
                id="logo"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Kaydediliyor..." : "Kaydet"}
            </Button>
          </form>
          {message && <p className="text-center mt-2">{message}</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RestorantInformation;
