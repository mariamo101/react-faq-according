export default function AccordionItem(props) {
  const { handleClick, activeAccordionNumber, itemNumber, question, answer } =
    props;

  return (
    <div>
      <div onClick={() => handleClick(itemNumber)}>
        {question}
        {activeAccordionNumber === itemNumber ? <p>{answer}</p> : null}
      </div>
    </div>
  );
}
