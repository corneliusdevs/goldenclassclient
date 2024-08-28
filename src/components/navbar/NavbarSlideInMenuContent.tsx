import Link from "next/link";
import NavbarDropdown from "./NavbarDropDown";

type SideBarMenuSubItem = {
  text: string;
  link: string;
};
type SideBarMenuItem = {
  item: {
    name: string;
    link?: string;
    subItems?: SideBarMenuSubItem[];
  };
};
type SideBarMenuItems = SideBarMenuItem[];

const sideBarMenuItems: SideBarMenuItems = [
  {
    item: {
      name: "Home",
      link: "/",
    },
  },
  {
    item: {
      name: "Categories",
      subItems: [
        {
          text: "Laptop Adapters",
          link: "/",
        },
        {
          text: "Laptop Screens",
          link: "/",
        },
        {
          text: "Laptop Batteries",
          link: "/",
        },
      ],
    },
  },
];

const NavbarDropdownComponentTrigger = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

interface SlideInMenuContentProps {}

const NavBarSlideInMenuContent = () => {
  const generateMenuItems = (menuItem: SideBarMenuItem, index: number) => {
    let generatedItem = <div></div>;

    // if there are subItems in the menu render a dropdown
    if (menuItem.item?.subItems?.length && menuItem.item?.subItems.length > 0) {
      generatedItem = (
        <div key={menuItem.item.name + index} className="mb-2">
          <NavbarDropdown
            triggerComponent={
              <NavbarDropdownComponentTrigger text={menuItem.item.name} />
            }
            menuOptions={menuItem.item.subItems}
          />
        </div>
      );
    } else {
      // if there are no subItems in the menu, just display the name of the item
      if (menuItem.item?.link) {
        generatedItem = (
          <div
            key={menuItem.item.name + index}
            className="border-b border-gray-200 py-2 w-full  mb-2 hover:underline"
          >
            <Link href={menuItem.item.link}>{menuItem.item.name}</Link>
          </div>
        );
      }
    }

    return generatedItem;
  };
  return (
    <div className="mt-10">
      <div className="">
        {sideBarMenuItems.map((menuItem, index) => {
          return (
            <div key={index + menuItem.item.name}>
              {generateMenuItems(menuItem, index)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarSlideInMenuContent;
