import React from 'react';
import { Menu } from 'semantic-ui-react'; import
{Link} from '../routes';

export default()=>{
  return (
     <Menu style={{ marginTop:'10px'}}>
     <Link route="/">
        <a className="item">
         Guardians of the Galaxy
        </a>
     </Link>

      <Menu.Menu position="right">
      <Link route="/">
         <a className="item">
           Trust Funds
         </a>
      </Link>
      <Link route="/trustfunds/new">
         <a className="item">
          +
         </a>
      </Link>

    </Menu.Menu> </Menu> )
}
