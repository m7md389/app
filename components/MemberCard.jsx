import React from "react";
import memberCardStyles from "../styles/MemberCard.module.scss";

const MemberCard = (props) => {
  const { name, photoUrl, cv } = props;
  return (
    <section role="member" className={memberCardStyles.container}>
      <div className={memberCardStyles.member}>
        <img
          className={memberCardStyles.photo}
          src={photoUrl}
          alt={`Photo of  ${name}`}
        />
        <h3 className={memberCardStyles.name}>{name}</h3>
      </div>
      <p className={memberCardStyles.cv}>{cv}</p>
    </section>
  );
};

export default MemberCard;