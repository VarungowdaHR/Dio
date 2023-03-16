import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faN, faMusic, faSchool, faPodcast, faFilm, faGamepad, faVideo, faFootballBall, faPersonHalfDress,faFaceSmile, faMasksTheater, faDumbbell, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faReact,  } from "@fortawesome/free-brands-svg-icons";


export const channels=[
  { name: 'New', icon: <FontAwesomeIcon icon={faHome} /> },
  { name: 'JS Mastery', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'Coding', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'ReactJS', icon: <FontAwesomeIcon icon={faReact} />, },
  { name: 'NextJS', icon: <FontAwesomeIcon icon={faN} />, },
  { name: 'Music', icon: <FontAwesomeIcon icon={faMusic} /> },
  { name: 'Education', icon: <FontAwesomeIcon icon={faSchool} />, },
  { name: 'Podcast', icon: <FontAwesomeIcon icon={faPodcast} />, },
  { name: 'Movie', icon: <FontAwesomeIcon icon={faFilm} />, },
  { name: 'Gaming', icon: <FontAwesomeIcon icon={faGamepad} />, },
  { name: 'Live', icon: <FontAwesomeIcon icon={faVideo} />, },
  { name: 'Sport', icon: <FontAwesomeIcon icon={faFootballBall} />, },
  { name: 'Fashion', icon: <FontAwesomeIcon icon={faPersonHalfDress} />, },
  { name: 'Beauty', icon: <FontAwesomeIcon icon={faFaceSmile} />, },
  { name: 'Comedy', icon: <FontAwesomeIcon icon={faMasksTheater} />, },
  { name: 'Gym', icon: <FontAwesomeIcon icon={faDumbbell} />, },
  { name: 'Crypto', icon: <FontAwesomeIcon icon={faMoneyBill} />, },
]
