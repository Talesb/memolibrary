import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memory-detail',
  templateUrl: './memory-detail.component.html',
  styleUrls: ['./memory-detail.component.css']
})
export class MemoryDetailComponent implements OnInit {

  memory: Memory = {
    content: '',
    author: '',
    model: ''
  };


  constructor(private memoryService: MemoryService, private router: Router) { }

  ngOnInit(): void {
  }


  createMemory() {
    this.memoryService.createMemory(this.memory).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }



}
