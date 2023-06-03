import { useState } from "react";
import { copy, ok } from "../assets";


const CopyToClipboard = ({ text }) => {
  // State for keeping track of copied text
  const [copiedText, setCopiedText] = useState("");

  /**
   * Copies text to the user's clipboard
   *
   * @param {string} text - The text to be copied
   */
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(false), 3000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  // Render button and handle click event
  return (
    <>
      <button
        // Button styles
        className="text-transactionGray hover:text-activeLight"
        // Handle click event to copy text to clipboard
        onClick={() => copyToClipboard(text)}
      >
        <img
          src={copiedText === text ? ok : copy}
          className="hover:outline-activeDark w-4 pl-1"
          alt="copy to clipboard"
        />
      </button>
    </>
  );
};

export default CopyToClipboard;
