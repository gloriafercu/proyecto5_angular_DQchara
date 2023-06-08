import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  bookForm = new FormGroup({

    id: new FormControl<number>(0),
    bookDate: new FormControl<Date | null>(new Date(),[Validators.required]),
    bookTime: new FormControl<Date | null>(new Date(),[Validators.required]),
    userId: new FormControl<number>(0, [Validators.required]),
    restaurantId: new FormControl<number>(0, [Validators.required]),
    availability: new FormControl<boolean>(false, [Validators.requiredTrue]),
    peopleNumber: new FormControl<number>(0)

  });
  activatedRoute: any;
  router: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;

      const id = parseInt(idString, 10);
      this.bookService.getById(id).subscribe(book => this.loadBookForm(book));
    });
  }

  loadBookForm(book: IBook): void {

    this.bookForm.reset({
      id: book.id,
      bookDate: book.bookDate,
      bookTime: book.bookTime,
      userId: book.userId,
      restaurantId: book.restaurantId,
      availability: book.availability,
      peopleNumber: book.peopleNumber
      

    });
  }

  save(): void {
    let id = this.bookForm.get('id')?.value ?? 0;
    let bookDate = this.bookForm.get('bookDate')?.value ?? new Date();
    let bookTime = this.bookForm.get('bookTime')?.value ?? new Date();
    let userId = this.bookForm.get('userId')?.value ?? 0;
    let restaurantId = this.bookForm.get('restaurantId')?.value ?? 0;
    let availability = this.bookForm.get('availability')?.value ?? false;
    let peopleNumber = this.bookForm.get('peopleNumber')?.value ?? 0;
   

    let book: IBook = {
      id: id,
      bookDate: bookDate,
      bookTime: bookTime,
      userId: userId,
      restaurantId: restaurantId,
      availability: availability,
      peopleNumber: peopleNumber
    }
    if (id === 0) 
         this.bookService.create(book).subscribe(book => this.router.navigate(['/books', book.id])); 
    else   
      this.bookService.update(book).subscribe(book => this.router.navigate(['/books', book.id]));
    
  }

}  

