"use client";

import { Drawer } from "flowbite-react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

export function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className=" fixed top-6 right-6 flex items-center justify-center z-40">
        <button onClick={() => setIsOpen(!isOpen)} className="transition duration-500 ease-in-out bg-primary hover:bg-primaryDark px-3 py-1 shadow-lg text-white rounded-md">
            <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="z-50">
        <Drawer.Header title="Navigation" />
        <Drawer.Items>
            <div className="flex flex-col space-y-6 text-secondary">
                <a href="#" onClick={() => setIsOpen(false)} className="transition duration-400 ease-in-out text-primary hover:text-primary">Home</a>
                <a href="#about" onClick={() => setIsOpen(false)} className="transition duration-400 ease-in-out hover:text-primary">About</a>
                <a href="#skills" onClick={() => setIsOpen(false)} className="transition duration-400 ease-in-out hover:text-primary">Skills</a>
                <a href="#blog" onClick={() => setIsOpen(false)} className="transition duration-400 ease-in-out hover:text-primary">Blog</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="transition duration-400 ease-in-out hover:text-primary">Contact</a>
            </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}