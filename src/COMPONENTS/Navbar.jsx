import { useState } from "react";
import Button from "./Button";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo-toggle-container">
        <div className="logo">
          <img src="./logo.jpg" alt="logo" />
        </div>

        <div className="nav-toggle" onClick={handleToggle}>
          <CiMenuBurger className="nav-toggle-icon" />
        </div>
      </div>

      <motion.div
        className="nav-right"
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="nav-links">
          <a className="link" href="#create">
            Create
          </a>
          <a className="link" href="#ideas">
            Ideas
          </a>
          <a className="link" href="#explore">
            Explore
          </a>
          <a className="link premium" href="#premium">
            Premium
          </a>
          <a className=" link pro" href="#business">
            Business
          </a>
          <a className="link pro" href="#embed">
            Embed
          </a>
        </div>

        <Button variant="login">Login / Register</Button>
      </motion.div>
    </nav>
  );
}
