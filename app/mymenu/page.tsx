import { Plus } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border-4 flex flex-col items-center mt-4 rounded-3xl h-80">
        <div className="flex items-center justify-center mt-9 mx-6 font-hand text-xl">
          Kendi mutfağınızın yıldızı olun, menünüzü özgürce tasarlayın.
        </div>

        <div className="flex mt-10 gap-3">
          <div className="font-hand text-lg">Menü Oluştur</div>
          <Plus />
        </div>
      </div>
    </div>
  );
}

export default page;
