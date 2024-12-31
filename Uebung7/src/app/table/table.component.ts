import { Component, OnInit } from '@angular/core';
//import:
import { MembersService } from '../shared/members.service';
import { Members } from '../shared/members';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [ ReactiveFormsModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  // code
  members: Members[] = [];
  filterMembers: Members[] = [];
  textButton: string = 'Hide table'
  tableShow: boolean = true;
  search = new FormControl();
  
  constructor(private memberservice: MembersService) {}

  ngOnInit(): void {
    this.memberservice.getAllMembers()
    .then( response => this.members = response )
    .then( ()  => this.filterMembers = this.members )
    .then( () => console.log(' members in tables : ', this.members))
  }

  hideAndShowTable(): void {
    if(this.tableShow) 
    {
      this.tableShow = false;
      this.textButton = 'Show table'
    } 
    else 
    {
      this.tableShow = true;
      this.textButton = 'Hide table'
    }
  }

  filterMember() {
    let searchstring = this.search.value.toLowerCase();
    this.filterMembers = this.members.filter( item => (item.forename.toLowerCase().includes(searchstring)
                                                    || item.surname.toLowerCase().includes(searchstring)))
    console.log('filtermembers : ', this.filterMembers)
  }
}
