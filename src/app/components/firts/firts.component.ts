import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firts',
  templateUrl: './firts.component.html',
  styleUrls: ['./firts.component.scss']
})
export class FirtsComponent implements OnInit {

  public username: string='';
  public password: string='';
  constructor(public apiService: ApiService, private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){    
    this.apiService.login(this.username, this.password).subscribe({
      next: (res) =>{
        this.dataService.session$.next(
          {
            username: this.username, 
            token: res.token,
          }
        )
        this.router.navigate(['search'])
      }
    }
      
    );
  }

}
