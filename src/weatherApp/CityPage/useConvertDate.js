export const convertDate = (timestamp) => {
    const unix_timestamp = timestamp;
    const date = new Date(unix_timestamp * 1000);

    const hour = date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dayOfTheWeek = date.toLocaleDateString(undefined, {
      weekday: "long",
    });

    return {
      hour,
      dayOfTheWeek,
    };
  };