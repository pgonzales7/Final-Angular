import { Component, OnInit } from '@angular/core';
import { reto26array } from 'src/app/models/usuarios';
import { ServicesService } from 'src/app/service/services.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: ServicesService) { }
  listado : reto26array = []
  ngOnInit(): void {
    this.userService.getReto26All().subscribe({
      next: (userAll:reto26array) => {
        this.listado = userAll;
        console.log(this.listado)
      }
    })
  }

}
