import { Component, ElementRef, ViewChild } from '@angular/core';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { FormsModule } from '@angular/forms'; // to add ngModule
import { CommonModule } from '@angular/common'; // to add ngStyle and ngClass

@Component({
  selector: 'main-gc',
  standalone: true,
  imports: [Sub1Component, Sub2Component, FormsModule, CommonModule],
  templateUrl: './main-gc.component.html',
  styleUrl: './main-gc.component.css',
})
export class MainGcComponent {
  product = {
    name: '',
    id: 2,
  };

  Oninput(val: any) {
    return (this.product.name = val.target.value);
  }

  employees: any[] = [
    { id: 101, name: 'ram' },
    { id: 102, name: 'sam' },
    { id: 103, name: 'pam' },
    { id: 104, name: 'kam' },
    { id: 105, name: 'dam' },
  ];

  value3: string = '';

  oneventvalue3(val4: any) {
    this.value3 = val4;
  }

  value4: any = '';

  getdata1(val6: HTMLInputElement) {
    this.value4 = val6.value;
  }

  value5: any = '';
  @ViewChild('setvalue1') search: ElementRef;

  getdata2() {
    this.value5 = this.search.nativeElement.value;
  }

  // * GREEN
  // ! RED
  // ? BLUE
  // TODO ORANGE
  // SHADOW GREEN
}
