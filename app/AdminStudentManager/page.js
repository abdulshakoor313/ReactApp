"use client";

import React, { useState, useEffect } from "react";
import { ref, set, get, child, update } from "firebase/database";
import { rtdb } from "@/lib/firebase";

export default function AdminStudentPanel() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    class: "",
    gender: "",
    guardian: "",
    address: "",
  });
  const [studentId, setStudentId] = useState("");
  const [autoId, setAutoId] = useState("");
  const [attendance, setAttendance] = useState({
    month: "July",
    present: 0,
    absent: 0,
    leave: 0,
    totalDays: 0,
  });
  const [progress, setProgress] = useState({
    subject: "Math",
    marks: 0,
    grade: "",
    lastTopic: "",
    currentTopic: "",
  });

  useEffect(() => {
    generateNextId();
  }, []);

  const generateNextId = async () => {
    const snapshot = await get(child(ref(rtdb), "students"));
    if (snapshot.exists()) {
      const ids = Object.keys(snapshot.val())
        .map((id) => parseInt(id.replace("STU", "")))
        .filter((n) => !isNaN(n));
      const nextId = Math.max(...ids, 1023) + 1;
      setAutoId(`STU${nextId}`);
    } else {
      setAutoId("STU1024");
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAttendanceChange = (e) => {
    setAttendance({ ...attendance, [e.target.name]: e.target.value });
  };

  const handleProgressChange = (e) => {
    setProgress({ ...progress, [e.target.name]: e.target.value });
  };

  const saveStudentInfo = async () => {
    const id = studentId || autoId;
    const studentData = {
      info: {
        ...form,
        id,
        photo: "",
      },
    };

    try {
      const existing = await get(ref(rtdb, `students/${id}`));
      if (existing.exists() && !studentId) {
        alert("❌ ID already exists. Use Edit instead or leave ID empty.");
        return;
      }
      await set(ref(rtdb, `students/${id}/info`), studentData.info);
      alert("✅ Student info saved!");
      generateNextId();
    } catch (err) {
      console.error(err);
      alert("❌ Error saving info.");
    }
  };

  const addAttendance = async () => {
    const id = studentId || autoId;
    const attData = {
      present: +attendance.present,
      absent: +attendance.absent,
      leave: +attendance.leave,
      totalDays: +attendance.totalDays,
    };
    try {
      await set(ref(rtdb, `students/${id}/attendance/${attendance.month}`), attData);
      alert("✅ Attendance added!");
    } catch (err) {
      alert("❌ Failed to add attendance");
    }
  };

  const addProgress = async () => {
    const id = studentId || autoId;
    const prg = {
      marks: +progress.marks,
      grade: progress.grade,
      lastTopic: progress.lastTopic,
      currentTopic: progress.currentTopic,
    };
    try {
      await set(ref(rtdb, `students/${id}/progress/${progress.subject}`), prg);
      alert("✅ Progress saved!");
    } catch (err) {
      alert("❌ Failed to save progress");
    }
  };

  const fetchStudent = async () => {
    try {
      const snap = await get(ref(rtdb, `students/${studentId}`));
      if (snap.exists()) {
        const data = snap.val();
        setForm(data.info);
        alert("✅ Student loaded!");
      } else {
        alert("❌ No student found with this ID.");
      }
    } catch (err) {
      alert("❌ Error fetching student");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🎓 Admin Student Management</h1>

      <div className="bg-white p-4 rounded shadow space-y-3">
        <h2 className="font-semibold text-lg">➕ Add/Edit Student Info</h2>

        <input
          className="border p-2 w-full"
          name="studentId"
          placeholder="Student ID to edit (optional)"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        {Object.entries(form).map(([key, val]) => (
          <input
            key={key}
            className="border p-2 w-full"
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleFormChange}
          />
        ))}

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={saveStudentInfo}
        >
          💾 Save Info
        </button>

        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={fetchStudent}
        >
          🔍 Load Existing Student
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-3">
        <h2 className="font-semibold text-lg">📅 Attendance</h2>
        <input name="month" placeholder="Month" value={attendance.month} onChange={handleAttendanceChange} className="border p-2 w-full" />
        <input name="present" placeholder="Present" value={attendance.present} onChange={handleAttendanceChange} className="border p-2 w-full" />
        <input name="absent" placeholder="Absent" value={attendance.absent} onChange={handleAttendanceChange} className="border p-2 w-full" />
        <input name="leave" placeholder="Leave" value={attendance.leave} onChange={handleAttendanceChange} className="border p-2 w-full" />
        <input name="totalDays" placeholder="Total Days" value={attendance.totalDays} onChange={handleAttendanceChange} className="border p-2 w-full" />
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={addAttendance}>➕ Add Attendance</button>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-3">
        <h2 className="font-semibold text-lg">📈 Progress</h2>
        <input name="subject" placeholder="Subject" value={progress.subject} onChange={handleProgressChange} className="border p-2 w-full" />
        <input name="marks" placeholder="Marks" value={progress.marks} onChange={handleProgressChange} className="border p-2 w-full" />
        <input name="grade" placeholder="Grade" value={progress.grade} onChange={handleProgressChange} className="border p-2 w-full" />
        <input name="lastTopic" placeholder="Last Topic" value={progress.lastTopic} onChange={handleProgressChange} className="border p-2 w-full" />
        <input name="currentTopic" placeholder="Current Topic" value={progress.currentTopic} onChange={handleProgressChange} className="border p-2 w-full" />
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={addProgress}>📘 Save Progress</button>
      </div>
    </div>
  );
}
