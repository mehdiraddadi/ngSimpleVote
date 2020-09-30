import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Input() public question: string;
  @Input() public yesAnswer: string;
  @Input() public noAnswer: string;
  @Output() output = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  public vote(vote: boolean): void {
    this.output.emit(vote);
  }

}
