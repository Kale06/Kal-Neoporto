import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import anime from "animejs";

export function Header() {

  const navigate = useNavigate();

  useEffect(() => {
    anime({
      targets: "header",
      translateY: [-25, 0],
      opacity: [0, 1],
      duration: 500,
      easing: "easeOutQuad", 
    })
  }, []);

  function reloadSite(){
    navigate('/');
  }

  return (
    <header>
      <button onClick={reloadSite} className="invis logo">
        haikaaal.vercel.app
      </button>
    </header>
  );
}
