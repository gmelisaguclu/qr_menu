import React from "react";
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

const CreateMenu = () => {
  return (
    <div className="flex items-center w-2/3 border-2 rounded-lg justify-start">
      <div className="flex items-center justify-between w-full gap-5">
        <div className="ml-4">Kategori Ekle</div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="border-none" variant="outline" size="icon">
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogDescription className="text-lg">
                Mevcut kategorilerinizi menünüze ekleyiniz.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label>Kategori</Label>
                <Input id="name" placeholder="Ekle" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label>Ürün Resmi</Label>
                <Input className="col-span-3" type="file" id="restorant-logo" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Kaydet</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CreateMenu;
