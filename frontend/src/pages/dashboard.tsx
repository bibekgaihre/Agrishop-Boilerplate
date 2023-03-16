import Navbar from "../layouts/navbar";
import NoItem from "@/components/noitems";
import Container from "@/layouts/container";
function classNameNames(...classNamees: string[]) {
  return classNamees.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <NoItem />
        <div className="flex justify-center py-4">
          <div className="block max-w-sm rounded-lg bg-white mx-2 shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Bike Name
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                description of the bike
              </p>
              <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Available for: 15 Euro per day
              </h6>
              <button
                type="button"
                className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Rent
              </button>
              <button
                type="button"
                className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg mx-2 bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h6 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Available for: 15 Euro per day
              </h6>
              <button
                type="button"
                className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Rent
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg mx-2 bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Rent
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg mx-2 bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className="inline-block rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Rent
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
