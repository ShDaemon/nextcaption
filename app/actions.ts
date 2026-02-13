"use server";

import { supabase } from "@/app/utils/supabase/client";
import disposableDomains from "disposable-email-domains";

export async function joinWaitlist(email: string) {
    // 1. Format Email
    const cleanEmail = email.toLowerCase().trim();

    // 2. Basic Validation
    if (!cleanEmail || !cleanEmail.includes("@")) {
        return { error: "Please enter a valid email address." };
    }

    // 3. SPAM CHECK: Block Disposable Domains
    const domain = cleanEmail.split("@")[1];
    if (disposableDomains.includes(domain)) {
        return { error: "Disposable email addresses are not allowed." };
    }

    try {
        // 4. Insert into Supabase
        const { error } = await supabase
            .from("nextcaption_waitlist")
            .insert([{ email: cleanEmail }]);

        if (error) {
            // 5. DUPLICATE CHECK: Handle Unique Constraint Violation
            // Code 23505 is PostgreSQL for "unique_violation"
            if (error.code === "23505") {
                return { error: "You are already on the waitlist!" };
            }
            console.error("Supabase Error Code:", error.code, error.message);
            throw error;
        }

        return { success: true };
    } catch (err) {
        console.error("Server Action Error:", err);
        return { error: "Something went wrong. Please try again." };
    }
}