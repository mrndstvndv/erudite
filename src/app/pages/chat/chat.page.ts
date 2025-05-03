import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { MessagesService } from "src/app/services/messages.service";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage {
  messageService = inject(MessagesService)
  messages = this.messageService.messages

  constructor(private router: Router) { }

  goToMessage(message: any, id: number) {
    this.router.navigate(['/chat/message', id], {
      state: { message }
    });
  }
}
