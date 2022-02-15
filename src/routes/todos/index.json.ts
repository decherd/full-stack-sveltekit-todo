import type { RequestHandler } from "@sveltejs/kit";

let todos: Todo[] = [];

// get
export const get: RequestHandler = async ({ request }) => {
  return {
      status: 200,
      body: todos
  }
}

// post
export const post: RequestHandler = async ({ request }) => {
  const formData = await request.formData()
  todos.push({
      create_at: new Date(),
      done: false,
      text: formData.get("text") as string
  })

  return {
      status: 303,
      headers: {
          location: "/"
      }

  }
}