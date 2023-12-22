import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
name:any='westly'
arr:any=[1,2,3,4,5]
  constructor(private router:Router){

  }
click(){
//  this.router.navigate(['/home'])
  this.name='david'
}
}
