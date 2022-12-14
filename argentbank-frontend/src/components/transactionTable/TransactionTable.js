import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import EditTransactionsForm from "../editTransactionsForm/EditTransactionsForm";
import PropTypes from "prop-types";

/**
 * Component React displaying table containing transactions data for page transactions
 * @component
 */
const TransactionTable = ({ data }) => {
  const [idItemDeployed, setIdItemDeployed] = useState("");
  const [inputEditedId, setInputEditedId] = useState("");

  /**
   * Function to deploy/undeploy more transactions data (editable data)
   * @param {string} transactionId - Id of the transaction clicked
   */
  function handleDeploy(transactionId) {
    if (idItemDeployed === transactionId) {
      setIdItemDeployed("");
      setInputEditedId("");
    } else {
      setIdItemDeployed(transactionId);
      setInputEditedId("");
    }
  }

  return (
    <table className="transactions-list">
      <thead>
        <tr>
          <th></th>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
          <th>BALANCE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={"transactions" + index}>
            <tr
              className={
                idItemDeployed === item.transactionId
                  ? "transaction-item-row--deployed"
                  : "transaction-item-row--undeployed"
              }
            >
              <td
                onClick={() => handleDeploy(item.transactionId)}
                className="icon-deploy transaction-item"
                data-label=""
              >
                {idItemDeployed === item.transactionId ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </td>
              <td data-label="DATE" className="transaction-item">
                {item.createdAt}
              </td>
              <td data-label="DESCRIPTION" className="transaction-item">
                {item.description}
              </td>
              <td data-label="AMOUNT" className="transaction-item">
                ${item.amount}
              </td>
              <td data-label="BALANCE" className="transaction-item">
                ${item.balance}
              </td>
            </tr>
            <tr
              className={
                idItemDeployed === item.transactionId
                  ? "transaction-item-hiddenRow--deployed"
                  : "transaction-item-hiddenRow--hidden"
              }
            >
              <td colSpan={5}>
                <EditTransactionsForm
                  transactionData={item}
                  inputEditedId={inputEditedId}
                  setInputEditedId={setInputEditedId}
                />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  data: PropTypes.array,
};

export default TransactionTable;
