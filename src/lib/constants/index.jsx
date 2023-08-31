import {
	HiOutlineViewGrid,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid fontSize={30}/>
	},
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers fontSize={30}/>
    },
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart fontSize={30}/>
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText fontSize={30}/>
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation fontSize={30}/>
	}
]
