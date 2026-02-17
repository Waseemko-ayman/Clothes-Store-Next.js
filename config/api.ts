import { createBrowserClient } from '@supabase/ssr';

export const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

/*
  - createClient ❌
  -- This public → What it knows:
    - It works within Next
    - How it writes cookies in a way that middleware understands
    - How it synchronizes the session between the browser and the server
*/

/*
  - createBrowserClient ✅
  --- Is used to create a Supabase client for use in the browser
  --- Browser Supabase client for Next.js SSR.
  --- This ensures auth cookies are stored correctly
  --- so middleware and server components can read the session.

  ✨ Why did we use createBrowserClient?

  Because:
  ✅ It's dedicated to the browser within Next
  ✅ It handles authentication cookies correctly
  ✅ It's compatible with middleware
  ✅ It ensures that the session is written the way Supabase SSR expects it to be
  ✅ It prevents race conditions on the first login
*/
const supabase = createBrowserClient(supabaseUrl, supabaseKey);

export default supabase;
