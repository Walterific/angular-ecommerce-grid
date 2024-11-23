import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private gadget: Product[] = [
        { id: 1, name: 'Mac Book', price: 50000, description: 'Sleek, lightweight, and powerful laptops with Retina displays, M-Series chips, all-day battery life, and seamless macOS integration—perfect for work or play.', img: 'assets/img/product__img1.jpg' },
        { id: 2, name: 'Lenovo Laptop', price: 30000, description: 'Durable, versatile, and performance-driven laptops featuring sharp displays, powerful processors, long battery life, and smart features—ideal for work, gaming, and everyday use.', img: 'assets/img/product__img2.jpg' },
        { id: 3, name: 'iPhone 14', price: 80000, description: 'Advanced smartphone with a stunning display, powerful A15 Bionic chip, improved cameras, and all-day battery life.', img: 'assets/img/product__img3.jpg' },
        { id: 4, name: 'Samsung Galaxy S23', price: 75000, description: 'Feature-packed smartphone with a sleek design, high-performance processor, pro-grade cameras, and vibrant AMOLED display.', img: 'assets/img/product__img4.jpg' },
        { id: 5, name: 'Apple Watch Series 9', price: 40000, description: 'Premium smartwatch with health tracking, fitness features, seamless iPhone integration, and an always-on Retina display.', img: 'assets/img/product__img5.jpg' },
    ];

    private furniture: Product[] = [
        { id: 1, name: 'Modern Sofa', price: 20000, description: 'Comfortable and stylish sofa with a contemporary design, perfect for living rooms.', img: 'assets/img/product__img7.jpg' },
        { id: 2, name: 'Dining Table Set', price: 15000, description: 'Elegant dining table with seating for six, crafted from high-quality wood.', img: 'assets/img/product__img8.jpg' },
        { id: 3, name: 'King Size Bed', price: 30000, description: 'Spacious and sturdy bed with a premium mattress for ultimate comfort.', img: 'assets/img/product__img9.jpg' },
        { id: 4, name: 'Office Chair', price: 5000, description: 'Ergonomic office chair with adjustable height and lumbar support for long working hours.', img: 'assets/img/product__img10.jpg' },
        { id: 5, name: 'Bookshelf', price: 7000, description: 'Multi-tier wooden bookshelf with ample storage for books and decorative items.', img: 'assets/img/product__img11.jpg' },
    ];

    private shoe: Product[] = [
        { id: 1, name: 'Nike Air Max', price: 8000, description: 'Comfortable and stylish sneakers with advanced cushioning for all-day wear.', img: 'assets/img/product__img13.jpg' },
        { id: 2, name: 'Adidas Ultraboost', price: 10000, description: 'High-performance running shoes with superior comfort and energy return.', img: 'assets/img/product__img14.jpg' },
        { id: 3, name: 'Puma Suede Classic', price: 6000, description: 'Timeless sneakers with a soft suede upper and durable rubber sole.', img: 'assets/img/product__img15.jpg' },
        { id: 4, name: 'Dr. Martens 1460 Boots', price: 12000, description: 'Iconic leather boots known for their durability and unique style.', img: 'assets/img/product__img16.jpg' },
        { id: 5, name: 'Reebok Nano X2', price: 9000, description: 'Versatile training shoes built for cross-training and intense workouts.', img: 'assets/img/product__img17.jpg' },
    ];
    
    getGadgets(): Product[] {
    return this.gadget;
    }

    getFurniture(): Product[] {
    return this.furniture;
    }

    getShoes(): Product[] {
    return this.shoe;
    }
}