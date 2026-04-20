import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function searchMadrid() {
  const { data, error } = await supabase.from('waitlist').select('*');
  if (error) {
    console.error("Error fetching waitlist:", error);
    return;
  }
  const madridBySource = data.filter(u => 
    u.source?.toLowerCase().includes('madrid') || 
    JSON.stringify(u).toLowerCase().includes('madrid')
  );
  console.log(`Users with 'madrid' in any field: ${madridBySource.length}`);
  if (madridBySource.length > 0) {
      console.log("Sample:", madridBySource[0]);
  }
}

searchMadrid();
