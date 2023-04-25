import { Component, Input, OnInit } from '@angular/core';
import { Memory } from '../memory';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  @Input()
  memory: Memory = {
    id: 0,
    content: '',
    author: '',
    model: 'modelo1'
  };



  constructor() { }

  ngOnInit(): void {
  }


  memoryWidth(): string {
    if (this.memory.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
