import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  function PrevPage() {
    navigate(-1);
  }

  return (
    <nav>
      <button onClick={PrevPage} className="w-8 h-8 mb-36 md:mb-20 mt-6 flex items-center justify-center rounded-full bg-transparent">
        <IoMdArrowRoundBack size={22} name="prev" />
      </button>
    </nav>
  );
}