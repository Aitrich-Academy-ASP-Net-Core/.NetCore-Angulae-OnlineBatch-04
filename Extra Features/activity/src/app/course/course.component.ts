import { Component } from '@angular/core';
import { Course } from '../course'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  courses: Course[] = [
    {
      img: "../../assets/Images/NALUKETTU-700x1000.webp",
      id: "Book 1",
      Name: "Nalukettu",
      Author: "M.T Vasudevan Nair",
      Type: "Free"
    },
    {
      img: "../../assets/Images/61isRprUQ+L._SY522_.jpg",
      id: "Book 2",
      Name: "Pathummayude Aadu",
      Author: "Vaikkom Muhammad Basheer",
      Type: "premium"
    },
    {
      img: "../../assets/Images/mayyazhi.webp",
      id: "Book 3",
      Name: "mayyazhipuzhayude theerangalil",
Author: "M.Mukhundan",
      Type: "free"
    },
    {
      img: "../../assets/Images/ente-kadha-original-imaeqerehw5rhhpg.webp",
      id: "Book 4",
      Name: "Ente kadha",
      Author: "madhavikkutty",
      Type: "Free"
    }

  ]
  getAllBooks()
  {
return this.courses.length;
  }
  getFreeBooks()
  {
    return this.courses.filter(book =>((book).Type==="free")).length;
  }
  getPremiumBooks()
  {
    return this.courses.filter(book =>((book).Type==="premium")).length;
  }
  messagefromchild:string|undefined;
  getData(datafromchild:string)
  {
this.messagefromchild=datafromchild;
  }
}
