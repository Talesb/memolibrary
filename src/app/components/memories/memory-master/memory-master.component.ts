import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-master',
  templateUrl: './memory-master.component.html',
  styleUrls: ['./memory-master.component.css']
})
export class MemoryMasterComponent implements OnInit {


  memoryList = [
    {
      content: 'Test',
      author: 'Talesb',
      model: 'modelo3'
    },
    {
      content: 'Test 2',
      author: 'Talesb 2',
      model: 'modelo2'
    },
    {
      content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum sagittis dolor, et convallis metus. Donec id est in eros viverra tincidunt vitae rhoncus mauris. Donec lacinia nunc non sapien sodales cursus. Ut laoreet ex nec turpis egestas posuere. Cras non dolor fringilla, fringilla risus eget, finibus elit. Nullam tincidunt nunc et libero vulputate rutrum. ',
      author: 'Talesb 3',
      model: 'modelo1'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
