import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MessagesService {
  messages = [
    {
      id: "alice",
      name: "Alice Smith",
      avatar: "AS",
      lastMessage: "Saturday works great for me. Shall we say 2 PM?",
      time: "10:30 AM",
      unread: 1,
      messages: [
        {
          text: "hi! i'd love to learn spanish. when are you available?",
          time: "10:15 am",
          fromuser: true
        },
        {
          text: "hello! i'm free on weekends. how about saturday afternoon?",
          time: "10:20 am",
          fromuser: false
        },
        {
          text: "saturday works great for me. shall we say 2 pm?",
          time: "10:30 am",
          fromuser: true
        },
      ]
    },
    {
      id: "bob",
      name: "Bob Johnson",
      avatar: "BJ",
      lastMessage: "I can teach you some basic guitar chords tomorrow.",
      time: "Yesterday",
      unread: 0,
      messages: []
    },
    {
      id: "carol",
      name: "Carol Williams",
      avatar: "CW",
      lastMessage: "Here are some photography tips we discussed.",
      time: "Monday",
      unread: 0,
      messages: []
    },
    {
      id: "david",
      name: "David Lee",
      avatar: "DL",
      lastMessage: "Thanks for the Python tutorial!",
      time: "Aug 15",
      unread: 0,
      messages: []
    }
  ];

  getMessage(id: number) {
    return { ...this.messages[id], index: id };
  }

  addMessage(id: number, text: string) {
    const message = this.messages[id];
    if (message?.messages) {
      message.messages.push({
        text: text,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase(),
        fromuser: false
      });
      message.lastMessage = text;
    }
  }
}
