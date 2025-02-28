import { fetchData } from "@/data/actions/products";
import UnauthPage from "./login/page";

export default async function Home() {
  // const data = await fetchData();
  // console.log(data);

  return (
    <div>
      {/* {data?.map((dt: any) => (
        <div key={dt.id}>{dt.name}</div>
      ))} */}

      <div>
        <UnauthPage />
      </div>
    </div>
  );
}
