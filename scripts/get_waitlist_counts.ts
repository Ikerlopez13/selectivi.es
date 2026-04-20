import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkWaitlist() {
  const { data, error } = await supabase.from('waitlist').select('email, comunidad');
  if (error) {
    console.error("Error fetching waitlist:", error);
    return;
  }

  const madridUsers = data.filter(u => 
    u.comunidad?.toLowerCase().includes('madrid')
  );
  const andaluciaUsers = data.filter(u => 
    u.comunidad?.toLowerCase().includes('andaluc') || u.comunidad?.toLowerCase().includes('andalucía')
  );

  console.log(`Total waitlist users: ${data.length}`);
  console.log(`Madrid users: ${madridUsers.length}`);
  console.log(`Andalucia users: ${andaluciaUsers.length}`);
  
  // Show a few samples to verify
  console.log("Samples Madrid:", madridUsers.slice(0, 3));
  console.log("Samples Andalucia:", andaluciaUsers.slice(0, 3));
}

checkWaitlist();
