export interface IMenu {
    id: number
    title: string
    link: string
}

export const menu: IMenu[] = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About us', link: '/about-us' },
    { id: 3, title: 'Our works', link: '/our-works' },
    { id: 4, title: 'Contact us', link: '/contact-us' },
]