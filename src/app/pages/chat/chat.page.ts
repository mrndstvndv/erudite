import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage {
  messages = [
    {
      id: "alice",
      name: "Alice Smith",
      avatar: "AS",
      lastMessage: "Saturday works great for me. Shall we say 2 PM?",
      time: "10:30 AM",
      unread: 1,
    },
    {
      id: "bob",
      name: "Bob Johnson",
      avatar: "BJ",
      lastMessage: "I can teach you some basic guitar chords tomorrow.",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: "carol",
      name: "Carol Williams",
      avatar: "CW",
      lastMessage: "Here are some photography tips we discussed.",
      time: "Monday",
      unread: 0,
    },
    {
      id: "david",
      name: "David Lee",
      avatar: "DL",
      lastMessage: "Thanks for the Python tutorial!",
      time: "Aug 15",
      unread: 0,
    }
  ];
}
