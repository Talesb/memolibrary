import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-detail',
  templateUrl: './memory-detail.component.html',
  styleUrls: ['./memory-detail.component.css']
})
export class MemoryDetailComponent implements OnInit {

  memory = {
    id: '1',
    content: 'Learning Angular',
    author: 'Talesb',
    model: ''
  };


  constructor() { }

  ngOnInit(): void {
  }


  createMemory() {
    alert('Novo pensamento criado');
  }

  cancel() {
    alert('Novo pensamento cancelado');
  }



}
