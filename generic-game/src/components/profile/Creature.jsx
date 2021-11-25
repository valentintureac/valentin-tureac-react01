import './Creature.css';

export const Creature = () => {
  return (
    <div className="Creature">
      <div className="Creature-eyes">
        <div className="Creature-eye Creature-eye--blinking Creature-eye--left">
          <div className="Creature-eyeIris"></div>
          <div className="Creature-eyeLid"></div>
        </div>
        <div className="Creature-eye Creature-eye--blinking Creature-eye--right">
          <div className="Creature-eyeIris"></div>
          <div className="Creature-eyeLid"></div>
        </div>
      </div>
      <div className="Creature-noseLine">
        <div className="Creature-nose">
          <div className="Creature-noseNostril Creature-noseNostril--left"></div>
          <div className="Creature-noseNostril Creature-noseNostril--right"></div>
        </div>
      </div>
    </div>
  );
};

export default Creature;
