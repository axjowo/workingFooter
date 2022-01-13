// add new views here

import {
  // delete if not used
  mdiAccountCircle,
  mdiDesktopMac,
  // mdiGithub,
  mdiLock,
  mdiAlertCircle,
  // mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  // actual used mdi
  mdiRoutes,
  mdiPretzel
} from '@mdi/js'

export default [
  'Routenplanung',
  [
    {
      to: '/',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    },
    {
      to: '/routenbearbeitung',
      label: 'Routenbearbeitung',
      icon: mdiRoutes
      // updateMark: true
    }
  ],
  'Verkäufersicht',
  [
    {
      to: '/tables',
      label: 'Tables',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    {
      to: '/responsive',
      label: 'Responsive',
      icon: mdiResponsive
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Sub-item One'
        },
        {
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      href: 'https://baeckerai.de/ueber-uns-2/',
      label: 'BäckerAI',
      icon: mdiPretzel,
      target: '_blank'
    }
  ]
]
