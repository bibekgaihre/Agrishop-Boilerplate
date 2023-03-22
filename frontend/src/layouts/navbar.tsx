import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Disclosure, Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function navbar() {
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white border-2 border-b-gray-200 fixed top-0 left-0 right-0"
      >
        {({ open }) => (
          <>
            <div className=" px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-16 items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 text-black px-3 py-2 rounded-md text-xl font-medium">
                      <a href="/products">RentBike.io</a>
                    </div>
                  </div>
                </div>
                <div className="absolute flex space-x-10 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="hover:bg-green-800 hover:rounded-lg p-1 "
                  >
                    <span className="sr-only">View Home</span>
                    <HomeIcon
                      className="stroke-green-700 hover:stroke-white h-8 w-8"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    className="hover:bg-green-800 hover:rounded-lg p-1 text-white hover:text-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon
                      className="stroke-green-700 hover:stroke-white h-8 w-8"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    className="hover:bg-green-800 hover:rounded-lg p-1 text-white hover:text-white"
                  >
                    <span className="sr-only">View Cart</span>
                    <ShoppingBagIcon
                      className="stroke-green-700 hover:stroke-white h-8 w-8"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button
                        type="button"
                        className="hover:bg-green-800 hover:rounded-lg p-1 text-white hover:text-white"
                      >
                        <span className="sr-only">View settings</span>
                        <Cog6ToothIcon
                          className="stroke-green-700 hover:stroke-white h-8 w-8"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              // onClick={() => setShowHubModal(true)}
                            >
                              Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              // onClick={() => setShowPasswordModal(true)}
                            >
                              Change Password
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              // onClick={() => logOut()}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden"></Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
