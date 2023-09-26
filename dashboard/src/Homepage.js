import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ShoppingBagIcon,
  InboxIcon,
  PowerIcon,
  MagnifyingGlassMinusIcon,
  BellIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowSmallDownIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

export default class Homepage extends React.Component {
  render() {
    return (
      
        <Card className="side-bar-box w-full max-w-[20rem]  ">
          <div className="mb-2 ">
            <Typography variant="h5" className="p-4 pb-0 text-lg font-bold" color="blue-gray">
              OMOI
            </Typography>
          </div>
          <List>
            <ListItem>
              <ListItemPrefix>
              <img src="./home.svg" alt="Logo" className="h-8" />
              </ListItemPrefix>
              Home
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <img src="./bar.svg" alt="Logo" className="h-8" />
              </ListItemPrefix>
              Analytic
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <img src="./explore.svg" alt="Logo" className="h-8" />
              </ListItemPrefix>
              Explore
              {/* <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix> */}
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <img src="./cart.svg" alt="Logo" className="h-8" />
              </ListItemPrefix>
              Shop
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <img src="./inbox.svg" alt="Logo" className="h-8" />
              </ListItemPrefix>
              Inbox
            </ListItem>
            
          </List>
          <Typography variant="h5" className="p-4 pb-0 text-[#9d9d9d]"  color="blue-gray">
              Tools
            </Typography>
            <List>
           
            <ListItem>
              <ListItemPrefix>
              <img src="./setting.svg" alt="Logo" className="h-10" />
              </ListItemPrefix>
             Setting
            </ListItem>
            
            <ListItem>
              <ListItemPrefix>
              <img src="./help.svg" alt="Logo" className="h-8" />
              </ListItemPrefix>
              Help
            </ListItem>
            
            
          </List>
          <Typography variant="h5" className="p-4 pb-0 text-[#9d9d9d]" color="blue-gray">
             Project
            </Typography>
            <List>
           
            <ListItem>
              <ListItemPrefix>
              <img src="./file.svg" alt="Logo" className="h-8 text-slate-900	" />
              </ListItemPrefix>
            Amazon
            </ListItem>
            
            <ListItem>
              <ListItemPrefix>
              <img src="./file.svg" alt="Logo" className="h-8 text-slate-900	" />
              </ListItemPrefix>
              Invunity HQ
            </ListItem>
            
            
          </List>
        </Card>
       
       
     
    );
  }
}
