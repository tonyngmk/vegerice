import { api } from "~/utils/api";
import ShopCard from "~/components/ShopCard";

export default function Shops() {
    
    const { data : shop_data } = api.shops.getAll.useQuery();

    const handleButtonClick = () => {
      // Handle button click logic here
      console.log('Button clicked');
    };

    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-full">

          <div className="py-16 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Shops</div>

            <div className="flex flex-row">
              <ShopCard         
                title="Supermarket 1"
                content="Come have fun!"
              />
              <div className="text-2xl items-center">
                  {shop_data?.map((shop => (<div key={shop.shop_id}>{shop.shop_name}</div>)))}
              </div>
            </div>
        </div>
      </>
    )
};
