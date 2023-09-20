import { api } from "~/utils/api";

export default function Shops() {
    
    const { data : shop_data } = api.shops.getAll.useQuery();

    return (
      <>
        <div className="flex flex-col justify-top items-center min-h-screen">
            <div className="py-16 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Shops</div>
            <div className="text-2xl items-center">
                {shop_data?.map((shop => (<div key={shop.shop_id}>{shop.shop_name}</div>)))}
            </div>
        </div>

      </>
    )
};
