import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Injects MessagesCompnent with MessageService. The messageService property must be public because it's going to be bound to in the template. Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
