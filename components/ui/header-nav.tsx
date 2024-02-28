"use client";

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { getNavigation } from '@/utils/navigation';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function HeaderNav() {
  const pathname = usePathname();
  const navigation = useMemo(() => getNavigation("main"), []);

  return (
    <Disclosure id="globalNav" as="nav" className="bg-dark shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-gray-100 hover:ring-neutral-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  astroom
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item, index) => (
                    <a
                      key={`${index}_${item.href}`}
                      href={item.href}
                      className={cn(pathname === item.href ? "inline-flex items-center border-b-2 border-white-500 px-1 pt-1 text-sm font-medium text-neutral-200" :
                        "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-neutral-200 hover:border-gray-300 hover:text-neutral-50"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={`${index}_${item.href}`}
                  as="a"
                  href={item.href}
                  className={cn("bg-black/90", pathname === item.href ? "block border-l-4 border-neutral-500 py-2 pl-3 pr-4 text-base font-medium text-neutral-200" :
                    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-neutral-200 hover:border-neutral-100"
                  )}
                >
                  {item.name}
                </Disclosure.Button>

              ))}
            </div >
          </Disclosure.Panel >
        </>
      )}
    </Disclosure >
  )
}
