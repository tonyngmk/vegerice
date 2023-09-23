import { api } from "~/utils/api";
import Card from "~/components/Card";

export default function Shops() {
    
    const { data : market_data } = api.markets.getHead.useQuery();
    // const { data : shop_data } = api.shops.getAll.useQuery();

    const handleButtonClick = () => {
      // Handle button click logic here
      console.log('Button clicked');
    };

    function joinStringsWithSpace(strings: (string | null)[]): string {
      // Filter out null values and join with space
      const filteredStrings = strings.filter((str) => str !== null);
      return filteredStrings.join(' ');
    }

    return (
      <>
        <div className="flex flex-col justify-center items-center min-h-full">

          <div className="py-16 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Shops</div>

            <div className="flex flex-row ">
              <div className="flex flex-col">
                {market_data?.map((market)=><Card
                  key={market.market_id}
                  title={market.market_name}
                  content={joinStringsWithSpace([
                      market.market_block_house,
                      market.market_street_name,
                      market.market_building_name,
                      market.market_postal_code
                  ])}
                />)}
              </div>

              {/* <div className="text-2xl items-center">
                  {shop_data?.map((shop => (<div key={shop.shop_id}>{shop.shop_name}</div>)))}
              </div> */}
            </div>
        </div>
      </>
    )
};
