import qs from "qs";

const parseQueryParams = (params, addToUrl) => {
  const queryString = qs.stringify(params, { encodeValuesOnly: true });

  if (addToUrl) {
    const url = new URL(window.location.href);
    url.search = queryString;
    window.history.pushState({}, "", url.href);
  }

  return queryString;
};

export default parseQueryParams;
