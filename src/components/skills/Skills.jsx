import "./skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className="skills">
      <motion.div className="textContainer">
        <p>
          Languages/Frameworks/Libraries
          <br />I have worked with
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>My</b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>That I</b> Have Learned.
          </h1>
          <button>Learn More</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Languages</h2>
          <p>Javascript</p>
          <button>Placeholder Text</button>
        </div>
        <div className="box">
          <h2>Languages</h2>
          <p>Javascript</p>
          <button>Placeholder Text</button>
        </div>
        <div className="box">
          <h2>Languages</h2>
          <p>Javascript</p>
          <button>Placeholder Text</button>
        </div>
        <div className="box">
          <h2>Languages</h2>
          <p>Javascript</p>
          <button>Placeholder Text</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
