"use client";

import React, { useState } from "react";

export default function StudentDashboard() {
  const [selectedMonth, setSelectedMonth] = useState("July");
  const [selectedSubject, setSelectedSubject] = useState("Math");

  // Dummy Data (simulate database)
  const student = {
    name: "Ali Raza",
    dob: "01-Jan-2010",
    id: "STU1024",
    class: "8th",
    gender: "Male",
    guardian: "Muhammad Raza",
    address: "Jamshoro, Sindh",
    photo: "", // base64 or URL
  };

  const attendanceData = {
    July: {
      present: 18,
      absent: 6,
      leave: 3,
      totalDays: 27,
    },
  };

  const progressData = {
    Math: {
      marks: 85,
      grade: "A",
      lastTopic: "Algebraic Expressions",
      currentTopic: "Linear Equations",
    },
    Science: {
      marks: 78,
      grade: "B",
      lastTopic: "Human Digestive System",
      currentTopic: "Photosynthesis",
    },
    English: {
      marks: 92,
      grade: "A+",
      lastTopic: "Active & Passive Voice",
      currentTopic: "Tenses Review",
    },
    Urdu: {
      marks: 80,
      grade: "A",
      lastTopic: "Nazm - Hamd",
      currentTopic: "Ghazal Analysis",
    },
    Islamiat: {
      marks: 88,
      grade: "A",
      lastTopic: "Namaz ke Masail",
      currentTopic: "Roza ke Ahkaam",
    },
  };

  const currentAttendance = attendanceData[selectedMonth];
  const attendancePercentage = (
    (currentAttendance.present / currentAttendance.totalDays) *
    100
  ).toFixed(2);

  const subjectProgress = progressData[selectedSubject];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Student Info Section */}
      <div className="bg-white p-4 shadow rounded flex justify-between">
        <div className="space-y-1">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>DOB:</strong> {student.dob}</p>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Class:</strong> {student.class}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          <p><strong>Guardian:</strong> {student.guardian}</p>
          <p><strong>Address:</strong> {student.address}</p>
        </div>
        <div>
          <div className="w-24 h-24 border border-gray-400 flex items-center justify-center text-gray-500">
            Pic
          </div>
        </div>
      </div>

      {/* Attendance Section */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-3">📅 Attendance for {selectedMonth}</h2>
        <select
          className="p-2 border rounded mb-4"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Object.keys(attendanceData).map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-100 p-4 rounded text-center shadow">Present: {currentAttendance.present}</div>
          <div className="bg-red-100 p-4 rounded text-center shadow">Absent: {currentAttendance.absent}</div>
          <div className="bg-green-100 p-4 rounded text-center shadow">Leave: {currentAttendance.leave}</div>
          <div className="bg-gray-200 p-4 rounded text-center shadow">
            Total: {currentAttendance.totalDays}
          </div>
        </div>
        <p className="text-right font-semibold text-green-600">
          Attendance %: {attendancePercentage}%
        </p>
      </div>

      {/* Progress Report Section */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-3">📈 Progress Report</h2>
        <select
          className="p-2 border rounded mb-4"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {Object.keys(progressData).map((subject) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>

        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Subject:</strong> {selectedSubject}</p>
          <p><strong>Marks:</strong> {subjectProgress.marks} / 100</p>
          <p><strong>Grade:</strong> {subjectProgress.grade}</p>
          <p><strong>Last Topic:</strong> {subjectProgress.lastTopic}</p>
          <p><strong>Current Topic:</strong> {subjectProgress.currentTopic}</p>
        </div>
      </div>
    </div>
  );
}
