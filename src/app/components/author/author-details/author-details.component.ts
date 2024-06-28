import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.css'
})
export class AuthorDetailsComponent implements OnInit {
  
  authors = [
    {
      id: 1,
      name: 'خولة حمدي',
      description: 'خولة حمدي هي كاتبة مصرية تعمل في مجال الأدب العربي. لها عدد من الروايات البارزة التي تمزج بين الأدب الدرامي والسرد الأدبي.',
      imgUrl: 'data:image/jpeg;base64,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',
      bookCount: 2  
    },
    {
      id: 2,
      name: 'أحمد خالد توفيق',
      description: 'أحمد خالد توفيق هو كاتب وطبيب مصري شهير برواياته التي تندرج في أدب الخيال العلمي والتشويق. له أيضًا بعض الأعمال الأدبية الدرامية.',
      imgUrl: 'data:image/jpeg;base64,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',
      bookCount: 2  
    }
   
  ];

  author: any; 
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const authorId = +this.route.snapshot.paramMap.get('id')!;
    this.author = this.authors.find(a => a.id === authorId);
  }
}