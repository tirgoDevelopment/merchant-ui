/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'orders',
        title: 'Грузы',
        type: 'basic',
        icon: 'orders.svg',
        link: '/orders',
    },
    {
        id: 'finance',
        title: 'Финансы',
        type: 'basic',
        icon: 'finance.svg',
        link: '/finance',
    },
    {
        id: 'document',
        title: 'Документы',
        type: 'basic',
        icon: 'document.svg',
        link: '/documents',
    },
    {
        id: 'settings',
        title: 'Настройки',
        type: 'basic',
        icon: 'settings.svg',
        link: '/settings',
    },
    // {
    //     id: 'workers',
    //     title: 'Сотрудники',
    //     type: 'basic',
    //     icon: 'employes.svg',
    //     link: '/worker',
    // },
    // {
    //     id: 'analytics',
    //     title: 'Аналитика',
    //     type: 'basic',
    //     icon: 'analitika.svg',
    //     link: '/analytics',
    // },
    {
        id: 'support',
        title: 'Тех.поддержка',
        type: 'basic',
        icon: 'support.svg',
        link: '/support',
    }
];

