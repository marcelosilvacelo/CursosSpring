import { Course } from './../models/course';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
//lista de cursos
export class CoursesService {

  private readonly API = '/assets/cursos.json';

//faz a conexão com api-declarar de forma global no appModule
  constructor(private httpClient: HttpClient ) { }

  list() {

    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );

  }
}
