import getRandomInt from "../../commonFunction/getRandomInt";
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

const Platform = ({ game }) => {
  const _platforms = {
    "PlayStation 5": "PlayStation",
    "PlayStation 4": "PlayStation",
    "PlayStation 3": "PlayStation",
    "Xbox Series S/X": "Xbox",
    "Xbox 360": "Xbox",
    "Xbox One": "Xbox",
    PC: "PC",
    Linux: "Linux",
    Android: "Android",
    iOS: "iOS",
  };
  let platforms = game.platforms.map((platform) => {
    return _platforms[platform] || undefined;
  });
  let findDuplicates = [];
  platforms.forEach((item, index) => {
    if (platforms.indexOf(item) === index && item !== undefined) {
      findDuplicates.push(item);
    }
  });
  const max = 99999999;
  return findDuplicates.map((platform) => {
    switch (platform) {
      case "PlayStation":
        return <FaPlaystation key={getRandomInt(max)} />;
      case "Xbox":
        return <FaXbox key={getRandomInt(max)} />;
      case "PC":
        return <FaWindows key={getRandomInt(max)} />;
      case "Linux":
        return <FaLinux key={getRandomInt(max)} />;
      case "Android":
        return <FaAndroid key={getRandomInt(max)} />;
      case "iOS":
        return <FaApple key={getRandomInt(max)} />;
      default:
        return null;
    }
  });
};
export default Platform;
