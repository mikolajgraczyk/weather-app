import {
  ClearIcon,
  CloudyIcon,
  ThunderstormIcon,
  MistIcon,
  RainIcon,
  SnowIcon,
  DrizzleIcon,
  FogIcon,
  TornadoIcon,
} from "./weatherIcons/index";

export const selectIcon = (condition) => {
  switch (condition) {
    case "Clear":
      return <ClearIcon />;
    case "Clouds":
      return <CloudyIcon />;
    case "Thunderstorm":
      return <ThunderstormIcon />;
    case "Rain":
      return <RainIcon />;
    case "Mist":
      return <MistIcon />;
    case "Snow":
      return <SnowIcon />;
    case "Drizzle":
      return <DrizzleIcon />;
    case "Fog":
      return <FogIcon />;
    case "Tornado":
      return <TornadoIcon />;
  }
};
