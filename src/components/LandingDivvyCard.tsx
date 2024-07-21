import { Card, Flex, IconButton } from '@radix-ui/themes';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import React from 'react';
import { redirect } from 'react-router-dom';

interface LandingDivvyCardProps {
  // Define your props here
  divvyName: string | null;
  divvyParticipantCount: number | null;
  divvyID: string | null;
}

const LandingDivvyCard: React.FC<LandingDivvyCardProps> = (props) => {
  
  
  const [divvyName, setDivvyName] = React.useState<string | null>(props.divvyName);
  const [divvyParticipantCount, setDivvyParticipantCount] = React.useState<number | null>(props.divvyParticipantCount);
  const [divvyID, setDivvyID] = React.useState<string | null>(props.divvyID);

  const gotoDivvy = () => {
    console.log(`Redirecting to /${divvyID}`);
    redirect(`/${divvyID}`);
  };

  return (
    <Card>
      <Flex direction='row' align='center' gap='2'>
        <h3>
          {divvyName ? divvyName : 'ERROR: NO NAME'}
        </h3>
        <Flex direction='column' justify='between' align='center'>
          <div>
            Empty placeholder
          </div>
          <h4>
            {divvyParticipantCount ? divvyParticipantCount : 'ERROR: NO PARTICIPANT COUNT'}
          </h4>
        </Flex>
        <IconButton onClick={() => gotoDivvy()} >
          <PaperPlaneIcon/>
        </IconButton>
      </Flex>
    </Card>
  );
};

export default LandingDivvyCard;