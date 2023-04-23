import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-master',
  templateUrl: './memory-master.component.html',
  styleUrls: ['./memory-master.component.css']
})
export class MemoryMasterComponent implements OnInit {


  memoryList = [
    // {
    //   content: 'Test',
    //   author: 'Talesb',
    //   model: 'modelo3'
    // },
    // {
    //   content: 'Test 2',
    //   author: 'Talesb 2',
    //   model: 'modelo2'
    // },
    // {
    //   content: 'Test 3',
    //   author: 'Talesb 3',
    //   model: 'modelo1'
    // }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
