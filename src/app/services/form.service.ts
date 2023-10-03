import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  step: BehaviorSubject<any> = new BehaviorSubject(null);
  basicInfo: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}
}
