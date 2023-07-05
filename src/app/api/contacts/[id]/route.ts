import dbConnect from "@/lib/db";
import contactModel from "@/models/contactModel";

interface Params {
  params: {
    id: string
  }
}

export async function GET(req: Request, { params }: Params) {
  await dbConnect()
  try {
    const contact = await contactModel.findById(params.id)

    if (contact) {
      return new Response(JSON.stringify({ contact }), { status: 200 })
    } else {
      return new Response(JSON.stringify({ message: 'contact not found' }), { status: 400 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {  status: 500 })
  }
}

export async function PUT(req: Request, { params }: Params) {
  await dbConnect()
  const body = await req.json()

  try {
    const updated = await contactModel.findByIdAndUpdate(params.id, body)

    if(updated) {
      return new Response(JSON.stringify({ message: 'contact updated successfully', updated }), {  status: 202 })
    } else {
      return new Response(JSON.stringify({ message: 'contact could not updated' }), {  status: 422 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {  status: 500 })
  }
}

export async function DELETE(req: Request, { params }: Params) {
  await dbConnect()

  try {
    const deleted = await contactModel.findByIdAndDelete(params.id)

    if(deleted) {
      return new Response(null, {  status: 204 })
    } else {
      return new Response(JSON.stringify({ message: 'contact could not deleted' }), {  status: 422 })
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {  status: 500 })
  }
}