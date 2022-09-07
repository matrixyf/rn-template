import React from "react";

/*
 * @Author: Hong.Zhang
 * @Date: 2022-09-07 15:33:49
 * @Description:
 */
const enUS = require('./en-US/index.json');
const idID = require('./id-ID/index.json');
const thTH = require('./th-TH/index.json');
const viVN = require('./vi-VN/index.json');

export const Locales = {
  'en-US': enUS,
  'id-ID': idID,
  'th-TH': thTH,
  'vi-VN': viVN,
} as Record<string, any>;

// just in order to provider setLocale function for child component.
export const SetAppLocaleContext = React.createContext<any>(null);
