import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public localStorage$: Observable<any>;
  public session$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  constructor() { 
    this.localStorage$= this.session$.pipe( 
      tap((session) => {
        if(session){
          console.log(session)
          localStorage.setItem('session', JSON.stringify(session));
        }
        
      })
    )
    this.localStorage$.subscribe();
    
  }
}
