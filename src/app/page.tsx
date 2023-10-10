import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className=' bg-slate-500 min-h-[100vh] h-max w-full p-4  flex justify-center items-center'>
      <TodoList/>
    </div>
  )
}
