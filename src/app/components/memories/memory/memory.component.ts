import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  @Input()
  memory:any;



  constructor() { }

  ngOnInit(): void {
  }

}
