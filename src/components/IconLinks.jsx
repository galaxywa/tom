import React from 'react'
import { iconLinks } from '../data'

function IconLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass}>
    <li>
        <a href='https://www.facebook.com/groups/gundambreakergamers/' className={itemClass}>
            <i className={iconLinks[0].icon}></i>
        </a>
    </li>
    <li>
        <a href='https://x.com/gundaminfona' className={itemClass}>
            <i className={iconLinks[1].icon}></i>
        </a>
    </li>
    <li>
        <a href='https://store.steampowered.com/app/1672500/GUNDAM_4/' className={itemClass}>
            <i className={iconLinks[2].icon}></i>
        </a>
    </li>
    <li>
        <a href='https://www.instagram.com/gundaminfona/reel/C_Q1HEmRPnc/' className={itemClass}>
            <i className={iconLinks[3].icon}></i>
        </a>
    </li>
</ul>
  )
}

export default IconLinks