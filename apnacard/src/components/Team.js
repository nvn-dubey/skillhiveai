import React from 'react';

export default function Team(props) { 
  return (
    
     props.team.map((team,i)=>{
        return <team team={team} key={i}/>;
     })

    
  );
}
