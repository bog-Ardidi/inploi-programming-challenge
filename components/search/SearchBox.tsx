import { ChangeEvent, useEffect, useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { JobsSearchBox } from "../../styles/JobPage.styled";

interface SearchProps {
  defaultRefinement: string;
  refine: (refinement: string) => void;
}

const Search = ({ defaultRefinement, refine }: SearchProps) => {
  const [value, setValue] = useState(defaultRefinement);

  useEffect(() => {
    setValue(defaultRefinement);
    refine(defaultRefinement);
  }, [defaultRefinement]);

  // prettier-ignore
  const onChange = ({currentTarget: {value}}: ChangeEvent<HTMLInputElement>) => {
    refine(value);

    setValue(value);
  };

  return (
    <form noValidate action="" role="search">
      <JobsSearchBox
        type="search"
        onChange={onChange}
        placeholder="Search"
        value={value}
      />
    </form>
  );
};

const SearchBox = connectSearchBox(Search);

export default SearchBox;
