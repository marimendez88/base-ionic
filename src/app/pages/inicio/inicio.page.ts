import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.page.html',
	styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
	componentes: Componente[] = [
		{
			icon: 'american-football',
			name: 'Action Sheet',
			redirectTo: '/action-sheet',
		},
		{
			icon: 'alert',
			name: 'Alert',
			redirectTo: '/alert',
		},
		{
			icon: 'flash',
			name: 'Avatar',
			redirectTo: '/avatar',
		},
		{
			icon: 'radio-button-on',
			name: 'Botones y Router',
			redirectTo: '/botones',
		},
		{
			icon: 'card',
			name: 'Cards',
			redirectTo: '/cards',
		},
		{
			icon: 'checkmark-circle-outline',
			name: 'Checkbox',
			redirectTo: '/check',
		},
		{
			icon: 'calendar',
			name: 'DateTime',
			redirectTo: '/date-time',
		},
		{
			icon: 'code',
			name: 'Fab',
			redirectTo: '/fab',
		},
		{
			icon: 'grid',
			name: 'Grid - Rows',
			redirectTo: '/grid',
		},
		{
			icon: 'leaf',
			name: 'Infinite Scroll',
			redirectTo: '/infinite-scroll',
		},
		{
			icon: 'color-wand',
			name: 'Input',
			redirectTo: '/input',
		},
		{
			icon: 'list',
			name: 'Listas',
			redirectTo: '/list',
		},
		{
			icon: 'moon',
			name: 'Listas Reorden',
			redirectTo: '/list-reorder',
		},
	];
	constructor() {}

	ngOnInit() {}
	doReorder(event) {
		console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

		event.detail.complete();
	}
}

interface Componente {
	icon: string;
	name: string;
	redirectTo: string;
}
