import { RiFilePaper2Line } from "react-icons/ri";
import { FaKaggle, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Social = () => (
  <div className="button__social">
    <div>
      <a href="https://www.kaggle.com/adewgn" target="_blank" rel="noreferrer">
        <FaKaggle />
      </a>
    </div>
    <div>
      <a href="https://codeforces.com/profile/adewgn?csrf_token=912d43832e6c4d5a569fb2db00e1d8ae" target="_blank" rel="noreferrer">
        <SiCodeforces />
      </a>
    </div>
    <div>
      <a href="https://leetcode.com/adewgn/" target="_blank" rel="noreferrer">
        <SiLeetcode />
      </a>
    </div>
    <div>
      <a href="https://github.com/adewgn" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/adewgn/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="" target="_blank" rel="noreferrer">
        <RiFilePaper2Line  />
      </a>
    </div>
  </div>
);

export default Social;