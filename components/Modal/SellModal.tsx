import React, { useState } from "react";
import createNRT from "./createNRT";
import { useAlert } from "react-alert";
import FlexColumn from "../FlexColumn";
import styled from "styled-components";
import { PurchaseModal } from "..";

const LoadingOverlay = styled(FlexColumn)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255 255 255 / 78%);
  z-index: 99;
  justify-content: center;
  align-items: center;
`;

function Modal(props: { open: Boolean; onClose: Function }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const alert = useAlert();

  return props.open ? (
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    List NRT
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You are about to experience the fastest verification EVER.
                      Click confirm to list your NRT for sale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  setLoading(true);
                  props.onClose();

                  createNRT()
                    .then(tx => {
                      console.log(tx);
                      setLoading(false);
                      // setOpen(true);
                      alert.success("NRT created successfully!");
                    })
                    .catch(err => {
                      console.error(err);
                      setLoading(false);
                      alert.error("Error!");
                    });
                }}
              >
                Confirm
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <LoadingOverlay>
          <span
            style={{ color: "#29b9ff", fontSize: "1.5rem", fontWeight: 500 }}
          >
            Creating NRT
          </span>
          <span style={{ color: "#29b9ff", fontSize: "1rem", fontWeight: 400 }}>
            Please wait...
          </span>
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          </span>
        </LoadingOverlay>
      )}

      <PurchaseModal open={open} />
    </>
  ) : null;
}

export default Modal;
