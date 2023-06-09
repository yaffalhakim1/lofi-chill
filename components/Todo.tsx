import { Dialog, Transition } from "@headlessui/react";

import React, { useState, Fragment, useEffect } from "react";
import { IconListTask } from "./Icons";

function Todo() {
  let [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState<{ text: string; checked: boolean }[]>([]);
  const [inputValue, setInputValue] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const addTodo = (todo: string) => {
    setTodos((prevTodos) => [...prevTodos, { text: todo, checked: false }]);
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTodo(inputValue);
    }
  };

  const handleCheck = (index: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].checked = !updatedTodos[index].checked;
      return updatedTodos;
    });
  };

  const handleDelete = (index: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  return (
    <>
      <IconListTask
        width="24px"
        height="24px"
        className="ml-2 cursor-pointer"
        onClick={openModal}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={() => closeModal()} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-white bg-black p-6 text-left align-middle shadow-xl transition-all m-5">
                <Dialog.Title className="font-bold text-xl dark:text-black font">
                  Todo
                </Dialog.Title>
                <Dialog.Description className="mt-1 mb-4 text-md">
                  <input
                    type="text"
                    placeholder="Create a dark mode"
                    className="w-full p-2 rounded-md dark:bg-white border dark:text-black mb-3"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  {/* <p className="dark:text-black text-sm">
                    use enter to add the todo
                  </p> */}

                  <ul>
                    {todos.map((todo, index) => (
                      <li
                        className={`dark:text-black ${
                          todo.checked ? "text-zinc-50" : ""
                        }`}
                        key={index}
                      >
                        <div className="flex justify-between mb-2">
                          <div className="flex">
                            <input
                              type="checkbox"
                              className="mr-2"
                              onChange={() => handleCheck(index)}
                            />
                            <span
                              className={`dark:text-black ${
                                todo.checked ? "text-zinc-50" : ""
                              }`}
                            >
                              {todo.text}
                            </span>
                          </div>
                          <button
                            className="ml-2 text-red-500 justify-end"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Todo;
