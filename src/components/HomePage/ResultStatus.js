import { useMain } from "../../context/main-context";

function ResultStatus() {
  const { showUserValue } = useMain();
  return (
    <>
      <section className="text-colot-white font-weight-700 font-40 flex-container-center">
        <div className="status">Results: {showUserValue}</div>
      </section>
    </>
  );
}

export { ResultStatus };
