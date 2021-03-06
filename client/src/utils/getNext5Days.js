export const getNext5Days = () => {
  const numberArray = [0, 1, 2, 3, 4, 5, 6];
  const dateArray = [];

  numberArray.forEach((number) => {
    let date = new Date(new Date().getTime() + 24 * number * 60 * 60 * 1000);
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      let dd = date.getDate();
      let mm = date.getMonth();
      let yyyy = date.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }
      let dayOfWeek = ''
      switch (date.getDay()) {
        case 1:
          dayOfWeek = "TUE"
          break;
        case 2:
          dayOfWeek = "WED";
          break;
        case 3:
          dayOfWeek = "THUR";
          break;
        case 4:
          dayOfWeek = "FRI";
          break;
        case 5:
          dayOfWeek = "SAT";
          break;
      }

      const showDate = mm + "/" + dd
      const useDate = mm + "/" + dd + "/" + yyyy;

      dateArray.push([showDate, useDate, dayOfWeek]);
    }
  });

  return dateArray;
};
