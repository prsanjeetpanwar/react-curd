import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col md:mt-20  md:flex-row justify-between gap-80">
      <div className="">
        <form
          action=""
          className="flex flex-col gap-10 w-[600px] md:h-[400px] bg-white p-10 rounded-md shadow-md"
        >
          <div className="mb-4 flex gap-3">
            <label
              className="flex text-center text-sm font-medium text-gray-700"
              htmlFor="first-name"
            >
              First Name:
            </label>
            <input
              type="text"
              id="first-name"
              className="block w-full  py-3 border border-shadow-lg rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
         
          <div className="mb-4 flex gap-3">
            <label
              className=" text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full   py-3 border border-shadow-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 flex gap-3">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="last-name"
            >
             Age:
            </label>
            <input
              type="text"
              id="age"
              className="block w-full  py-3 border border-shadow-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <img src="../src/assets/human2.png" alt="" />
      </div>
    </div>
  );
};

export default Form;