import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sub1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.css',
})
export class Sub1Component {
  @Input()
  newvalue: any;

  // to receive data from parent component
  @Input()
  product1: {
    name: string;
    id: number;
  };
  @Input()
  val1: string;

  @Input()
  val2: number;
  //  end using custome property binding

  value3: string = '';

  @Output()
  eventvalue3 = new EventEmitter();

  getvalue3() {
    this.eventvalue3.emit(this.value3);
  }
}
