import { stringify } from 'querystring';

export function hoje() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  return dd + '/' + mm + '/' + yyyy;
}

export function strToDate(str: string) {
  let strSplit = str.split('/');
  let date = new Date();
  date.setDate(parseInt(strSplit[0]));
  date.setMonth(parseInt(strSplit[1]) - 1);
  date.setFullYear(parseInt(strSplit[2]));
  return date;
}

export function dateToStr(date: Date) {
  let data: string;
  let dia = date.getDate().toString();
  let mes = (date.getMonth() + 1).toString();
  let ano = date.getFullYear().toString();
  data = dia + '/' + mes + '/' + ano;
  return data;
}
