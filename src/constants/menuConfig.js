import React from 'react'
import Settings from '@material-ui/icons/Settings'
import HomeIcon from '@material-ui/icons/Home'
import ConferenceListContainer from 'features/conferences/components/ConferenceListContainer'
import { List } from '@material-ui/icons'

const menuItems = [
  { icon: <HomeIcon />, text: 'NavBar.MyFirstMenu', path: '/helloWorld', name: 'MyFirstMenu' },
  { icon: <HomeIcon />, text: 'NavBar.Welcome', path: '/welcome', name: 'Welcome' },
  { icon: <Settings />, text: 'NavBar.Settings', path: '/settings', name: 'Settings' },
  { icon: <List />, text: 'NavBar.Conferences', path: '/conferences', name: 'Conferences' }
]

export default menuItems
