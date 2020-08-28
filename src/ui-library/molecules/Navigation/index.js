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
  Tooltip
} from "@material-ui/core";
import { ChevronLeft, Menu } from "@material-ui/icons";

import { ICONS_MAP } from "./config";

import useNavigation from "./hooks";
import useStyles from "./styles";

export default function Navigation() {
  const { open, handleDrawerClose, handleDrawerOpen, items } = useNavigation();
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
            <Menu />
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
        </List>
      </Drawer>
    </>
  );
}
