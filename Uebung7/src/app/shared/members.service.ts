import { Injectable } from '@angular/core';
import { Members } from './members'; //imp

@Injectable({
  providedIn: 'root'
})
export class MembersService { // umbennen in MembersService

  constructor() { }

  // all members holen
  async getAllMembers(): Promise<Members[]> {
    let response = await fetch('/members.json')
    let staedte = await response.json()
    return staedte
  }
}
