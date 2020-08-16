import React from "react";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FlexSearch from "flexsearch";
import SearchIcon from "@material-ui/icons/Search";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import * as mui from "@material-ui/icons";
import useStyles from "./styles";
import synonyms from "./synonyms";

if (process.env.NODE_ENV !== "production") {
  Object.keys(synonyms).forEach((icon) => {
    if (!mui[icon]) {
      throw new Error(`The icon ${icon} does no longer exist.`);
    }
  });
}

function selectNode(node) {
  // Clear any current selection
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Select code
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.addRange(range);
}

let Icons = ({ icons, classes, handleClickOpen, name, value }) => {
  const handleClick = (event) => {
    selectNode(event.currentTarget);
  };

  return (
    <section>
      {icons.map((icon) => {
        return (
          <span key={icon.key} className={clsx("markdown-body", classes.icon)}>
            <icon.Icon
              tabIndex={-1}
              onClick={handleClickOpen}
              title={icon.key}
              className={clsx(classes.iconSvg, {
                [classes.selectedIcon]: value === icon.key
              })}
              name={name}
            />
            <p onClick={handleClick}>{icon.key}</p>
          </span>
        );
      })}
    </section>
  );
};

Icons.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  icons: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
Icons = React.memo(Icons);

const searchIndex = FlexSearch.create({
  async: true,
  tokenize: "full"
});

export const allIconsMap = {};
export const allIcons = Object.keys(mui)
  .sort()
  .map((key) => {
    let tag;
    if (key.indexOf("Outlined") !== -1) {
      tag = "Outlined";
    } else if (key.indexOf("TwoTone") !== -1) {
      tag = "Two tone";
    } else if (key.indexOf("Rounded") !== -1) {
      tag = "Rounded";
    } else if (key.indexOf("Sharp") !== -1) {
      tag = "Sharp";
    } else {
      tag = "Filled";
    }

    let searchable = key.replace(/(Outlined|TwoTone|Rounded|Sharp)$/, "");
    if (synonyms[searchable]) {
      searchable += ` ${synonyms[searchable]}`;
    }
    searchIndex.add(key, searchable);

    const icon = {
      key,
      tag,
      Icon: mui[key]
    };
    allIconsMap[key] = icon;
    return icon;
  });

export default function IconSelector({ onChange, helperText, name, value }) {
  const classes = useStyles();
  const [tag, setTag] = React.useState("Filled");
  const [keys, setKeys] = React.useState(null);

  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = React.useMemo(
    () =>
      debounce((value) => {
        if (!isMounted.current) {
          return;
        }

        if (value === "") {
          setKeys(null);
        } else {
          searchIndex.search(value).then((results) => {
            setKeys(results);
          });
        }
      }, 220),
    []
  );

  const icons = React.useMemo(
    () =>
      (keys === null ? allIcons : keys.map((key) => allIconsMap[key])).filter(
        (icon) => tag === icon.tag
      ),
    [tag, keys]
  );

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={3}>
        <section className={classes.form}>
          <RadioGroup>
            {["Filled", "Outlined", "Rounded", "Two tone", "Sharp"].map(
              (key) => {
                return (
                  <FormControlLabel
                    key={key}
                    control={
                      <Radio
                        checked={tag === key}
                        onChange={() => setTag(key)}
                        value={key}
                      />
                    }
                    label={key}
                  />
                );
              }
            )}
          </RadioGroup>
        </section>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Paper className={classes.paper}>
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            autoFocus
            onChange={(event) => {
              handleChange(event.target.value);
            }}
            className={classes.input}
            placeholder={"Search icon ..."}
            inputProps={{ "aria-label": "search icons" }}
          />
        </Paper>
        <Typography
          className={classes.results}
        >{`${icons.length} matching results`}</Typography>
        <Icons
          icons={icons}
          classes={classes}
          handleClickOpen={onChange}
          name={name}
          value={value}
        />
      </Grid>
    </Grid>
  );
}

IconSelector.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
