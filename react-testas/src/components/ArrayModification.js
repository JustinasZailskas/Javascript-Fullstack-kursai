import React, { useState } from "react";

function ArrayModification() {
  const [teamValue, setTeamValue] = useState("");
  const [teamCityValue, setTeamCityValue] = useState("");
  const [teamList, setTeamList] = useState([]);

  const addTeam = () => {
    const nextID = teamList.length + 1;
    setTeamList([
      ...teamList,
      {
        id: nextID,
        teamTitle: teamValue,
        teamCity: teamCityValue,
      },
    ]);
    setTeamValue("");
    setTeamCityValue("");
  };
  const deleteTeam = (id) => {
    const updatedItems = [...teamList.slice(0, id - 1), ...teamList.slice(id)];
    setTeamList(updatedItems);
  };
  return (
    <>
      <label>
        Iveskite komandos pavadinima
        <input
          name="team"
          value={teamValue}
          onChange={(e) => setTeamValue(e.target.value)}
        />
      </label>
      <label>
        Iveskite komandos miesta
        <input
          name="team"
          value={teamCityValue}
          onChange={(e) => setTeamCityValue(e.target.value)}
        />
      </label>
      <button onClick={addTeam}>Iterpti komanda</button>
      <ul>
        {teamList.map((item) => {
          return (
            <li key={item.id}>
              Komandos pavadinimas {item.teamTitle}, ji is miesto:{" "}
              {item.teamCity}
              <button onClick={() => deleteTeam(item.id)}>Istrinti</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArrayModification;
