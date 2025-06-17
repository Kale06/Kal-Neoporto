import { useEffect } from "react";
import anime from "animejs";

export function Line({backgroundColor = "black", height = "100px"}) {

    return (
        <div 
        style={{
            backgroundColor,
            height
        }}
        className="line" />
    )
}