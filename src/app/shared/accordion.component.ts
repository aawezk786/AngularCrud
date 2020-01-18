import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() hasJustViewed: boolean;
  @Input() title: string;
  @Input() isHidden = false;
  constructor() { }

  ngOnInit() {
  }

}
