import { Fragment } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
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
  ListItemText
} from "@material-ui/core";
import { ChevronLeft, Menu } from "@material-ui/icons";

import { HoverablePopover } from "../../";
import { ICONS_MAP } from "./config";

import useNavigation from "./hooks";
import useStyles from "./styles";

export default function Navigation({ items }) {
  const { open, handleDrawerClose, handleDrawerOpen } = useNavigation();
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
            const TriggerComponent = (props) => (
              <a {...props}>
                <ListItem button selected={item.selected}>
                  <ListItemIcon>
                    <ItemIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.TITLE} />
                </ListItem>
              </a>
            );
            return (
              <Link href={item.PATH} passHref={true} key={item.KEY}>
                <HoverablePopover TriggerComponent={TriggerComponent}>
                  <Typography>{item.TITLE}</Typography>
                </HoverablePopover>
              </Link>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      KEY: PropTypes.string.isRequired,
      PATH: PropTypes.string.isRequired,
      TITLE: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};
