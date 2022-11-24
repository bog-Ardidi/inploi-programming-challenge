import { ListEntry } from "../../styles/Accordion.styled";

interface AccordionListProps {
  items: {
    key: string;
    value: string;
  }[];
  li?: Boolean;
}

export default function AccordionList({ items, li }: AccordionListProps) {
  return (
    <div>
      {items.map((item, index) => (
        <ListEntry key={index} li={li}>
          <>
            <div>{item.key}</div>: {item.value}
          </>
        </ListEntry>
      ))}
    </div>
  );
}
