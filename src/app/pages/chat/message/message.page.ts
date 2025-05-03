import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ArrowLeft, LucideAngularModule, Send } from 'lucide-angular';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  styleUrl: 'message.page.scss',
  templateUrl: 'message.page.html',
})
export class MessagePage {
  ArrowLeft = ArrowLeft;
  Send = Send
  message: any; // Replace 'any' with your message interface
  newMessage: string = '';

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private chatService: MessagesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.message = this.chatService.getMessage(id);
    });
  }

  back() {
    this.location.back();
  }

  sendMessage(e: any) {
    e.preventDefault();

    if (!this.newMessage.trim()) return; // Don't send empty messages

    this.chatService.addMessage(this.message.index, this.newMessage);

    this.newMessage = ''; // Add this line to clear the message box
  }
}
