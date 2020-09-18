import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { i18n } from "../../../../i18n";

import { appSettingsSelector } from "../../../../pages/Settings/redux/selectors";

export default function useLanguageSwitcher() {
  const appSettings = useSelector(appSettingsSelector);
  const [value, setValue] = useState(appSettings.settings.defaultLanguage);

  function handleChange(event) {
    setValue(event.target.value);
    i18n.changeLanguage(value);
  }

  useEffect(() => {
    i18n.changeLanguage(appSettings.settings.defaultLanguage);
  }, []);

  return { value, handleChange };
}
