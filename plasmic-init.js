import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { showNotification } from "./helpers/showNotification";
import parseName from "./helpers/parseName";
import { AuthGlobalContext } from "./components/AuthGlobalContext";
import { CurrentPropertyContext } from "./components/CurrentPropertyContext";
import parsePhoneNumber from "./helpers/parsePhoneNumber";
import formatDate from "./helpers/formatDate";
import timeFromNow from "./helpers/timeFromNow";
import timeAgo from "./helpers/timeAgo";
import { registerAll } from "inprodi-design-system";
import parseQueryParams from "./helpers/parseQueryParams";
import updateQueryParam from "./helpers/updateQueryParam";
import removeQueryParam from "./helpers/removeQueryParam";
import { Calendar, registerCalendar } from "./components/Calendar";
import formatCurrency from "./helpers/formatCurrency";
import { registerLimitedDatePicker } from "./components/LimitedDatePicker";
import { registerPartnerOrder } from "./components/PartnerOrder";
import { registerAssignationCalendar } from "./components/AssignationCalendar";
import getConstants from "./helpers/getConstants";
import validateEmail from "./helpers/vaidateEmail";
import validatePhone from "./helpers/validatePhone";
import createDayJsObject from "./helpers/createDayJsObject";
import createFileBlob from "./helpers/createFileBlob";
import { registerCustomUpload } from "./components/CustomUpload";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wDJACxhV6G5muepXjUqzye",
      token: "LGEWMFhqfZynmkk049VI47mUFIHjspc917OcxmFgcIr4ddXumzniz0vLHRr36rwdd0tbVilmtd38Cya5SdQ",
    },
  ],
  preview: true,
});

registerAll( PLASMIC );

registerCalendar( PLASMIC );
registerAssignationCalendar(PLASMIC);
registerLimitedDatePicker( PLASMIC );
registerPartnerOrder( PLASMIC );
registerCustomUpload( PLASMIC );

PLASMIC.registerFunction( getConstants, {
  name : "getConstants",
  params : [],
});

PLASMIC.registerFunction( createFileBlob, {
  name : "createFileBlob",
  params : [
    {
      name        : "base64",
      type        : "string",
      description : "The base64 string to convert to blob",
    },
  ],
});

PLASMIC.registerFunction( validateEmail, {
  name : "validateEmail",
  params : [
    {
      name        : "email",
      type        : "string",
      description : "The email to validate",
    },
  ],
});

PLASMIC.registerFunction( validatePhone, {
  name : "validatePhone",
  params : [
    {
      name        : "phone",
      type        : "string",
      description : "The phone to validate",
    },
  ],
});

PLASMIC.registerFunction( showNotification, {
  name : "showNotification",
  params : [
    {
      name        : "message",
      type        : "string",
      description : "The message to show in the notification",
    },
    {
      name        : "config",
      type        : "object",
      description : "The config for the notification",
    },
  ],
});

PLASMIC.registerFunction( formatCurrency, {
  name : "formatCurrency",
  params : [
    {
      name        : "amount",
      type        : "number",
      description : "The amount to format",
    },
  ],
});

PLASMIC.registerFunction( timeAgo, {
  name : "timeAgo",
  params : [
    {
      name        : "date",
      type        : "string",
      description : "The date to format",
    },
  ],
});

PLASMIC.registerFunction( timeFromNow, {
  name : "timeFromNow",
  params : [
    {
      name        : "date",
      type        : "string",
      description : "The date to format",
    },
  ],
});

PLASMIC.registerFunction( formatDate, {
  name : "formatDate",
  params : [
    {
      name        : "date",
      type        : "string",
      description : "The date to format",
    },
    {
      name        : "format",
      type        : "string",
      description : "The format to use",
    },
  ],
});

PLASMIC.registerFunction( createDayJsObject, {
  name : "createDayJsObject",
  params : [
    {
      name        : "date",
      type        : "string",
      description : "The date to create the dayjs object",
    },
  ],
});

PLASMIC.registerFunction( parseName, {
  name : "parseName",
  params : [
    {
      name        : "user",
      type        : "object",
      description : "Object including name, middleName and lastName",
    },
  ],
});

PLASMIC.registerFunction( parsePhoneNumber, {
  name : "parsePhoneNumber",
  params : [
    {
      name        : "phoneNumber",
      type        : "string",
      description : "The phone number to parse",
    },
  ],
});

PLASMIC.registerFunction( parseQueryParams, {
  name : "parseQueryParams",
  params : [
    {
      name        : "params",
      type        : "object",
      description : "Object with the query to include to the url",
    },
    {
      name : "addToUrl",
      type : "boolean",
      description : "Whether to add the query to the url or not",
    },
  ],
});

PLASMIC.registerFunction( updateQueryParam, {
  name : "updateQueryParam",
  params : [
    {
      name        : "key",
      type        : "string",
      description : "The key to add",
    },
    {
      name        : "value",
      type        : "string",
      description : "The value to add",
    },
  ],
});

PLASMIC.registerFunction( removeQueryParam, {
  name : "removeQueryParam",
  params : [
    {
      name        : "key",
      type        : "string",
      description : "The key to add",
    },
  ],
});

PLASMIC.registerGlobalContext( AuthGlobalContext, {
  name : "AuthGlobalContext",
  props : {},
  providesData : true,
  globalActions : {
    login : {
      parameters : [
        { name : "token", type : "string" },
        { name : "user", type : "object" },
      ],
    },
    update : {
      parameters : [
        { name : "user", type : "object" },
      ],
    },
    logout : {
      parameters : [],
    },
  },
});

PLASMIC.registerGlobalContext( CurrentPropertyContext, {
  name : "CurrentPropertyContext",
  props : {},
  providesData : true,
  globalActions : {
    setProperty : {
      parameters : [
        { name : "property", type : "object" },
      ],
    },
  },
});
