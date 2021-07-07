import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Card from './Card';
import { Grid } from "@material-ui/core";
import {Link} from 'react-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, fas, faTelegram, faEnvelope);

const useStyles = makeStyles((theme) => ({
  // Корневой div
  root: {
    flexGrow: 1,
  },
  // Кнопка меню
  menuButton: {
    color: 'black',
  },
  // Текст лого
  logoTitle: {
    flexGrow: 1,
    color: 'black'
  },
  // Фон навбара
  menuBackground: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  // Приветственный div
  welcomeHeader: {
    margin: 25,
    backgroundColor: '#0f0f0f',
    height: '50vh',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: '4px',
  },
  // Приветственный текст
  welcomeText: {
    color: 'white',
    fontFamily: 'Roboto',
    paddingLeft: '20px',
    paddingRight: '20px',
    textAlign: 'center',
    },
    // box categories
  categoriesDiv: {
    marginTop: '7vh',
    marginBottom: '7vh',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  // categories text
  categoriesText: {
    color: 'black',
    fontFamily: 'Roboto'
    },
    media: {
      height: 140,
    },
  gridContainer: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
    overflowY: 'hidden',

  },
  footerBack: {
    background: '#0f0f0f',
    height: '15vh',
    width: '100%',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',
    marginTop: '50px',
  },
  contactsHeader: {
    color: 'white',
    textAlign: 'left',
    textTransform: 'uppercase',
    position: 'relative',
    top: '50%',
    transform: 'translate(0, -50%)',
    marginLeft: '20px',
    fontSize: 'calc(30px + 2vw)',

  },
    carouselSlider: {
maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
  footerLink: {
    display: 'inline-block',
    float: 'right',
    marginRight: '20px',
    position: 'relative',
    top: '-50%',
    transform: 'translate(0, 50%)',
  },
  iconLink: {
    color: 'white',
    marginRight: '4px',
    marginLeft: '4px',
    fontSize: '25px',

  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menuBackground}>
        <Toolbar>
          
          <Typography variant="h5" className={classes.logoTitle}>
            logo
          </Typography>
            <div>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
             
              >
                <MenuItem onClick={handleClose}>Главная</MenuItem>
                <Link onClick={handleClose} to="categories" spy={true} smooth={true}><MenuItem>Категории</MenuItem></Link>
                <Link onClick={handleClose} to="lastWorks" spy={true} smooth={true}><MenuItem>Последние работы</MenuItem></Link>
                <Link onClick={handleClose} to="footer" spy={true} smooth={true}><MenuItem>Контакты</MenuItem></Link>
                
              </Menu>
            </div>
        </Toolbar>
      </AppBar>

      <div className={classes.welcomeHeader}>
      <Typography variant="h4" className={classes.welcomeText}>
            Добро пожаловать на сайт дизайнера
          </Typography>
      </div>

<section id="categories">
<div className={classes.categoriesDiv}>
      <Typography variant="h5" className={classes.categoriesText}>
           Категории
          </Typography>
      </div>
  <Grid
      container
      spacing={4}
      className={classes.gridContainer}
  >
    <Grid item xs={12} sm={6} md={4}>
      <Card />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card />
    </Grid>
  </Grid>
</section>

      <section id="lastWorks">
        <div className={classes.categoriesDiv}>
          <Typography variant="h5" className={classes.categoriesText}>
            Последние работы
          </Typography>
        </div>

          <div className={classes.carouselSlider}>
        <Carousel autoPlay={true} emulateTouch={true} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true}>

          <div>
            <img alt='Арт' src="./img/1.jpg" />
            <p className="legend">Арт</p>
          </div>
          <div>
            <img alt='Векторная графика "Глаз"' src="./img/2.jpg" />
            <p className="legend">Векторная графика "Глаз"</p>
          </div>
          <div>
            <img alt='Векторная графика "Замок"' src="./img/3.jpg" />
            <p className="legend">Векторная графика "Замок"</p>
          </div>
          <div>
            <img alt='Арт "Жертвоприношение"' src="./img/4.jpg" />
            <p className="legend">Арт "Жертвоприношение"</p>
          </div>
          <div>
            <img alt='Арт "Космос"' src="./img/5.png" />
            <p className="legend">Арт "Космос"</p>
          </div>
        </Carousel>
          </div>
      </section>

        <div id="footer" className={classes.footerBack}>
<Typography className={classes.contactsHeader} variant="h3">
  Logo
</Typography>
          <div className={classes.footerLink}>
            <a className={classes.iconLink} href="#">
              <FontAwesomeIcon icon={["fab", "telegram"]} />
            </a>
          <a className={classes.iconLink} href="#">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
          </a>
          <a className={classes.iconLink} href="https://discordapp.com/users/522687034243153922/">
            <FontAwesomeIcon icon={["fab", "discord"]} />
          </a>
          </div>
        </div>
    </div>
  );
}