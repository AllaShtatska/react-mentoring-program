import styled from "styled-components";

const FilterButton = styled.button`
  background: ${props => (props.selected ? "brown" : "grey")};
`;

export default FilterButton;
