import cardContainer from "./AccordionCard.module.css";
import {useState} from "react";
import AccordionItem from "./AccordionItem";
import {DATA} from "./Data";

function AccordionCard() {
  const [activeAccordionNumber, setactiveAccordionNumber] = useState(null);

  const handleClick = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setactiveAccordionNumber(null);
    } else {
      setactiveAccordionNumber(accordionNumber);
    }
  };

  return (
    <div className={cardContainer.cardContainer}>
      {DATA.map((item) => (
      <li key={item.id}>
        <AccordionItem
          activeAccordionNumber={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={item.itemNumber}
          question={item.question}
          answer={item.answer}
          />
          </li>
      ))}  
    </div>
  );
}
export default AccordionCard;
