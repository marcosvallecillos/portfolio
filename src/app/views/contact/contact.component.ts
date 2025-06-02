import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitting = false;
  submitStatus = '';

  constructor(private http: HttpClient) {}

  async onSubmit() {
    this.isSubmitting = true;
    this.submitStatus = 'Enviando...';

    try {
      // Replace with your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzxQ42p3z1e4lMFr4d9bWo18XHMGVlGk1cIruYRNYkvA3YW2BD8y5uPod1IFfGWCvq2/exec';
      
      const response = await this.http.post(scriptURL, this.formData).toPromise();
      
      this.submitStatus = '¡Mensaje enviado con éxito!';
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      this.submitStatus = 'Error al enviar el mensaje. Por favor, intente nuevamente.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
