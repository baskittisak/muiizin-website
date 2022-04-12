import { memo } from "react";
import styled from "styled-components";
import { Input } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as search_icon } from "../../../assets/icons/search.svg";

const InputContainer = styled(Input)`
  border-bottom: 1px solid #8fa29a;
  outline: none;
  box-shadow: none;
  padding: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;

  :hover {
    border-color: #8fa29a !important;
  }
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer
      value={search}
      prefix={<Icon component={search_icon} />}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default memo(Search);
