import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remove-memory-modal',
  templateUrl: './remove-memory-modal.component.html',
  styleUrls: ['./remove-memory-modal.component.css']
})
export class RemoveMemoryModalComponent implements OnInit {

  memory: Memory = {
    content: '',
    author: '',
    model: ''
  }

  constructor(private memoryService: MemoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.memoryService.getById(parseInt(id!)).subscribe(memo => {
      this.memory = memo;
    })
  };


  deleteMemory() {
    if (this.memory.id) {
      this.memoryService.deleteMemory(this.memory.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }


}
