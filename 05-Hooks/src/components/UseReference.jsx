import { useRef } from "react";

function UseReference() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      
      
    </>
  );
}
export default UseReference;