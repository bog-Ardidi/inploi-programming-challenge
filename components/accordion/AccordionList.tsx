import { ListEntry } from "../../styles/Accordion.styled";

interface AccordionListProps {
  items: {
    key: string;
    value: HTMLElement | string;
  }[];
  li?: Boolean;
}

export default function AccordionList({ items, li }: AccordionListProps) {
  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>
          <ListEntry li={li}>
            <>
              <div>{item.key}</div>: {item.value}
            </>
          </ListEntry>
        </li>
      ))}
    </div>
  );
}
