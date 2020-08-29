import { Fragment } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  IconButton,
  Typography,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Menu,
  MenuItem
} from "@material-ui/core";
import {
  ChevronLeft,
  Menu as MenuIcon,
  ExitToAppRounded,
  AccountCircleRounded
} from "@material-ui/icons";

import { ICONS_MAP } from "./config";

import useNavigation from "./hooks";
import useStyles from "./styles";

export default function Navigation() {
  const {
    open,
    handleDrawerClose,
    handleDrawerOpen,
    items,
    isAuthenticated,
    accountMenuAnchorEl,
    handleAccountMenuOpen,
    handleAccountMenuClose,
    handleLogout
  } = useNavigation();
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            FutureFin | Financial Plan Builder
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          {items.map((item) => {
            const ItemIcon = ICONS_MAP[item.KEY];
            return (
              <Link href={item.PATH} passHref={true} key={item.KEY}>
                <a className={classes.link}>
                  <Tooltip title={item.TITLE}>
                    <ListItem button selected={item.selected}>
                      <ListItemIcon>
                        <ItemIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.TITLE} />
                    </ListItem>
                  </Tooltip>
                </a>
              </Link>
            );
          })}
          {isAuthenticated && (
            <Fragment>
              <Tooltip title="Profile">
                <ListItem
                  button
                  selected={Boolean(accountMenuAnchorEl)}
                  onClick={handleAccountMenuOpen}
                >
                  <ListItemIcon>
                    <AccountCircleRounded />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </Tooltip>
              <Menu
                open={Boolean(accountMenuAnchorEl)}
                anchorEl={accountMenuAnchorEl}
                onClose={handleAccountMenuClose}
                keepMounted
                id="account-menu"
              >
                <Link href="/account" passHref={true}>
                  <a className={classes.link}>
                    <MenuItem>
                      <ListItemIcon>
                        <AccountCircleRounded />
                      </ListItemIcon>
                      <ListItemText primary="My Account" />
                    </MenuItem>
                  </a>
                </Link>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToAppRounded />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </MenuItem>
              </Menu>
            </Fragment>
          )}
        </List>
      </Drawer>
    </>
  );
}
