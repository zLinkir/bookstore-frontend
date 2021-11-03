import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancel():void{
  this.router.navigate(['categorias']);
  }
}
