import { useCollapse } from "react-collapsed";
import "./Faq.css";
export const OneFaq = (props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="one-faq-container">
      <div
        className={isExpanded ? "header expanded" : "header"}
        {...getToggleProps()}
      >
        {props.question}
      </div>
      <div {...getCollapseProps()}>
        <hr />
        <div className={isExpanded ? "content expanded" : "content"}>
          {props.answer}
        </div>
      </div>
    </div>
  );
};
