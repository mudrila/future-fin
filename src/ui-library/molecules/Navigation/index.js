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
  MenuItem,
  Grid,
  Avatar
} from "@material-ui/core";
import {
  ChevronLeft,
  Menu as MenuIcon,
  ExitToAppRounded,
  AccountCircleRounded,
  SettingsApplicationsRounded
} from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    handleLogout,
    avatarUrl,
    name,
    t
  } = useNavigation();
  const isMobile = useMediaQuery("(max-width:768px)");
  const classes = useStyles({ isMobile });

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Grid container justify="space-between">
            <Grid container item xs={11}>
              <Grid item xs={1} className={classes.appBarTogglerContainer}>
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
              </Grid>
              <Grid item xs={11} className={classes.headerTextContainer}>
                <Typography
                  variant="h5"
                  noWrap
                  className={isMobile ? classes.mobileDrawerHeader : null}
                >
                  FutureFin {!isMobile && " | " + t("nav:header")}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1} container justify="flex-end">
              {isAuthenticated && (
                <Fragment>
                  <Tooltip title={t("nav:profile")}>
                    <IconButton onClick={handleAccountMenuOpen}>
                      <Avatar
                        src={avatarUrl}
                        alt={name}
                        className={classes.purpleAvatar}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    open={Boolean(accountMenuAnchorEl)}
                    anchorEl={accountMenuAnchorEl}
                    onClose={handleAccountMenuClose}
                    id="account-menu"
                  >
                    <Link href="/account" passHref={true}>
                      <a
                        className={classes.link}
                        onClick={handleAccountMenuClose}
                      >
                        <MenuItem>
                          <ListItemIcon>
                            <AccountCircleRounded />
                          </ListItemIcon>
                          <ListItemText primary={t("nav:account")} />
                        </MenuItem>
                      </a>
                    </Link>
                    <Link href="/settings" passHref={true}>
                      <a
                        className={classes.link}
                        onClick={handleAccountMenuClose}
                      >
                        <MenuItem>
                          <ListItemIcon>
                            <SettingsApplicationsRounded />
                          </ListItemIcon>
                          <ListItemText primary={t("nav:appSettings")} />
                        </MenuItem>
                      </a>
                    </Link>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <ExitToAppRounded />
                      </ListItemIcon>
                      <ListItemText primary={t("nav:logout")} />
                    </MenuItem>
                  </Menu>
                </Fragment>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
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
        open={open}
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
                <a
                  className={classes.link}
                  onClick={isMobile && handleDrawerClose}
                >
                  <Tooltip title={t(item.TR_KEY)}>
                    <ListItem button selected={item.selected}>
                      <ListItemIcon>
                        <ItemIcon />
                      </ListItemIcon>
                      <ListItemText primary={t(item.TR_KEY)} />
                    </ListItem>
                  </Tooltip>
                </a>
              </Link>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
