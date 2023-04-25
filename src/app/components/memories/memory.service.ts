import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Memory } from './memory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private readonly API_URL = 'http://localhost:3000/memories';


  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Memory[]> {
    return this.httpClient.get<Memory[]>(this.API_URL);
  }

  getById(id: number): Observable<Memory> {
    console.log(id);
    const URL = `${this.API_URL}/${id}`;
    return this.httpClient.get<Memory>(URL);
  }

  createMemory(memory: Memory): Observable<Memory> {
    return this.httpClient.post<Memory>(this.API_URL, memory);
  }

  deleteMemory(id: number): Observable<Memory> {
    const URL = `${this.API_URL}/${id}`;
    return this.httpClient.delete<Memory>(URL);
  }

  updateMemory(memory: Memory): Observable<Memory> {
    const URL = `${this.API_URL}/${memory.id}`;
    return this.httpClient.put<Memory>(URL, memory);
  }






}
