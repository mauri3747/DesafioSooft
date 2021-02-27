import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-corredores',
  templateUrl: './corredores.component.html',
  styleUrls: ['./corredores.component.css']
})
export class CorredoresComponent {

 corredores: any[] = [];

  constructor(private servicio: ServicioService) {

    this.servicio.getCorredores()
      .subscribe((data: any) => {
        console.log(data.MRData.DriverTable.Drivers);
        this.corredores = data.MRData.DriverTable.Drivers;
      });

   }

  ngOnInit(): void {
  }

}
