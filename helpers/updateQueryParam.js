const updateQueryParam = (key, value) => {
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, "", url.toString());
  }
};

export default updateQueryParam;