import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  imports: [FormsModule,CommonModule] 

})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  newItem = { id: 0, name: '', type: '',category:'', price: 0 };

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  async createItem() {
    await this.itemService.createItem(this.newItem).subscribe(() => {
      this.newItem = {id: 0, name: '', type: '', category: '', price: 0 };
      this.loadItems();
    });
  }

  deleteItem(id: number) : void{
    this.itemService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }
  
  updateItem(item: Item): void {
    this.itemService.updateItem(item.id, item).subscribe(() => {
      this.loadItems();
    });
  }

  editItem(item: any) {
    this.newItem = { ...item };
  }
}
