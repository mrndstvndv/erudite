import { CommonModule } from "@angular/common";
import { Component, Signal, signal } from "@angular/core";
import { Globe, Lightbulb, LucideAngularModule, Sparkles } from "lucide-angular";

@Component({
  selector: "app-easy-access-tabs",
  templateUrl: 'easy-access-tabs.component.html',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
})
export class EasyAccessTabsComponent {
  tabs = [
    {
      "name": "Communities",
      "icon": Globe,
      "id": "communities"
    },
    {
      "name": "Featured",
      "icon": Sparkles,
      "id": "featured"
    },
    {
      "name": "Tips & News",
      "icon": Lightbulb,
      "id": "tips-and-news"
    },
  ]
  currentTab = signal(this.tabs[0])

  // Mock data for communities
  communities = [
    {
      id: 'web-dev',
      name: 'Web Developers',
      members: 1243,
      icon: '💻',
      topics: ['JavaScript', 'React', 'CSS'],
      active: true,
    },
    {
      id: 'language-exchange',
      name: 'Language Exchange',
      members: 856,
      icon: '🌎',
      topics: ['Spanish', 'French', 'ESL'],
      active: false,
    },
    {
      id: 'music-arts',
      name: 'Music & Arts',
      members: 721,
      icon: '🎵',
      topics: ['Guitar', 'Piano', 'Drawing'],
      active: false,
    },
    {
      id: 'fitness',
      name: 'Fitness Enthusiasts',
      members: 932,
      icon: '💪',
      topics: ['Yoga', 'Running', 'Nutrition'],
      active: false,
    },
  ];

  // Mock data for featured people
  featuredPeople = [
    {
      id: 'user1',
      name: 'Emma Garcia',
      avatar: 'EG',
      skills: ['Yoga', 'Meditation', 'Nutrition'],
      rating: 4.9,
      featured: 'Top Yoga Instructor',
    },
    {
      id: 'user2',
      name: 'David Lee',
      avatar: 'DL',
      skills: ['Python', 'Data Science', 'Machine Learning'],
      rating: 4.8,
      featured: 'AI Expert',
    },
    {
      id: 'user3',
      name: 'Sarah Kim',
      avatar: 'SK',
      skills: ['Spanish', 'French', 'Japanese'],
      rating: 5.0,
      featured: 'Language Specialist',
    },
  ];

  // Mock data for tips & news
  tipsAndNews = [
    {
      id: 'tip1',
      title: '5 Ways to Improve Your Learning Efficiency',
      type: 'tip',
      date: 'Today',
      image: '/placeholder.svg?height=100&width=100&text=Learning',
    },
    {
      id: 'news1',
      title: 'New Language Exchange Features Coming Soon',
      type: 'news',
      date: 'Yesterday',
      image: '/placeholder.svg?height=100&width=100&text=Update',
    },
    {
      id: 'tip2',
      title: 'How to Prepare for Your First Teaching Session',
      type: 'tip',
      date: '2 days ago',
      image: '/placeholder.svg?height=100&width=100&text=Teaching',
    },
  ];

  setTab(tab: any) {
    this.currentTab.set(tab)
  }

  getTabById() {

  }
}
