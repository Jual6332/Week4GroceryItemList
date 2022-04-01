import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController){

	}

	addItem(){
		console.log("Adding new grocery item to list of grocery items.");
		this.showAddItemPrompt();
	}

	showAddItemPrompt() {
		const prompt = this.alertCtrl.create({
			title: 'Add New Grocery Item',
			message = "Enter a name for new grocery item: ",
			inputs: [
				{
					name: 'name',
					placeholder: 'Name'
				},
			],

			inputs: [
				{
					name: 'quantity',
					placeholder: 'Quantity'
				},
			],

			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						console.log('Cancel clicked.');
					}
				},
				{
					text: 'Save',
					handler: item => {
						console.log('Saved clicked.');
						this.items.push(item);
					}
				}
			]
		});
		prompt.present();
	}
}