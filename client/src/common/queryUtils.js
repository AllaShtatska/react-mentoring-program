import SEARCH_FILTER_TYPE from "../components/SearchFilter/searchFilterType";
import SORT_TYPE from "../components/Sort/sortType";

export const getFilterPart = (filterType, filterValue) => {
  if (filterValue === "") return "";
  switch (filterType) {
    case SEARCH_FILTER_TYPE.title:
      return `&search=${filterValue}&searchBy=title`;
    case SEARCH_FILTER_TYPE.genre:
      return `&search=${filterValue}&searchBy=genres`;
  }
};

export const getSortPart = (sortType) => {
  switch (sortType) {
    case SORT_TYPE.releaseDate:
      return "&sortBy=release_date&sortOrder=desc";
    case SORT_TYPE.rating:
      return "&sortBy=vote_average&sortOrder=desc";
  }
};
