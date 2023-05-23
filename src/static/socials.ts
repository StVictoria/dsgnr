import twitter from '../assets/fa-twitter.svg'
import fb from '../assets/fa-facebook-square.svg'
import google from '../assets/fa-google-plus.svg'
import { ILink } from '@/interfaces/link'

export interface ISocial extends ILink {
    icon: string
}

export const socials = [
    { id: 1, title: 'Twitter', icon: twitter, link: '/' },
    { id: 2, title: 'Facebook', icon: fb, link: '/' },
    { id: 3, title: 'Google', icon: google, link: '/' },
]