import styled from "styled-components";

export const SearchFilterContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  margin: 1rem 0;
`;

export const StyledSearchWrapper = styled.div`
  position: relative;
  flex: 1;

  ::placeholder {
    color: #6d7887;
  }
`;

export const StyledSearchBar = styled.input`
  width: 100%;
  padding: 0.8rem;
  padding-left: 2.5rem;
  border: none;
  background-color: white;
  border-radius: 25px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
`;
