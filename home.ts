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
			title: 'Login',
			message = "Enter a name for this ",
			inputs: [
				{
					name: 'title',
					placeholder: 'Title'
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
					handler: data => {
						console.log('Saved clicked.');
					}
				}
			]
		});
		prompt.present();
	}
}