import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  currentid: string | null = null;


  constructor(private memoryService: MemoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.currentid = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.currentid) {
      this.memoryService.getById(parseInt(this.currentid)).subscribe(memo => {
        this.memory = memo;
      })
    }


  }


  createMemory() {
    if (this.currentid) {
      this.memoryService.updateMemory(this.memory).subscribe(memo => {
        this.router.navigate(['/']);
      });
    } else {
      this.memoryService.createMemory(this.memory).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }


  editMemory() {

  }

  cancel() {
    this.router.navigate(['/']);
  }



}
