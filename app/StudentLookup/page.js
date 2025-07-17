"use client"

import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { rtdb } from "@/lib/firebase";

export default function StudentInfoPage() {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("July");
  const [selectedSubject, setSelectedSubject] = useState("");

  const fetchStudentData = async () => {
    try {
      const snapshot = await get(ref(rtdb, `students/${studentId}`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setStudentData(data);
        setError("");
        // Auto-select first subject if available
        const subjects = Object.keys(data.progress || {});
        if (subjects.length > 0) setSelectedSubject(subjects[0]);
      } else {
        setError("Student record not found.");
        setStudentData(null);
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching data.");
    }
  };

  const attendanceMonths = Object.keys(studentData?.attendance || {});
  const subjectList = Object.keys(studentData?.progress || {});

  return (
    <div className="p-6 max-w-5xl mx-auto dark:bg-gray-900 min-h-screen font-[Jameel-Noori-Nastaleeq] text-gray-900 dark:text-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">🔍 Student Information</h2>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Example: ST001"
          className="border px-4 py-2 rounded-l w-64"
        />
        <button
          onClick={fetchStudentData}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r"
        >
          Load
        </button>
        {error && <p className="text-red-600 mt-3">{error}</p>}
      </div>

      {studentData && (
        <div className="space-y-6">
          {/* Header with name and image */}
          <div className="flex items-center justify-between bg-blue-700 text-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold">👨‍🎓 {studentData.info?.name}</h1>
            {studentData.info?.photo && (
              <img
                src={studentData.info.photo}
                alt="Student"
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            )}
          </div>

          {/* Basic Info */}
          <div className="bg-gray-100 dark:bg-gray-800 border p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">📋 Basic Information</h3>
            <ul className="grid grid-cols-2 gap-4 text-lg">
              <li>🔖 ID: {studentData.info?.id}</li>
              <li>🏫 Class: {studentData.info?.class}</li>
              <li>👤 Gender: {studentData.info?.gender}</li>
              <li>🎂 DOB: {studentData.info?.dob}</li>
              <li>🧑‍💼 Guardian: {studentData.info?.guardian}</li>
              <li>📍 Address: {studentData.info?.address}</li>
            </ul>
          </div>

          {/* Attendance Filter and Display */}
          <div className="bg-blue-600 text-white p-5 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">📅 Attendance</h3>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="text-black rounded px-2 py-1"
              >
                {attendanceMonths.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-lg">
              <li>Total Days: {studentData.attendance?.[selectedMonth]?.totalDays}</li>
              <li>Present: {studentData.attendance?.[selectedMonth]?.present}</li>
              <li>Absent: {studentData.attendance?.[selectedMonth]?.absent}</li>
              <li>Leave: {studentData.attendance?.[selectedMonth]?.leave}</li>
            </ul>
          </div>

          {/* Subject Progress Filter */}
          <div className="bg-green-700 text-white p-5 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">📚 Academic Progress</h3>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="text-black rounded px-2 py-1"
              >
                {subjectList.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            {selectedSubject && (
              <div className="bg-green-800 p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-2">{selectedSubject}</h4>
                <ul className="space-y-1">
                  <li>📖 Current Topic: {studentData.progress?.[selectedSubject]?.currentTopic}</li>
                  <li>📘 Last Topic: {studentData.progress?.[selectedSubject]?.lastTopic}</li>
                  <li>🎓 Grade: {studentData.progress?.[selectedSubject]?.grade}</li>
                  <li>📊 Marks: {studentData.progress?.[selectedSubject]?.marks}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
