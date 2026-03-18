import { Component } from '@angular/core';
import { Clientes } from '../../components/clientes/clientes';
import { Cta } from '../../components/cta/cta';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
import { Nosotros } from '../../components/nosotros/nosotros';
import { Proceso } from '../../components/proceso/proceso';
import { Servicios } from '../../components/servicios/servicios';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Servicios,
    Nosotros,
    Clientes,
    Proceso,
    Cta,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}