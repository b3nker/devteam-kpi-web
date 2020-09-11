import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  static prettyString(str: string): string {
    if (str.length > 0) {
      return str[0].toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }
}
