// this hook used react-router-dom to get and set query params
// won't work on next.js

import { useLocation, useSearchParams } from "react-router-dom";

type QueryParams = {
  [key: string]: string;
};

type QueryParam = [string, string];

const useAppQueryParam = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParam = (key: string, value: string) => {
    setSearchParams({ [key]: value });
  };

  const addQueryParam = (key: string, value: string) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      newParams.set(key, value);
      return newParams;
    });
  };

  const addManyQueryParams = (queryParams: QueryParam[]) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      queryParams.forEach(([key, value]) => {
        newParams.append(key, value);
      });
      return newParams;
    });
  };

  // const addManyQueryParams = (params: QueryParams) => {
  //   setSearchParams((prevParams) => {
  //     const newParams = new URLSearchParams(prevParams);
  //     Object.entries(params).forEach(([key, value]) => {
  //       newParams.set(key, value);
  //     });
  //     return newParams;
  //   });
  // };

  const removeQueryParam = (key: string) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      newParams.delete(key);
      return newParams;
    });
  };

  const removeManyQueryParams = (keys: string[]) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      keys.forEach((key) => {
        newParams.delete(key);
      });
      return newParams;
    });
  };

  const getQueryParam = (key: string) => {
    return searchParams.get(key);
  };

  const getAllQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    let params: QueryParams = {};
    for (let pair of searchParams.entries()) {
      params[pair[0]] = pair[1];
    }
    return params;
  };

  return {
    setQueryParam,
    getQueryParam,
    addQueryParam,
    addManyQueryParams,
    removeQueryParam,
    removeManyQueryParams,
    getAllQueryParams,
  };
};

export default useAppQueryParam;
