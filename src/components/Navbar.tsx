import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Tooltip,
  TextField,
  InputAdornment,
  Link,
  Avatar,
  Autocomplete,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserStore } from '../store/store';
import logo from '../assets/Logo.png';
import user from '../assets/user.png';
import { City, ICity, State, IState } from 'country-state-city';
import { useNavigate } from 'react-router-dom';

const settings: object[] = [
  { name: 'Profile', path: '/profile' },
  { name: 'Favourite', path: '/favourite' },
  { name: 'Logout', path: '/logout' },
];

function ResponsiveAppBar(): JSX.Element {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [city, setCity] = useState({
    name: '',
    state: '',
    countryCode: '',
  });
  const [optionsCity, setOptionsCity] = useState<ICity[]>([]);
  const navigate = useNavigate();

  const CitiesInfo: ICity[] = City.getAllCities();

  const isLogged: boolean = UserStore((state) => state.isLogged);
  const avatar: string = UserStore((state) => state.avatar);
  const lastSearched = UserStore((state) => state.addLastSearchedCities);
  const lastSearchedArray = UserStore((state) => state.lastSearchedCities);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity({
      name: event.target.value.split(',')[0],
      state: event.target.value.split(',')[1],
      countryCode: event.target.value.split(',')[2]
    })
  };

  const onEnterSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.key === 'Enter') {
      if (optionsCity.length > 1) {
        const state = State.getStatesOfCountry(city.countryCode.trim())
          .find((state: IState) => state.name.toLowerCase() === city.state.trim().toLowerCase())
        const foundExact = optionsCity.filter(
          (cityInfo: ICity) => {
            if (cityInfo.name.toLowerCase() === city.name.trim().toLowerCase() && cityInfo.countryCode === city.countryCode.trim() && state?.name.toLowerCase() === city.state.trim().toLowerCase()) {
              return true;
            }
            return false;
          });

        const obj = { city: foundExact[0].name, countryCode: foundExact[0].countryCode, stateCode: state?.name }
        lastSearchedArray.find((element: any) => element.city === obj.city && element.countryCode === obj.countryCode && element.stateCode === obj.stateCode) ? "" : lastSearched(obj);
        navigate(`/weather/${foundExact[0].name}/${state?.name}/${foundExact[0].countryCode}`, { state: { city: foundExact[0].name, countryCode: foundExact[0].countryCode, stateCode: state?.name } });
      } else if (optionsCity.length === 1) {
        const state = State.getStatesOfCountry(city.countryCode.trim())
          .find((state: IState) => state.name.toLowerCase() === city.state.trim().toLowerCase())

        const obj = { city: optionsCity[0].name, countryCode: optionsCity[0].countryCode, stateCode: state?.name }
        lastSearchedArray.find((element: any) => element.city === obj.city && element.countryCode === obj.countryCode && element.stateCode === obj.stateCode) ? "" : lastSearched(obj);
        navigate(`/weather/${optionsCity[0].name}/${state?.name}/${optionsCity[0].countryCode}`, { state: { city: optionsCity[0].name, countryCode: optionsCity[0].countryCode, stateCode: state?.name } });
      } else {
        navigate(`/`);
      }
    }
  };

  useEffect(() => {
    if (city.name.trim().length > 0) {
      const foundExact = CitiesInfo.filter(
        (cityInfo: ICity) => cityInfo.name.toLowerCase() === city.name.trim().toLowerCase()
      );
      if (foundExact.length === 0) {
        const citiSearched: ICity[] = CitiesInfo.filter((cityInfo: ICity) =>
          cityInfo.name.toLowerCase().startsWith(city.name.trim().toLowerCase())
        ).slice(0, 5);
        setOptionsCity(citiSearched);
      } else {
        setOptionsCity(foundExact);
      }
    } else {
      setOptionsCity([]);
    }
  }, [city, CitiesInfo]);

  return (
    <AppBar position="static" style={{ backgroundColor: '#132E32' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Link
            onClick={() => {
              if (window.location.pathname !== '/')
                navigate("/");;
            }}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src={logo} style={{ width: '100px', filter: 'drop-shadow(4px 4px rgba(0, 0, 0, 0.25)' }} alt="logo" />
          </Link>


          {/* View for mobile */}
          <Autocomplete
            options={optionsCity.map((option: ICity) => {
              const state = State.getStateByCodeAndCountry(option.stateCode, option.countryCode)?.name
              return option.name + ", " + state + ", " + option.countryCode
            })
            }
            freeSolo
            disableClearable
            fullWidth
            sx={{
              display: { xs: 'flex', md: 'none' }
            }}
            noOptionsText=""
            onInputChange={(event, value) => {
              const infocity = value.split(',');
              setCity({
                name: infocity[0],
                state: infocity[1],
                countryCode: infocity[2],
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                autoComplete="off"
                placeholder="Cerca localita'"
                size="small"
                sx={{
                  '& fieldset': { border: 'none' },
                  textAlign: 'center',
                  paddingRight: '10px',
                }}
                value={city}
                InputProps={{
                  ...params.InputProps,
                  style: {
                    borderRadius: '150px',
                    border: '#176087 2px solid',
                    color: 'white',
                    paddingRight: '0px',
                    boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
                  },
                  onKeyDown: onEnterSearch,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => onEnterSearch({ key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>)}
                        style={{ backgroundColor: '#176087', borderRadius: '0 25px 25px 0' }}
                        aria-label="toggle password visibility"
                      >
                        <SearchIcon style={{ color: 'white', marginRight: '5px', marginLeft: '5px' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          {/* View for pc */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Autocomplete
                options={optionsCity.map((option: ICity) => {
                  const state = State.getStateByCodeAndCountry(option.stateCode, option.countryCode)?.name
                  return option.name + ", " + state + ", " + option.countryCode
                })
                }
                freeSolo
                disableClearable
                style={{
                  width: "80%",
                }}
                noOptionsText=""
                onInputChange={(event, value) => {
                  const city = value.split(',');
                  setCity({
                    name: city[0],
                    state: city[1],
                    countryCode: city[2],
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    autoComplete="off"
                    placeholder="Cerca localita'"
                    size="small"
                    sx={{
                      '& fieldset': { border: 'none' },
                    }}
                    value={city}
                    onChange={onSearchChange}
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        borderRadius: '150px',
                        border: '#176087 2px solid',
                        color: 'white',
                        paddingRight: '0px',
                        boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
                      },
                      onKeyDown: onEnterSearch,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => onEnterSearch({ key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>)}
                            style={{ backgroundColor: '#176087', borderRadius: '0 25px 25px 0' }}
                            aria-label="toggle password visibility"
                          >
                            <SearchIcon style={{ color: 'white', marginRight: '5px', marginLeft: '5px' }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </div>
          </Box>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={isLogged ? handleOpenUserMenu : () => { navigate("/auth") }} sx={{ p: 0 }}>
                {
                  isLogged ?
                    (
                      <Avatar alt="Remy Sharp" src={avatar} />
                    ) :
                    (
                      <div style={{
                        borderRadius: "150px",
                        border: '#176087 2px solid',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        boxShadow: '4px 4px rgba(0, 0, 0, 0.25)'
                      }} >
                        <Avatar alt="Remy Sharp" src={user} style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          margin: '7px 10px 7px'
                        }} />
                        <span
                          style={{
                            color: 'white',
                            fontFamily: 'Cascadia Code, sans-serif',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '10px'
                          }}>
                          Login
                        </span>
                      </div>
                    )}
              </IconButton>
            </Tooltip>
            {
              isLogged &&
              (<Menu
                sx={{
                  mt: '45px',
                  "& .MuiMenu-paper":
                  {
                    backgroundColor: "white",
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}

              >
                {settings.map((setting: any) => (
                  <MenuItem key={setting.name} onClick={() => { navigate(setting.path) }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#132E32",
                      }}
                    >{setting.name}</Link>
                  </MenuItem>
                ))}
              </Menu>)
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
