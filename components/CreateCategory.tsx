import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateCategory = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Menü Oluştur</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Kategori Seç" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="apple">Ana Yemek</SelectItem>
                  <SelectItem value="banana">Sıcak İçecek</SelectItem>
                  <SelectItem value="blueberry">Soğuk İçecek</SelectItem>
                  <SelectItem value="grapes">Tatlılar</SelectItem>
                  <SelectItem value="pineapple">Salatalar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input id="picture" type="file" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Vazgeç</Button>
        <Button>Oluştur</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateCategory;
