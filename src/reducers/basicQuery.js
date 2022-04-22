import { API_URLS } from "../config/endPoint";
import { timeoutPromise } from "../utils/Tools";

export const DEFAULT_SEARCH_PARAMS = {
  filter: {},
  ignoreAssociation: false,
  isPaginateDB: true,
  page: 1,
  pageSize: -1,
};

export const MODEL_TYPES = {
  profiles: "profiles",
  users: "users",
  products: "products",
  coops: "coops",
  orders: "orders",
  carts: "carts",
  farmers: "farmers",
  manufacturers: "manufacturers",
  consumers: "consumers",
  contracts: "contracts",
};

export const basicQueryPost = async (payload, meta) => {
  const api = API_URLS.BASIC_QUERY.create();
  const _url = api.url;
  const _method = api.method;
  const _headers = api.headers;
  const response = await timeoutPromise(
    fetch(_url, {
      headers: _headers,
      method: _method,
      body: JSON.stringify({
        ...payload,
      }),
    })
  );
  if (!response) {
    const errorResData = await response.json();
    return errorResData;
  }
  const resData = await response.json();
  return resData;
};

export const basicQueryPut = async (payload, meta) => {
  const api = API_URLS.BASIC_QUERY.update();
  const _url = api.url;
  const _method = api.method;
  const _headers = api.headers;

  const response = await timeoutPromise(
    fetch(_url, {
      headers: _headers,
      method: _method,
      body: JSON.stringify({
        ...payload,
      }),
    })
  );
  if (!response) {
    const errorResData = await response.json();
    return errorResData;
  }
  const resData = await response.json();
  return resData;
};

export const basicQueryDelete = async (id, modelType, meta) => {
  const api = API_URLS.BASIC_QUERY.delete();
  const _url = api.url;
  const _method = api.method;
  const _headers = api.headers;

  const response = await timeoutPromise(
    fetch(`${_url}${id}?modelType=${modelType}`, {
      headers: _headers,
      method: _method,
    })
  );
  if (!response) {
    const errorResData = await response.json();
    return errorResData;
  }
  const resData = await response.json();
  return resData;
};

export const basicQuerySearch = async (payload, meta) => {
  const api = API_URLS.SEARCH.filter();
  let filter = payload.filter;
  if (!filter) {
    filter = "{}";
  } else if (typeof filter !== "string") {
    filter = JSON.stringify(filter);
  }
  const _payload = {
    ...DEFAULT_SEARCH_PARAMS,
    ...payload,
    filter,
  };
  const _url = api.url;
  const _method = api.method;
  const _headers = api.headers;

  const response = await timeoutPromise(
    fetch(_url, {
      headers: _headers,
      method: _method,
      body: JSON.stringify({
        ..._payload,
      }),
    })
  );
  if (!response) {
    const errorResData = await response.json();
    return errorResData;
  }
  const resData = await response.json();
  return resData;
};
