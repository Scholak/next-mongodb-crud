import dbConnect from "@/lib/db"
import contactModel from "@/models/contactModel"

export async function GET(req: Request) {
  await dbConnect()
  const contacts = await contactModel.find({})
  
  return new Response(JSON.stringify({ contacts }), { status: 200 })
}

export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()

  try {
    const created = await contactModel.create(body)
    
    if(created) {
      return new Response(JSON.stringify({ message: 'contact created successfully', created }), {  status: 201 })
    } else {
      return new Response(JSON.stringify({ message: 'contact could not created' }), {  status: 422 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {  status: 500 })
  }
}