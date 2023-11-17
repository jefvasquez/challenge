import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() content: string = "input";
  @Input() color: string = "";
  @Input() appereance: string = "";
  @Input() label: string = "";
  @Input() helper: string = "";
  @Input() placeholder: string = "";
  @Input() value: string = "";
  @Input() type: string = "text";
  constructor() { }

  ngOnInit(): void {
  }

}
