import ListItem from "./ListItem";

type Props = {
  items: string[];
};

export default function List({ items }: Props) {
  return (
    <ul className="my-5 flex flex-col gap-2">
      {items.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ul>
  );
}
