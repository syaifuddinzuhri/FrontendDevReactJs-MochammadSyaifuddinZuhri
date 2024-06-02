import { deleteCookie, getCookie, setCookie } from "cookies-next";

import { isObject } from "@/utils/common";


export const getUrlKeys = (object: Record<string, any>, keepObjectKeys = false, keys = [], scope = []): string[] => {
  if (Array.isArray(object)) {
    object.forEach(obj => getUrlKeys(obj, keepObjectKeys, keys, scope), keys);
  } else if (isObject(object)) {
    Object.keys(object).forEach(item => {
      if ((!Array.isArray(object[item]) && !isObject(object[item])) || keepObjectKeys) {
        const path = `/${scope
          .concat(item as never)
          .join("/")
          .replace(/\.\[/g, "[")}`;
        if (!keys.includes(path as never)) {
          keys.push(path as never);
        }
      }
      getUrlKeys(object[item], keepObjectKeys, keys, scope.concat(item as never));
    }, keys);
  }

  return keys;
};