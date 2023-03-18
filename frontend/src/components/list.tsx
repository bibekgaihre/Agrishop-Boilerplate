import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
export default function List() {
  return (
    <div className="flex justify-center my-4 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="block max-w-sm rounded-lg bg-white border-2 border-gray-200 mx-2 shadow-sm dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              className="rounded-t-lg"
              src="https://www.mallorcacyclingcenter.com/assets/img/rental/m-colnago-2020-v3rs-dura-ace-di2-disc.png"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              BMC TEAMMACHINE SLR01 TWO DISC + POWERMETER
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <strong>Renter: </strong>Mallorca Bike Rental
            </p>
            <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              <strong>
                <i className="text-2xl text-green-800">€ 15</i>
              </strong>
              &nbsp;per day
            </h6>

            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <MapPinIcon className="inline-block h-6 w-6 " />
              Mallorca, Spain
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
                {/* Add to Cart */}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-1/2 rounded bg-cartColor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <HeartIcon className="stroke-white h-6 w-6" />
                {/* Add to Cart */}
              </button>
            </div>
          </div>
        </div>
        <div className="block max-w-sm rounded-lg bg-white border-2 border-gray-200 mx-2 shadow-sm dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              className="rounded-t-lg"
              src="https://www.mallorcacyclingcenter.com/assets/img/rental/m-colnago-2020-v3rs-dura-ace-di2-disc.png"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              BMC TEAMMACHINE SLR01 TWO DISC + POWERMETER
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <strong>Renter: </strong>Mallorca Bike Rental
            </p>
            <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              <strong>
                <i className="text-2xl text-green-800">€ 15</i>
              </strong>
              &nbsp;per day
            </h6>

            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <MapPinIcon className="inline-block h-6 w-6 " />
              Mallorca, Spain
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
                {/* Add to Cart */}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-1/2 rounded bg-cartColor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <HeartIcon className="stroke-white h-6 w-6" />
                {/* Add to Cart */}
              </button>
            </div>
          </div>
        </div>
        <div className="block max-w-sm rounded-lg bg-white border-2 border-gray-200 mx-2 shadow-sm dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              className="rounded-t-lg"
              src="https://www.mallorcacyclingcenter.com/assets/img/rental/m-colnago-2020-v3rs-dura-ace-di2-disc.png"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              BMC TEAMMACHINE SLR01 TWO DISC + POWERMETER
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <strong>Renter: </strong>Mallorca Bike Rental
            </p>
            <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              <strong>
                <i className="text-2xl text-green-800">€ 15</i>
              </strong>
              &nbsp;per day
            </h6>

            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <MapPinIcon className="inline-block h-6 w-6 " />
              Mallorca, Spain
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
                {/* Add to Cart */}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-1/2 rounded bg-cartColor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <HeartIcon className="stroke-white h-6 w-6" />
                {/* Add to Cart */}
              </button>
            </div>
          </div>
        </div>
        <div className="block max-w-sm rounded-lg bg-white border-2 border-gray-200 mx-2 shadow-sm dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              className="rounded-t-lg"
              src="https://www.mallorcacyclingcenter.com/assets/img/rental/m-colnago-2020-v3rs-dura-ace-di2-disc.png"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              BMC TEAMMACHINE SLR01 TWO DISC + POWERMETER
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <strong>Renter: </strong>Mallorca Bike Rental
            </p>
            <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              <strong>
                <i className="text-2xl text-green-800">€ 15</i>
              </strong>
              &nbsp;per day
            </h6>

            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <MapPinIcon className="inline-block h-6 w-6 " />
              Mallorca, Spain
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
                {/* Add to Cart */}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-1/2 rounded bg-cartColor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <HeartIcon className="stroke-white h-6 w-6" />
                {/* Add to Cart */}
              </button>
            </div>
          </div>
        </div>
        <div className="block max-w-sm rounded-lg bg-white border-2 border-gray-200 mx-2 shadow-sm dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              className="rounded-t-lg"
              src="https://www.mallorcacyclingcenter.com/assets/img/rental/m-colnago-2020-v3rs-dura-ace-di2-disc.png"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              BMC TEAMMACHINE SLR01 TWO DISC + POWERMETER
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <strong>Renter: </strong>Mallorca Bike Rental
            </p>
            <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              <strong>
                <i className="text-2xl text-green-800">€ 15</i>
              </strong>
              &nbsp;per day
            </h6>

            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              <MapPinIcon className="inline-block h-6 w-6 " />
              Mallorca, Spain
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
                {/* Add to Cart */}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-1/2 rounded bg-cartColor px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <HeartIcon className="stroke-white h-6 w-6" />
                {/* Add to Cart */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
