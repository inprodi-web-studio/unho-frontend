const removeQueryParam = (key) => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete(key);
      window.history.pushState({}, "", url.toString());
    }
  };
  
export default removeQueryParam;  