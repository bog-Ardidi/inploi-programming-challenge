import { ListEntry } from "../../styles/Accordion.styled";

interface AccordionListProps {
  items: {
    key: string;
    value: string;
  }[];
  li?: Boolean;
}

// this component is used to easily list all the fields
// in the accordion and the card
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
