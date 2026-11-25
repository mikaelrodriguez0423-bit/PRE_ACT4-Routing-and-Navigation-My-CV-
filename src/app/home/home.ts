import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile.card/profile.card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Mikael Sheeray Rodriguez';
  location = 'Porac, Pampanga';
  email = 'mikaelrodriguez0423@gmail.com';
  phone = '0962 786 2721';

  profile = 'A motivated Information Technology student specializing in Web Development, with a strong interest in creating functional, user-friendly, and practical web applications. Eager to expand technical knowledge, explore emerging technologies, and develop solutions to real-world problems through continuous learning and hands-on experience. Adaptable, dedicated, and willing to take on new challenges while continuously improving programming and problem-solving skills.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular','MongoDb','MySQL','Vue','Express','Node','Java','Python','Php','Docker','Linux','Cisco Networking'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
