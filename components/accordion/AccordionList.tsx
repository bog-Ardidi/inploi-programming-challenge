import { ListEntry } from "../../styles/Accordion.styled";

interface AccordionListProps {
  items: {
    key: string;
    value: HTMLElement | string;
  }[];
}

export default function AccordionList({ items }: AccordionListProps) {
  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>
          <ListEntry>
            <>
              <div>{item.key}</div>: {item.value}
            </>
          </ListEntry>
        </li>
      ))}
    </div>
  );
}
