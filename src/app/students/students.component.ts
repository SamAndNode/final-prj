import { Component, OnInit } from '@angular/core';

import { StudentService } from '/Services/student.service';
import { Student } ;


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students: Student[] = [];
  isFormVisible = false;
  isEditMode = false;
  formData: { id?: number, name: string } = { name: '' };

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  createStudent(): void {
    this.isFormVisible = true;
    this.isEditMode = false;
    this.formData = { name: '' };
  }

  editStudent(student: Student): void {
    this.isFormVisible = true;
    this.isEditMode = true;
    this.formData = { id: student.id, name: student.name };
  }

  saveStudent(): void {
    if (this.isEditMode) {
    } else {
    }
    this.isFormVisible = false;
  }

  deleteStudent(student: Student): void {
  }

}
