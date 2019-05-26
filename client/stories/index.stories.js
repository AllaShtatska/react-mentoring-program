import React from "react";
import { storiesOf } from "@storybook/react";
import SortOption from "../src/components/Sort/SortOption";
import sortType from "../src/components/Sort/sortType";

storiesOf("SortOption", module).add("selected", () => (
  <SortOption
    key={sortType.releaseDate}
    currentSortType={sortType.releaseDate}
    sortType={sortType.releaseDate}
    onSwitchSortType={() => {
      console.log("selected");
    }}
  />
));
