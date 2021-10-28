import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const dialogsHost = document.querySelector('.dialogs');

// @reach-ui
export const Dialog = ({ show = false, onClose = () => {}, children }) => {
  const element = useRef(document.createElement('div'));

  useEffect(() => {
    const targetElement = element.current;
    dialogsHost.append(targetElement);

    return () => {
      targetElement.remove();
    };
  }, [element]);

  const renderDialog = () => {
    if (!show) {
      return <></>;
    }

    return (
      <div className="fixed-top position-absolute d-flex justify-content-center align-items-center vh-100 vw-100">
        <div className="bg-white bg-opacity-100 shadow w-75">
          <header className="py-2 px-3 text-end">
            <button
              className="btn-link bg-transparent p-0 border-0"
              title="Close"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </header>

          <main className="p-2 text-dark">{children}</main>
        </div>
      </div>
    );
  };

  return createPortal(renderDialog(), element.current);
};

export default Dialog;
