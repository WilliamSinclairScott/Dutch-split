import LandingDivvyCard from "../components/LandingDivvyCard";
import { useContext } from "react";
const Landing = () => {

  return(
    <div>
      <LandingDivvyCard divvyName='Divvy 1' divvyParticipantCount={5} divvyID={'dfonrrmvc'}/>
      <LandingDivvyCard divvyName='Divvy 2' divvyParticipantCount={3} divvyID={'asdfnpcmeimd'}/>
      <LandingDivvyCard divvyName='Divvy 3' divvyParticipantCount={2} divvyID={'aonecdmslkd'}/>
    </div>
  )
}

export default Landing;