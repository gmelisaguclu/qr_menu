import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[40%] aspect-[4/3] flex items-center flex-col justify-center">
        <CardHeader className="gap-5">
          <CardTitle className="text-3xl text-center tracking-wide ">
            Menünüzü Oluşturun
          </CardTitle>
          <CardDescription className="text-xl text-center ">
            Kendi mutfağınızın yıldızı olun, menünüzü özgürce tasarlayın.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex my-4 justify-center">
          <div>
            <Link href={"/menu-olustur"}>
              <Button>
                Menü Oluştur <Plus />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default page;
