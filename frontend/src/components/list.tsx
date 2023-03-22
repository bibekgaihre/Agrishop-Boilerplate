import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
// import productContext from "../pages/api/product";
import { useProducts } from "../pages/api/product";
import { Product } from "../pages/api/product";
import { Seller } from "@/pages/api/seller";
import { useSellers } from "@/pages/api/seller";
import Link from "next/link";
export default function List() {
  const products = useProducts();
  const sellers = useSellers();

  return (
    <div className="flex justify-center my-4 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {products.map((product: Product, index: number) => {
          return (
            <Link
              href={{
                pathname: `/products/${product._id}`,
              }}
              key={index}
            >
              <div
                className="block max-w-sm rounded-lg bg-white border-2 border-gray-200 mx-2 shadow-sm dark:bg-neutral-700"
                key={index}
              >
                {/* <a href="#!" data-te-ripple-init data-te-ripple-color="light"> */}
                <img
                  className="rounded-t-lg"
                  src="https://www.mallorcacyclingcenter.com/assets/img/rental/m-colnago-2020-v3rs-dura-ace-di2-disc.png"
                  alt=""
                />
                {/* </a> */}
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {product.productName}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    <strong>Renter: </strong>
                    {
                      sellers.find(
                        (seller: Seller) => seller.sellerId === product.sellerId
                      )?.name
                    }
                  </p>
                  <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    <strong>
                      <i className="text-2xl text-green-800">
                        € {product.unitPrice}
                      </i>
                    </strong>
                    &nbsp;per day
                  </h6>

                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    <MapPinIcon className="inline-block h-6 w-6 " />
                    {
                      sellers.find(
                        (seller: Seller) => seller.sellerId === product.sellerId
                      )?.address.cityName
                    }
                  </p>

                  <button
                    type="button"
                    className="inline-block w-full rounded bg-green-600 px-6 mb-2 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Reserve
                  </button>

                  <div className="flex justify-between">
                    <button
                      className="inline-flex items-center justify-center w-1/2 rounded bg-gray-200 mr-1 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <ShoppingCartIcon className="stroke-black h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-1/2 rounded bg-cartColor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <HeartIcon className="stroke-white h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
