// app/api/hello/route.ts
import { NextResponse } from 'next/server'
import {getSupabaseClient} from '@/lib/supabase'

export async function GET() {
  const client = getSupabaseClient();
  const response = await client.from('Rooms').select(); 
  console.log(response);


  return NextResponse.json(response.data);
}
