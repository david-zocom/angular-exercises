import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
	value: number = 0;
	disableDecrease: boolean = true;
	constructor() { }

	ngOnInit() { }

	increase() {
		console.log('INCREAASE', this.value)
		this.value = this.value + 1;
		this.updateButtonStates();
	}
	decrease() {
		console.log('DECREASE', this.value);
		this.value = this.value - 1;
		this.updateButtonStates();
	}
	reset() {
		console.log('RESET');
		this.value = 0;
		this.updateButtonStates();
	}
	updateButtonStates() {
		if( this.value < 1 ) {
			this.disableDecrease = true;
		} else {
			this.disableDecrease = false;
		}
	}
}



//
