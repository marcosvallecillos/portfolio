import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
  formErrors = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!this.formData.name.trim()) {
      this.formErrors.name = 'El nombre es requerido';
      isValid = false;
    }

    if (!this.formData.email.trim()) {
      this.formErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
      this.formErrors.email = 'Email inválido';
      isValid = false;
    }

    if (!this.formData.subject.trim()) {
      this.formErrors.subject = 'El asunto es requerido';
      isValid = false;
    }

    if (!this.formData.message.trim()) {
      this.formErrors.message = 'El mensaje es requerido';
      isValid = false;
    }

    return isValid;
  }

  async onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'Enviando...';

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbz5Gs0ocAOecaJNrT0rC24ccctQiOf7qOc_WLtD2yLnzgUFgjVkfuzoOnYf74Xg9uAX/exec';
      
      const response = await this.http.post(scriptURL, this.formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).toPromise();
      
      this.submitStatus = '¡Mensaje enviado con éxito!';
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      console.error('Error:', error);
      this.submitStatus = 'Error al enviar el mensaje. Por favor, intente nuevamente.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
