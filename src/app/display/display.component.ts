import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public question = "Too easy?";
  public yesAnswer = "Yes";
  public noAnswer = "No";

  result: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onVoted(vote: boolean): void {
    this.result = (vote)? 'yesAnswer' : 'noAnswer';
  }
}
