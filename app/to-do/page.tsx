"use client"

import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { Plus, Trash2, Check } from "lucide-react"

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  // Load tasks from cookies
  useEffect(() => {
    const saved = Cookies.get("tasks")
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  // Save tasks to cookies
  useEffect(() => {
    Cookies.set("tasks", JSON.stringify(tasks), { expires: 7 }) // expires in 7 days
  }, [tasks])

  const addTask = () => {
    if (!newTask.trim()) return
    const updated = [...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]
    setTasks(updated)
    setNewTask("")
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">💫 To-Do App</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 px-4 py-3 border border-border rounded-xl bg-card focus:outline-none focus:border-primary"
            />
            <button
              onClick={addTask}
              className="px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center gap-2"
            >
              <Plus size={20} /> Add
            </button>
          </div>
        </section>

        {/* Tasks List */}
        <section>
          {tasks.length === 0 ? (
            <p className="text-center text-muted-foreground">No tasks yet. Add one above!</p>
          ) : (
            <div className="grid gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between bg-card border border-border rounded-2xl p-4 hover:border-primary transition-all"
                >
                  <div
                    className={`flex items-center gap-3 flex-1 cursor-pointer ${
                      task.completed ? "opacity-60 line-through" : ""
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        task.completed ? "bg-primary text-primary-foreground border-primary" : "border-border"
                      }`}
                    >
                      {task.completed && <Check size={16} />}
                    </div>
                    <span className="text-lg">{task.text}</span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>© 2025 T.Cain Creation</p>
        </div>
      </footer>
    </div>
  )
}
