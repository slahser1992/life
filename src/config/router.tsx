import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import PublicIcon from "@material-ui/icons/Public";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import SettingsIcon from "@material-ui/icons/Settings";
import TimerIcon from "@material-ui/icons/Timer";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";

export default ([
  {
    id: 'Develop',
    children: [
      {
        id: 'Authentication',
        icon: <PeopleIcon/>,
      },
      {
        id: 'Database',
        icon: <DnsRoundedIcon/>,
      },
      {
        id: 'Storage',
        icon: <PermMediaOutlinedIcon/>,
      },
      {
        id: 'Hosting',
        icon: <PublicIcon/>,
      },
      {
        id: 'Functions',
        icon: <SettingsEthernetIcon/>,
      },
      {
        id: 'ML Kit',
        icon: <SettingsInputComponentIcon/>,
      },
    ],
  },
  {
    id: 'Quality',
    children: [
      {
        id: 'Analytics',
        icon: <SettingsIcon/>,
      },
      {
        id: 'Performance',
        icon: <TimerIcon/>,
      },
      {
        id: 'Test Lab',
        icon: <PhonelinkSetupIcon/>,
      },
    ],
  },
]);


