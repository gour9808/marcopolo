import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcoPoloService {

  constructor() { }

  marcoPoloFunc(val) {
    let message = '';
    for (let i = 1; i <= val; i++) {
      if (i % 4 === 0 && i % 7 === 0) {
        message += 'marcopolo,';
      } else if (i % 4 === 0) {
        message += 'marco,';

      } else if (i % 7 === 0) {
        message += 'polo,';

      } else {
        message += i;
        message += ',';
      }
    }
    message = message.substring(0, message.length - 1);
    return message;
  }
}
