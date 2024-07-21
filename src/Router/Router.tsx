//component imports
import NavigationBar from '../components/NavigationBar' 
//page imports
import Auth from '../pages/Auth'
import Divvy from '../pages/Divvy'
import Event from '../pages/Event'
import Item from '../pages/Item'
import Landing from '../pages/Landing'

//api imports
import { fetchDivvyData } from '../config/firebaseFunctions'

import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet } from 'react-router-dom'
import { Flex } from '@radix-ui/themes'

  const NavbarWrapper = () => (
    <Flex direction='column' justify='center' gap='4'>
      <NavigationBar />
      <Outlet />
    </Flex>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavbarWrapper />,
      children: [
        {
          path: '/',
          element: <Landing />
        },
        {
          path: '/auth',
          element: <Auth />
        },
        {
          path: '/:divvyID',
          element: <Divvy />,
          loader: async () => {
            return {
              fetchDivvyData
            }
          }
        },
        {
          path: '/:divvyID/:eventID',
          element: <Event />,
        },
        {
          path: '/:divvyID/:eventID/:itemID',
          element: < Item/>
        }
        
      ]
    }
  ])

  export default function Router() {
    return (
      <Flex direction='column'
      align='stretch'
      gap='2'>
        <RouterProvider router={router} />
      </Flex>
    )
  }