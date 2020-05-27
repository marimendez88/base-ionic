import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.page.html',
	styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
	constructor(public alertCtrl: AlertController) {}

	titulo: string;

	ngOnInit() {}

	async presentAlert() {
		const alert = await this.alertCtrl.create({
			cssClass: 'my-custom-class',
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Cancelar');
					},
				},
				{
					text: 'OK',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Boton OK');
					},
				},
			],
		});

		await alert.present();
	}

	async presentAlertPrompt() {
		const alert = await this.alertCtrl.create({
			cssClass: 'my-custom-class',
			header: 'Prompt!',
			inputs: [
				{
					name: 'txtInput',
					type: 'text',
					placeholder: 'Placeholder 1',
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					},
				},
				{
					text: 'Ok',
					handler: (data) => {
						console.log('Confirm Ok', data);
						this.titulo = data.txtInput;
					},
				},
			],
		});

		await alert.present();
	}
}
