import { useProfileColors } from '../../hooks';
import './Creature.css';

export const Creature = () => {
  const { mainColor, secondaryColor, eyeColor } = useProfileColors;

  return (
    <div
      className="Creature"
      style={{ backgroundColor: mainColor, borderColor: secondaryColor }}
    >
      <div className="Creature-eyes">
        <div className="Creature-eye Creature-eye--blinking Creature-eye--left">
          <div
            className="Creature-eyeIris"
            style={{ backgroundColor: eyeColor }}
          ></div>
          <div
            className="Creature-eyeLid"
            style={{ backgroundColor: secondaryColor }}
          ></div>
        </div>
        <div className="Creature-eye Creature-eye--blinking Creature-eye--right">
          <div
            className="Creature-eyeIris"
            style={{ backgroundColor: eyeColor }}
          ></div>
          <div
            className="Creature-eyeLid"
            style={{ backgroundColor: secondaryColor }}
          ></div>
        </div>
      </div>
      <div className="Creature-noseLine">
        <div
          className="Creature-nose"
          style={{ backgroundColor: secondaryColor, borderColor: mainColor }}
        >
          <div
            className="Creature-noseNostril Creature-noseNostril--left"
            style={{ backgroundColor: mainColor }}
          ></div>
          <div
            className="Creature-noseNostril Creature-noseNostril--right"
            style={{ backgroundColor: mainColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Creature;
