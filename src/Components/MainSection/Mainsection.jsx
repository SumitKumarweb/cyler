import Three from "./Three";
import "./Mainsection.css";
import ProfileCard from "../ProfileCard/ProfileCard";
 
const Mainsection = () => {
  return (
    <section>
      <div className="side">
        <Three />
      </div>
      <div className="side">
        <ProfileCard/>
      </div>
    </section>
  );
};

export default Mainsection;
