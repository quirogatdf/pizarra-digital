import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-novedad',
  templateUrl: './add-novedad.component.html',
  styleUrls: ['./add-novedad.component.css']
})

export class AddNovedadComponent implements OnInit {
  isLogged: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
