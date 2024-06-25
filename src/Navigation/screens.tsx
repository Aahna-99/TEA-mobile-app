import { HomeScreen } from "../modules/Home"
import { NewsFeed } from "../modules/NewsFeed"
import { Nav } from "./Nav"

const globalScreens = [
    
        {
            name: 'HomeNav',
            component: Nav,
           
        },
        {
            name: 'Home',
            component: HomeScreen,
           
        },
        {
            name: 'Newsfeed',
            component: NewsFeed,
           
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
            component: NewsFeed
        }

]


export  {
    globalScreens
}