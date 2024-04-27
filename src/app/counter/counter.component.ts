import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class Counter {
  startCounter = 0;
  incrementByUser = 1;

  incrementCounter() {
    this.startCounter = this.startCounter + Number(this.incrementByUser);
  }

  decrementCounter() {
    this.startCounter = this.startCounter - Number(this.incrementByUser);
  }

  updateCountByNumber(event: any) {
    this.incrementByUser = event?.target.value;
  }
}
