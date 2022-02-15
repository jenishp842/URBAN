import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useHistory } from 'react-router';
import "./layout.css";

const Layout = props => {
  const { children } = props;
  const history = useHistory();
  const crole=localStorage.getItem("role");
  const [collapsed, setCollapsed] = useState(false);
  const roleHandler = [
    {
      name:"Dashboard",
      redirect:"/dashboard",
      role:["user","admin","vendor"]
    },
    {
      name:"Profile",
      redirect:"/profile",
      role:["user"]
    },
    {
      name:"component",
      submenu:[
        {name:"cmp 1"},
        {name:"cmp 2"}
      ],
      role:["user"]
    },
    {
      name:"Users",
      redirect:"/users",
      role:["admin"]
    },
    {
      name:"Bokings",
      redirect:"/booking",
      role:["admin","user"]
    }
  ]
 const handleClick =()=>{
   history.push("/dashboard")
 }
 const handleCollapsed = ()=>{
   setCollapsed(!collapsed)
 }
  return (
    <>
    <div style={{display:"flex"}}>
      
      <ProSidebar style={{height:"100vh"}} collapsed={collapsed}>
        <SidebarHeader onClick={handleCollapsed} className="sideheader">
          Header
        </SidebarHeader>
  <Menu iconShape="square">
    {
      roleHandler.map((item)=>(
        item.role.includes(crole)?
        item.submenu?
        <SubMenu title={item.name} >
          {
            item.submenu.map(i=>(
              <MenuItem>{i.name}</MenuItem>
            ))
          }
      </SubMenu>
        :<MenuItem onClick={handleClick}>{item.name}</MenuItem>
        :null

      ))
    }
    {/* <MenuItem onClick={handleClick}>Dashboard</MenuItem>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu> */}
  </Menu>
</ProSidebar>
    <div style={{width:"100%"}}>
      <div className='header'>
      header    
      </div>
      <button type='button' className='btn btn-danger'>
       Logout
      </button>
      {children}
      </div>
      </div>
    </>
  );
};

export default Layout;
