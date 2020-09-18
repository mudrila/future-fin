import { Select, MenuItem } from "@material-ui/core";

import useLanguageSwitcher from "./hooks";
import Input from "./components/Input";

export default function LanguageSelector() {
  const { value, handleChange } = useLanguageSwitcher();

  return (
    <Select
      variant="outlined"
      value={value}
      onChange={handleChange}
      input={<Input />}
    >
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="fr">FR</MenuItem>
      <MenuItem value="de">DE</MenuItem>
      <MenuItem value="ru">RU</MenuItem>
      <MenuItem value="ua">UA</MenuItem>
    </Select>
  );
}
