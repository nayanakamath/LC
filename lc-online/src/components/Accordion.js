import React from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div>
      <div onClick={() => setOpen(!isOpen)}> {title} </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;