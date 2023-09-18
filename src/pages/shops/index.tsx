import { api } from "~/utils/api";

export default function Shops() {
    
    const { data : shop_data } = api.shops.getAll.useQuery();

    return (
        <>
        <h1>Shops page</h1>
        <p className="text-2xl text-black">
            {shop_data?.map((shop => (<div key={shop.shop_id}>{shop.shop_name}</div>)))}
        </p>
      </>
    )
};
