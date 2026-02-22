import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
    return (
        <footer>
            <h3>Give me a poke</h3>
            <div>
            <a target="_blank" href="https://www.linkedin.com/in/kaaal/">
                <FaLinkedin fontSize={"30px"}/>
            </a>
            <a target="_blank" href="mailto:md.haikal.kal@gmail.com">
                <MdEmail fontSize={"30px"}/>
            </a>
            <a target="_blank" href="https://github.com/kale06">
                <FaGithubAlt fontSize={"30px"}/>
            </a>
            </div>
            <p style={{
                color:"rgb(211, 191, 233)"
            }} className="sub">
                Lovingly made with React, Vercel, and AnimeJS.
            </p>
            <p style={{
                color:"rgb(211, 191, 233)"
            }} className="sub">
                GNU GPL License.
            </p>
        </footer>
    )
}
