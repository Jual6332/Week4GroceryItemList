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
	},
	{
		name:"Blueberries",
		quantity:4
	},
	{
		name:"Chocolate Milk",
		quantity:1
	}
	];

	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController){

	}

	removeItem(item,index){
		console.log("Removing grocery item from grocery items list.");
		console.log("Removing Item - ",item,index);
		const toast = this.toastCtrl.create({
			message: 'Removing Item - ' + item.name + " ...",
			duration: 3000
		});
		toast.present();

		this.items.splice(index,1);
	}

	shareItem(item, index) {
		console.log("Sharing Item - ", item, index);
		const toast = this.toastCtrl.create({
			message: 'Sharing Item - ' + index + " ...",
			duration: 3000
		});
		toast.present();

	}

	editItem(item,index){
		console.log("Editing grocery item currently in grocery items list.");
		console.log("Editing item - ",item,index);
		const toast = this.toastCtrl.create({
			message: 'Editing Item - ' + index + " ...",
			duration: 3000
		});
		toast.present();
		this.showEditItemPrompt(item,index);
	}

	showEditItemPrompt(item,index){
		const prompt = this.alertCtrl.create({
			title: 'Edit Item',
			message: "Please edit item...",
			inputs: [
				{
					name: 'name',
					placeholder: 'Name',
					value: item.name
				},
				{
					name: 'quantity',
					placeholder: 'Quantity',
					value: item.quantity
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
						console.log('Saved clicked.',item);
						this.items[index] = item;
					}
				}
			]

		});
		prompt.present();
	}

	addItem(){
		console.log("Adding new grocery item to list of grocery items.");
		this.showAddItemPrompt();
	}

	showAddItemPrompt() {
		const prompt = this.alertCtrl.create({
			title: 'Add New Grocery Item',
			message: "Enter a name for new grocery item: ",
			inputs: [
				{
					name: 'name',
					placeholder: 'Name'
				},
				{
					name: 'quantity',
					placeholder: 'Quantity'
				}
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
