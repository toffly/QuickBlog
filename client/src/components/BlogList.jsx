import { useState } from "react";
import { blogCategories } from "../assets/assets";
import { motion } from "motion/react";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative isolate cursor-pointer rounded-full px-4 py-1 text-gray-500 transition-colors ${menu === item ? "text-white" : ""}`}
            >
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 z-0 rounded-full bg-primary"
                ></motion.div>
              )}
              <span className="relative z-10">{item}</span>
            </button>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default BlogList;
