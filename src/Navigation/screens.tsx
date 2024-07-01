import { HomeScreen } from "../modules/Home"
import { NewsFeed } from "../modules/NewsFeed"
import {More} from '../modules/More'
import { Nav } from "./Nav"
import {DirectoryScreen} from '../modules/More/screens/DirectoryScreen'

const globalScreens = [
    
        {
            name: 'HomeNav',
            component: Nav,
            options: {headerShown: false}
           
        },
        {
            name: 'Home',
            component: HomeScreen,
            options: {headerShown: false}
           
        },
        {
            name: 'Newsfeed',
            component: NewsFeed,
            options: {headershown: false}
           
        } ,
        {
            name: 'Calender',
            component: NewsFeed
        },
        {
            name:'Alerts',
            component: NewsFeed
        },
        {
            name: 'More',
            component: More,
            options: {headerShown: false}
        },
        {
            name: 'DirectoryScreen',
            component: DirectoryScreen,
            options: {headerShown: false}
        }

]


export  {
    globalScreens
}