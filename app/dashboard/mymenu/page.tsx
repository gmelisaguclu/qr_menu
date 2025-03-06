"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import RestorantInformation from "@/components/RestorantInformation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import supabase from "@/lib/supabaseClient";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadUserRestaurants();
  }, []);

  const loadUserRestaurants = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setMessage("Oturum bilgisi alınamadı");
        return;
      }

      const { data: restaurantsData, error } = await supabase
        .from("restaurants")
        .select("id, name")
        .eq("user_id", session.user.id);

      if (error) {
        console.error("Restoranlar yüklenemedi:", error);
        setMessage("Restoranlar yüklenemedi");
      } else {
        setRestaurants(restaurantsData || []);
      }
    } catch (err) {
      console.error("Beklenmeyen bir hata oluştu:", err);
      setMessage("Bir hata oluştu");
    }
  };

  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      console.log("User is logged in:", session.user);
    } else {
      console.log("No active session.");
    }
  });

  const handleRestaurantSelect = (value: string) => {
    setSelectedRestaurant(value);
  };

  const handleContinue = () => {
    if (!selectedRestaurant) {
      setMessage("Lütfen bir restoran seçin!");
      return;
    }
    window.location.href = `/dashboard/create-menu?restaurant=${selectedRestaurant}`;
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[40%] aspect-[4/3] flex items-center flex-col justify-center">
        <CardHeader className="gap-5">
          <CardTitle className="text-3xl text-center tracking-wide">
            Menünüzü Oluşturun
          </CardTitle>
          <CardDescription className="text-xl text-center">
            Kendi mutfağınızın yıldızı olun, menünüzü özgürce tasarlayın.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-4">
          <div>
            <RestorantInformation />
          </div>
          <div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>
                  Menü Oluştur <Plus />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Restoran Seçin</DialogTitle>
                  <DialogDescription>
                    Menü oluşturmak istediğiniz restoranı seçin
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <Select
                    onValueChange={handleRestaurantSelect}
                    value={selectedRestaurant}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Restoran seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {restaurants.map((restaurant) => (
                        <SelectItem key={restaurant.id} value={restaurant.id}>
                          {restaurant.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {message && <p className="text-red-500 mt-2">{message}</p>}
                </div>
                <DialogFooter>
                  <Button onClick={handleContinue}>Devam Et</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
