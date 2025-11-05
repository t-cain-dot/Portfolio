import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(process.env.PUBLIC_KEY as any, process.env.SERVICE_ROLE as any)

export const getSupabaseClient = ()=>{
    return supabase;
}