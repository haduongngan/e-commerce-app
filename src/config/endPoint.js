const HEADERS = {
  DEFAULT_HEADER: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  header: () => ({
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    //Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    //RefreshToken: localStorage.getItem("reft"),
  }),
  jsonHeader: () => ({
    "Content-Type": "application/json; charset=UTF-8",
  }),
  file_header: () => ({
    "Content-Type": "multipart/form-data",
  }),
  scm_header: () => ({
    "Content-Type": "application/json; charset=UTF-8",
  }),
};

export const API_URLS = {
  BASIC_QUERY: {
    create: () => ({
      url: "https://linkepee.herokuapp.com/api/v1/basicQueries/basicQuery/",
      method: "POST",
      headers: HEADERS.header(),
    }),
    update: () => ({
      url: `https://linkepee.herokuapp.com/api/v1/basicQueries/basicQuery/`,
      method: "PUT",
      headers: HEADERS.header(),
    }),
    delete: () => ({
      url: "https://linkepee.herokuapp.com/api/v1/basicQueries/basicQuery/delete",
      method: "PUT",
      headers: HEADERS.header(),
    }),
  },
  SEARCH: {
    filter: () => ({
      url: "https://linkepee.herokuapp.com/api/v1/filters/filter",
      method: "POST",
      headers: HEADERS.header(),
    }),
  },
  FILE: {
    uploadWithPath: () => ({
      url: "https://linkepee.herokuapp.com/api/v1/file/upload-with-path",
      method: "POST",
      headers: HEADERS.header(),
    }),
  },
};
