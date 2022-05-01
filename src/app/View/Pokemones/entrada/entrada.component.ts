import { Component, Input, OnInit } from '@angular/core';
import { Interface } from 'src/app/Shared/Interface/interface';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  @Input()
  public entrada:Interface={url:'',name:""}

  constructor() { }

  ngOnInit(): void {
  }

}
