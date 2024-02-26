export type NavItem = {
  name: string;
  href: string;
}

type Navigation = {
  [key: string]: NavItem[];
};


export const navigation: Navigation = {
  "main": [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    // {
    //   name: "Projects",
    //   href: "/projects",
    // },
    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
  ],
}

export const getNavigation = (navKey: string): NavItem[] => {
  return navigation[navKey];
};