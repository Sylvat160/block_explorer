import React, { useState } from 'react'
import { search } from '../assets';
import { useNavigate } from 'react-router-dom';
const SearchBar = ({placeholder}) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        const addressRegex = new RegExp("0x[0-9a-fA-F]{40}");
        const blockRegex = new RegExp("^[0-9]{1,9999}$");
        const txRegex = new RegExp("0x[0-9a-fA-F]{64}");

         if (searchTerm.match(txRegex)) {
           navigate(`/tx/${searchTerm}`);
         } else if (searchTerm.match(addressRegex)) {
           navigate(`/address/${searchTerm}`);
         } else if (searchTerm.match(blockRegex)) {
           navigate(`/block/${searchTerm}`);
         } else if (searchTerm === "") {
           navigate("/");
         } else {
           alert("Invalid search term");
         }

        
    }

  return (
    <section className="m-auto flex w-full flex-col">
      <form className="relative flex bg-white rounded-lg justify-center items-center" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          // TODO: Allow for Domain name search in the future
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-10 w-full  border-secondaryBgLight bg-tertiaryBgLight py-2 pl-8 placeholder:text-sm placeholder:text-tertiaryBgDark focus:border-transparent focus:outline-none focus:ring-2 dark:border-secondaryBgDark dark:bg-tertiaryBgDark dark:placeholder:text-tertiaryBgLight text-gray-700"
        />

        <button
          type="submit"
          className=" w-12 m-1 flex items-center justify-center bg-[#0670A6] border border-white rounded-xl"
        >
          <img src={search} alt="search" className="w-10" />
        </button>
      </form>
    </section>
  );
}

export default SearchBar