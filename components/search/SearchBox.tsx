import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { JobsSearchBox } from "../../styles/JobPage.styled";
import { useRouter } from "next/router";

interface SearchProps {
  defaultRefinement: string;
  refine: (refinement: string) => void;
}

const Search = ({ defaultRefinement, refine }: SearchProps) => {
  const [value, setValue] = useState(defaultRefinement);
  const router = useRouter();

  useEffect(() => {
    setValue(defaultRefinement);
    refine(defaultRefinement);
  }, [defaultRefinement, refine]);

  // prettier-ignore
  const onChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    refine(value);
    setValue(value);
    router.replace(
      { pathname: router.asPath.split("?")?.[0], query: { query: value } },
      undefined,
      { shallow: true }
    );
  };

  return (
    <JobsSearchBox
      type="search"
      onChange={onChange}
      placeholder="Search"
      value={value}
    />
  );
};

const SearchBox = connectSearchBox(Search);

export default SearchBox;
