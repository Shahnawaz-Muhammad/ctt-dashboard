import {
  HiOutlineViewGrid,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid fontSize={30} />,
    subItems: [
      {
        key: "dashboard-subpage-1",
        label: "Subpage",
        path: "/subpage-1",
        icon: <HiOutlineViewGrid fontSize={24} />,
      },
      {
        key: "dashboard-subpage-2",
        label: "Subpage",
        path: "/subpage-2",
        icon: <HiOutlineViewGrid fontSize={24} />,
      },
      {
        key: "dashboard-subpage-3",
        label: "Subpage",
        path: "/subpage-3",
        icon: <HiOutlineViewGrid fontSize={24} />,
      },
    ],
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUsers fontSize={30} />,
  },
  {
    key: "practice",
    label: "Practice",
    path: "/practice",
    icon: <HiOutlineShoppingCart fontSize={30} />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineDocumentText fontSize={30} />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation fontSize={30} />,
  },
];
