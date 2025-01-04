import React from "react";

interface ListItem {
  icon: string;
  label: string;
}

interface ListProps {
  title: string;
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <ul>
      <p className="py-2 md:py-3 text-PeacockBlue-400 text-lg">{title}</p>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${(item.label === "تسجيل الخروج" || item.label === "Logout") ? " text-red-600":""} py-1 md:py-2 flex gap-2 md:gap-3 hover:bg-PeacockBlue-800 transition-all duration-100`}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
