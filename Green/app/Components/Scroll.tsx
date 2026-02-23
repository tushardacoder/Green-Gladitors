import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-green-500 
                  hover:bg-green-600 text-black p-5 
                  rounded-full shadow-lg transition-all 
                  duration-300 ease-in-out
                  ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={28} strokeWidth={3} />
    </button>
  );
};

export default ScrollToTop;