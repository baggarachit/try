import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Form } from './form123'

@Injectable()
export class FormService {
    private configUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
    private PostUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
    constructor(private http: HttpClient) { }

getConfig(): Observable<Form> {
  return this.http.get<Form>(this.configUrl);
}
postConfig(form: Form): Observable<Form> {
    return this.http.post<Form>(this.PostUrl, form);
  }
  
}