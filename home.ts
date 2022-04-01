import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	title = "Grocery";
	items = [
	{
		name:"Milk",
		quantity:2
	},
	{
		name:"Bread",
		quantity:3
	}
	];

	constructor(public navCtrl: NavController, public toastCtrl: ToastController){

	}
}