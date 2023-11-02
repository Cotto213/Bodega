import moment from "moment-timezone";

export function DateTodaySystem() {

  let creacion = moment();
  let hoursystem = new Date(creacion._d);
  var day = hoursystem.getDate();
  if (Number(day) <= 9) {
    day = "0" + day;
  }
  let year = hoursystem.getFullYear();
  let month = hoursystem.getMonth() + 1;//suma 1?
  let mesanterior=Number(month)-Number(1)
   if (Number(month)===Number(1)) {
    mesanterior=12
  }
  if (Number(month) <= 9) {
    month = "0" + month;
  }

  let DateToday = Number(year) + "-" + (month) + "-" + (day);
  
  return { DateToday}

  //fecha de hoy------------------------------------- 
}
