/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { axios } from '../../http';
import { logout } from '../../store/actions';
import './layout.css';

const Layout = props => {
  const { children } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const crole = localStorage.getItem('role');
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchvalue] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState([]);
  const roleHandler = [
    {
      name: 'Dashboard',
      redirect: '/dashboard',
      role: ['user', 'admin', 'vendor'],
    },
    {
      name: 'Profile',
      redirect: '/profile',
      role: ['user'],
    },
    {
      name: 'component',
      submenu: [{ name: 'cmp 1' }, { name: 'cmp 2' }],
      role: ['user'],
    },
    {
      name: 'Users',
      redirect: '/users',
      role: ['admin'],
    },
    {
      name: 'Bokings',
      redirect: '/booking',
      role: ['admin', 'user'],
    },
    {
      name: 'Services',
      redirect: '/services',
      role: ['admin'],
    },
    {
      name: 'Vendors',
      redirect: '/vendor',
      role: ['admin'],
    },
  ];
  const handleClick = redirect => {
    history.push(redirect);
  };
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  const typeHandler = e => {
    setSearchvalue(e.target.value);
    clearTimeout(time);
    if (e.target.value.trim()) {
      setTime(
        setTimeout(async () => {
          const data = await axios.post('/search', { keyword: e.target.value });
          setResult(data.data.data);
        }, 300),
      );
    } else {
      setResult([]);
    }
  };
  const clickResult = id => {
    history.push(`/vendor/${id}`);
    setResult([]);
    setSearchvalue('');
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ProSidebar style={{ height: '100vh' }} collapsed={collapsed}>
          <SidebarHeader onClick={handleCollapsed} className="sideheader">
            Header
          </SidebarHeader>
          <Menu iconShape="square">
            {roleHandler.map(item =>
              item.role.includes(crole) ? (
                item.submenu ? (
                  <SubMenu
                    key={item.name}
                    title={item.name}
                    style={{ fontSize: '18px', textAlign: 'center' }}
                  >
                    {item.submenu.map(i => (
                      <MenuItem key={i.name}>{i.name}</MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    key={item.name}
                    onClick={() => handleClick(item.redirect)}
                    style={{ fontSize: '18px', textAlign: 'center' }}
                  >
                    {item.name}
                  </MenuItem>
                )
              ) : null,
            )}
          </Menu>
        </ProSidebar>
        <div style={{ width: '100%' }}>
          <div className="header">
            <div className="searchbar">
              <input
                type="text"
                placeholder="search..."
                className="searchbox"
                onChange={e => typeHandler(e)}
                value={searchValue}
              />
              {searchValue ? (
                <i
                  className="fa fa-times fa-2x search"
                  aria-hidden="true"
                  onClick={() => {
                    setSearchvalue('');
                    setResult([]);
                  }}
                />
              ) : (
                <i className="fa fa-search fa-2x search" aria-hidden="true" />
              )}
            </div>
            <div className="searchresult">
              {' '}
              {result[0] &&
                result.map(item => (
                  <div key={item._id} className="resultitem" onClick={() => clickResult(item._id)}>
                    {item.name}
                    {'                        '}
                    {item.service.name}
                  </div>
                ))}
            </div>
            <button type="button" onClick={logoutHandler} className="btn btn-danger logout">
              Logout
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
