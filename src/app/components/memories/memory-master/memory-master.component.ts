import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-memory-master',
  templateUrl: './memory-master.component.html',
  styleUrls: ['./memory-master.component.css']
})
export class MemoryMasterComponent implements OnInit {


  memoryList: Memory[] = [];

  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {
    
    this.memoryService.getAll().subscribe((memos) => {
      this.memoryList = memos;
    });

  }

}
