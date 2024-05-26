import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaListUl from "react-icons/fa6";
import * as ImIcons from "react-icons/im";
import * as GoIcons from "react-icons/go";
import * as FiIcons from "react-icons/fi";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'List Your Books',
    path: '/list',
    icon: <FaIcons.FaListUl/>,
    cName: 'nav-text'
  },
  ,
  {
    title: 'Your Books',
    path: '/books',
    icon: <ImIcons.ImBooks/>,
    cName: 'nav-text'
  },
  ,
  {
    title: 'Request',
    path: '/request',
    icon: <FiIcons.FiBell />,
    cName: 'nav-text'
  },
  ,
  {
    title: 'Signout',
    path: '/signout',
    icon: <GoIcons.GoSignOut />,
    cName: 'nav-textsignout'
  }
];
