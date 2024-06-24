import { HomeScreen } from "../modules/Home"
import { NewsFeed } from "../modules/NewsFeed"
import { Nav } from "./Nav"

const globalScreens = [
    
        {
            name: 'HomeNav',
            component: Nav,
           
        },
        {
            name: 'HomeScreen',
            component: HomeScreen,
           
        },
        {
            name: 'NewsFeed',
            component: NewsFeed,
           
        }
    

]


export  {
    globalScreens
}