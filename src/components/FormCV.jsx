import CreateGeneralInformation from "./GeneralSection";
import CreateEducation from "./Education";
import CreateExperience from "./Experience";
import CreateContact from "./Contact";
import CreateSkills from "./Skills";

export default function createFormCV() {
  return (
    <div className="left-form">
      <CreateGeneralInformation />
      <CreateEducation />
      <CreateExperience />
      <CreateSkills />
      <CreateContact />
    </div>
  );
}
