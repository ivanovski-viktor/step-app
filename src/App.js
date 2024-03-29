import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleStepDirection(ev) {
    if (ev.target.id === "Next" && step < 3) {
      setStep((cs) => cs + 1);
    } else if (ev.target.id === "Prev" && step > 1) {
      setStep((cs) => cs - 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((cs) => !cs)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              id="Prev"
              handleStepDirection={handleStepDirection}
              styles={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              <span>👈 Prev</span>
            </Button>
            <Button
              id="Next"
              handleStepDirection={handleStepDirection}
              styles={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ id, handleStepDirection, styles, children }) {
  return (
    <>
      <button id={id} onClick={(ev) => handleStepDirection(ev)} style={styles}>
        {children}
      </button>
    </>
  );
}
