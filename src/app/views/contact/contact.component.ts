import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    title: '',
    message: ''
  };
  isSubmitting = false;
  submitStatus = '';
  formErrors = {
    name: '',
    email: '',
    title: '',
    message: ''
  };

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = {
      name: '',
      email: '',
      title: '',
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

    if (!this.formData.title.trim()) {
      this.formErrors.title = 'El asunto es requerido';
      isValid = false;
    }

    if (!this.formData.message.trim()) {
      this.formErrors.message = 'El mensaje es requerido';
      isValid = false;
    }

    return isValid;
  }

  async onSubmit(formElement: HTMLFormElement) {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'Enviando...';

    try {
      await emailjs.sendForm(
        'service_d5xducp', // Reemplaza por tu Service ID de EmailJS
        'template_9ipk5gs', // Reemplaza por tu Template ID de EmailJS
        formElement,
        'bF0Al2YQiAp5A2OIt' // Reemplaza por tu Public Key de EmailJS
      );
      this.submitStatus = '¡Mensaje enviado con éxito!';
      this.formData = {
        name: '',
        email: '',
        title: '',
        message: ''
      };
      formElement.reset();
    } catch (error) {
      console.error('Error:', error);
      this.submitStatus = 'Error al enviar el mensaje. Por favor, intente nuevamente.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
