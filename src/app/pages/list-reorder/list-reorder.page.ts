import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-reorder',
	templateUrl: './list-reorder.page.html',
	styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
	personajes = ['Aquaman', 'Superman', 'Batman', 'The Flash', 'Wonderwoman'];
	constructor() {}

	ngOnInit() {}
}
