import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, sprites, hp}) {
  
  const [isBack, setIsBack] = useState(false)

  const handleSpriteClick = (e) => {
    setIsBack(!isBack)
  }

  return (
    <Card>
      <div onClick={handleSpriteClick}>
        <div className="image">
          <img 
            src={isBack ? sprites.back : sprites.front} 
            alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
