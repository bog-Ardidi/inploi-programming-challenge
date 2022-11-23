import { Flip, FlipInner, FlipFront, FlipBack } from "../../styles/SearchIcon";

interface SearchIconProps {
  icon_one: JSX.Element;
  icon_two: JSX.Element;
}

export function SearchIcon({ icon_one, icon_two }: SearchIconProps) {
  return (
    <Flip>
      <FlipInner>
        <FlipFront>{icon_one}</FlipFront>
        <FlipBack>{icon_two}</FlipBack>
      </FlipInner>
    </Flip>
  );
}
